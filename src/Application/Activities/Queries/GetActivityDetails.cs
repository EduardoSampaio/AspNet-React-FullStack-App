using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
    public class Query : IRequest<Activity?>
    {
        public Guid Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity?>
    {
        private readonly AppDbContext _context = context;

        public async Task<Activity?> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await _context.Activities.FindAsync([request.Id.ToString()], cancellationToken);

            if (activity == null) throw new Exception("Activity not found");

            return activity;
        }
    }
}