import { makeAutoObservable } from "mobx";
export default class CounterStore {
    title = 'Counter store';
    count = 42;
    events: string[] = [
        `Initial count is ${this.count}`
    ];

    constructor() {
        makeAutoObservable(this)
    }

    increment = () => {
        this.count++;
        this.events.push(`Incremented count to ${this.count}`);
    };

    decrement = () => {
        this.count--;
        this.events.push(`Decremented count to ${this.count}`);
    };

    get eventCount() {
        return this.events.length;
    }
} 