using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{

    public class Query : IRequest<List<Activity>>
    {
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
    {
        private readonly AppDbContext _context = context;

        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _context.Activities.ToListAsync(cancellationToken);
        }
    }
}