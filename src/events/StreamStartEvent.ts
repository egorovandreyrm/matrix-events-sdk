import { IPartialEvent } from "../IPartialEvent";
import { MessageEvent } from "./MessageEvent";
import { M_TEXT } from "./message_types";
import { InvalidEventError } from "../InvalidEventError";
import { EventType, isEventTypeSame } from "../utility/events";
import { ExtensibleEvent } from "./ExtensibleEvent";
import {M_STREAM_START, M_STREAM_START_EVENT_CONTENT, M_STREAM_START_SUBTYPE} from "./stream_types";

/**
 * Represents a poll start event.
 */
export class StreamStartEvent extends ExtensibleEvent<M_STREAM_START_EVENT_CONTENT> {
    public readonly description: MessageEvent;
    public readonly stream_app: MessageEvent;
    public readonly stream_id: MessageEvent;
    public readonly third_party: boolean;

    public constructor(wireFormat: IPartialEvent<M_STREAM_START_EVENT_CONTENT>) {
        super(wireFormat);

        const stream = M_STREAM_START.findIn<M_STREAM_START_SUBTYPE>(this.wireContent);

        if (!stream?.description) {
            throw new InvalidEventError("A description is required");
        }

        if (!stream?.stream_app) {
            throw new InvalidEventError("A stream_url is required");
        }

        if (!stream?.stream_id) {
            throw new InvalidEventError("A stream_id is required");
        }

        if (stream?.third_party == null) {
            throw new InvalidEventError("A third_party is required");
        }

        this.description = new MessageEvent({ type: "org.matrix.sdk.stream.description", content: stream.description });
        this.stream_app = new MessageEvent({ type: "org.matrix.sdk.stream.stream_url", content: stream.stream_app });
        this.stream_id = new MessageEvent({ type: "org.matrix.sdk.stream.stream_id", content: stream.stream_id });
        this.third_party = stream.third_party;
    }

    public isEquivalentTo(primaryEventType: EventType): boolean {
        return isEventTypeSame(primaryEventType, M_STREAM_START);
    }

    public serialize(): IPartialEvent<object> {
        return {
            type: M_STREAM_START.name,
            content: {
                [M_STREAM_START.name]: {
                    description: this.description.serialize().content,
                    stream_app: this.stream_app.serialize().content,
                    stream_id: this.stream_app.serialize().content,
                    third_party: this.third_party,
                },
                [M_TEXT.name]: `${this.description.text} app: ${this.stream_app.text} id: ${this.stream_id.text} third_party: ${this.third_party}`,
            },
        };
    }

    public static from(
        description: string,
        stream_app: string,
        stream_id: string,
        third_party: boolean,
    ): StreamStartEvent {
        return new StreamStartEvent({
            type: M_STREAM_START.name,
            content: {
                [M_TEXT.name]: description, // unused by parsing
                [M_STREAM_START.name]: {
                    description: { [M_TEXT.name]: description },
                    stream_app: { [M_TEXT.name]: stream_app },
                    stream_id: { [M_TEXT.name]: stream_id },
                    third_party: third_party,
                },
            },
        });
    }
}
