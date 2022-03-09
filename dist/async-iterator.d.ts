import { $$asyncIterator } from 'iterall';
import { PubSubEngine } from 'graphql-subscriptions';
export declare class PubSubAsyncIterator<T> implements AsyncIterator<T> {
    constructor(pubSubEngine: PubSubEngine, subNames: string | string[], options: any);
    next(): Promise<IteratorResult<any, any>>;
    return(): Promise<{
        value: any;
        done: boolean;
    }>;
    throw(error: any): Promise<never>;
    [$$asyncIterator](): this;
    private pullQueue;
    private pushQueue;
    private eventsArray;
    private allSubscribed;
    private listening;
    private pubsub;
    private options;
    private pushValue;
    private pullValue;
    private emptyQueue;
    private subscribeAll;
    private unsubscribeAll;
}
