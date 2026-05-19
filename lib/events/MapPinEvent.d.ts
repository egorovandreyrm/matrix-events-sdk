import { IPartialEvent } from "../IPartialEvent";
import { MessageEvent } from "./MessageEvent";
import { EventType } from "../utility/events";
import { ExtensibleEvent } from "./ExtensibleEvent";
import { KNOWN_MAP_PIN_TYPE, M_MAP_PIN_EVENT_CONTENT } from "./map_pin_types";
/**
 * Represents a map pin event.
 */
export declare class MapPinEvent extends ExtensibleEvent<M_MAP_PIN_EVENT_CONTENT> {
    /**
     * The text fallback representation of the map pin.
     */
    readonly text: MessageEvent;
    /**
     * The type of the map pin.
     */
    readonly pinType: KNOWN_MAP_PIN_TYPE;
    readonly rawPinType: string;
    /**
     * The ID of the map pin.
     */
    readonly id: number;
    /**
     * The name of the map pin.
     */
    readonly name: string;
    constructor(wireFormat: IPartialEvent<M_MAP_PIN_EVENT_CONTENT>);
    isEquivalentTo(primaryEventType: EventType): boolean;
    serialize(): IPartialEvent<object>;
    static from(name: string, id: number, pinType: KNOWN_MAP_PIN_TYPE | string): MapPinEvent;
}
