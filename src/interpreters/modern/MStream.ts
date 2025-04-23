import { IPartialEvent } from "../../IPartialEvent";
import { Optional } from "../../types";

import {
    M_STREAM_END,
    M_STREAM_END_EVENT_CONTENT,
    M_STREAM_START,
    M_STREAM_START_EVENT_CONTENT
} from "../../events/stream_types";
import {StreamStartEvent} from "../../events/StreamStartEvent";
import {StreamEndEvent} from "../../events/StreamEndEvent";

type StreamContent = M_STREAM_START_EVENT_CONTENT | M_STREAM_END_EVENT_CONTENT;
type StreamEvent = StreamStartEvent | StreamEndEvent;

export function parseMStream(wireEvent: IPartialEvent<StreamContent>): Optional<StreamEvent> {
    if (M_STREAM_START.matches(wireEvent.type)) {
        return new StreamStartEvent(wireEvent as IPartialEvent<M_STREAM_START_EVENT_CONTENT>);
    } else if (M_STREAM_END.matches(wireEvent.type)) {
        return new StreamEndEvent(wireEvent as IPartialEvent<M_STREAM_END_EVENT_CONTENT>);
    }

    return null; // not a stream event
}
