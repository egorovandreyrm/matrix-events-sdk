import { UnstableValue } from "../NamespacedValue";
import { EitherAnd, TSNamespace } from "../types";
import { M_MESSAGE_EVENT_CONTENT } from "./message_types";
import { REFERENCE_RELATION, RELATES_TO_RELATIONSHIP } from "./relationship_types";

/**
 * The namespaced value for m.poll.start
 */
export const M_STREAM_START = new UnstableValue("m.stream.start", "org.matrix.msc3381.stream.start");

/**
 * The m.poll.start type within event content
 */
export type M_STREAM_START_SUBTYPE = {
    description: M_MESSAGE_EVENT_CONTENT;
    stream_url: M_MESSAGE_EVENT_CONTENT;
    third_party: boolean
};

/**
 * The event definition for an m.poll.start event (in content)
 */
export type M_STREAM_START_EVENT = EitherAnd<{ [M_STREAM_START.name]: M_STREAM_START_SUBTYPE }, { [M_STREAM_START.altName]: M_STREAM_START_SUBTYPE }>;

/**
 * The content for an m.poll.start event
 */
export type M_STREAM_START_EVENT_CONTENT = M_STREAM_START_EVENT & M_MESSAGE_EVENT_CONTENT;

/**
 * The namespaced value for m.poll.end
 */
export const M_STREAM_END = new UnstableValue("m.stream.end", "org.matrix.msc3381.stream.end");

/**
 * The event definition for an m.poll.end event (in content)
 */
export type M_STREAM_END_EVENT = EitherAnd<{ [M_STREAM_END.name]: {} }, { [M_STREAM_END.altName]: {} }>;

/**
 * The content for an m.poll.end event
 */
export type M_STREAM_END_EVENT_CONTENT = M_STREAM_END_EVENT & RELATES_TO_RELATIONSHIP<typeof REFERENCE_RELATION> & M_MESSAGE_EVENT_CONTENT;
