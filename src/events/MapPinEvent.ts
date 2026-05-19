import { IPartialEvent } from "../IPartialEvent";
import { MessageEvent } from "./MessageEvent";
import { M_TEXT } from "./message_types";
import { InvalidEventError } from "../InvalidEventError";
import { EventType, isEventTypeSame } from "../utility/events";
import { ExtensibleEvent } from "./ExtensibleEvent";
import {
    KNOWN_MAP_PIN_TYPE,
    M_MAP_PIN,
    M_MAP_PIN_EVENT_CONTENT,
    M_MAPPIN_TYPE_PIN,
    M_MAPPIN_TYPE_TRACKER,
} from "./map_pin_types";

/**
 * Represents a map pin event.
 */
export class MapPinEvent extends ExtensibleEvent<M_MAP_PIN_EVENT_CONTENT> {
    /**
     * The text fallback representation of the map pin.
     */
    public readonly text: MessageEvent;

    /**
     * The type of the map pin.
     */
    public readonly pinType: KNOWN_MAP_PIN_TYPE;

    public readonly rawPinType: string;
    /**
     * The ID of the map pin.
     */
    public readonly id: number;

    /**
     * The name of the map pin.
     */
    public readonly name: string;

    public constructor(wireFormat: IPartialEvent<M_MAP_PIN_EVENT_CONTENT>) {
        super(wireFormat);

        // const mapPin = M_MAP_PIN<M_MAP_PIN_SUBTYPE>(this.wireContent);
        const mapPin = this.wireContent[M_MAP_PIN];

        if (!mapPin?.type) {
            throw new InvalidEventError("A type is required");
        }

        if (mapPin?.id == null) {
            throw new InvalidEventError("An id is required");
        }

        if (!mapPin?.name) {
            throw new InvalidEventError("A name is required");
        }

        this.rawPinType = mapPin.type;

        if (M_MAPPIN_TYPE_TRACKER == mapPin.type) {
            this.pinType = M_MAPPIN_TYPE_TRACKER;
        } else {
            this.pinType = M_MAPPIN_TYPE_PIN;
        }

        this.id = mapPin.id;
        this.name = mapPin.name;
        this.text = new MessageEvent(this.wireFormat);
    }

    public isEquivalentTo(primaryEventType: EventType): boolean {
        return isEventTypeSame(primaryEventType, M_MAP_PIN);
    }

    public serialize(): IPartialEvent<object> {
        return {
            type: M_MAP_PIN,
            content: {
                [M_MAP_PIN]: {
                    type: this.pinType,
                    id: this.id,
                    name: this.name,
                },
                [M_TEXT.name]: this.text.text,
            },
        };
    }

    public static from(
        name: string,
        id: number,
        pinType: KNOWN_MAP_PIN_TYPE | string,
    ): MapPinEvent {
        return new MapPinEvent({
            type: M_MAP_PIN,
            content: {
                [M_TEXT.name]: name,
                [M_MAP_PIN]: {
                    type: pinType,
                    id: id,
                    name: name,
                },
            },
        });
    }
}
