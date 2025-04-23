import { IPartialEvent } from "../../IPartialEvent";
import { Optional } from "../../types";
import { M_STREAM_END_EVENT_CONTENT, M_STREAM_START_EVENT_CONTENT } from "../../events/stream_types";
import { StreamStartEvent } from "../../events/StreamStartEvent";
import { StreamEndEvent } from "../../events/StreamEndEvent";
declare type StreamContent = M_STREAM_START_EVENT_CONTENT | M_STREAM_END_EVENT_CONTENT;
declare type StreamEvent = StreamStartEvent | StreamEndEvent;
export declare function parseMStream(wireEvent: IPartialEvent<StreamContent>): Optional<StreamEvent>;
export {};
