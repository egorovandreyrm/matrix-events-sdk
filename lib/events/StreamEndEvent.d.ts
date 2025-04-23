import { IPartialEvent } from "../IPartialEvent";
import { MessageEvent } from "./MessageEvent";
import { EventType } from "../utility/events";
import { ExtensibleEvent } from "./ExtensibleEvent";
import { M_STREAM_END_EVENT_CONTENT } from "./stream_types";
export declare class StreamEndEvent extends ExtensibleEvent<M_STREAM_END_EVENT_CONTENT> {
    /**
     * The poll start event ID referenced by the response.
     */
    readonly streamEventId: string;
    /**
     * The closing message for the event.
     */
    readonly closingMessage: MessageEvent;
    /**
     * Creates a new PollEndEvent from a pure format. Note that the event is *not*
     * parsed here: it will be treated as a literal m.poll.response primary typed event.
     * @param wireFormat - The event.
     */
    constructor(wireFormat: IPartialEvent<M_STREAM_END_EVENT_CONTENT>);
    isEquivalentTo(primaryEventType: EventType): boolean;
    serialize(): IPartialEvent<object>;
    /**
     * Creates a new PollEndEvent from a poll event ID.
     * @param streamEventId - The poll start event ID.
     * @param message - A closing message, typically revealing the top answer.
     * @returns The representative poll closure event.
     */
    static from(streamEventId: string, message: string): StreamEndEvent;
}
