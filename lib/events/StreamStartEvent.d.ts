import { IPartialEvent } from "../IPartialEvent";
import { MessageEvent } from "./MessageEvent";
import { EventType } from "../utility/events";
import { ExtensibleEvent } from "./ExtensibleEvent";
import { M_STREAM_START_EVENT_CONTENT } from "./stream_types";
/**
 * Represents a poll start event.
 */
export declare class StreamStartEvent extends ExtensibleEvent<M_STREAM_START_EVENT_CONTENT> {
    readonly description: MessageEvent;
    readonly stream_app: MessageEvent;
    readonly stream_id: MessageEvent;
    readonly third_party: boolean;
    constructor(wireFormat: IPartialEvent<M_STREAM_START_EVENT_CONTENT>);
    isEquivalentTo(primaryEventType: EventType): boolean;
    serialize(): IPartialEvent<object>;
    static from(description: string, stream_app: string, stream_id: string, third_party: boolean): StreamStartEvent;
}
