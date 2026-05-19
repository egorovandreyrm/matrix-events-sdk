import { IPartialEvent } from "../../IPartialEvent";
import { Optional } from "../../types";

import { M_MAP_PIN, M_MAP_PIN_EVENT_CONTENT } from "../../events/map_pin_types";
import { MapPinEvent } from "../../events/MapPinEvent";

export function parseMMapPin(wireEvent: IPartialEvent<M_MAP_PIN_EVENT_CONTENT>): Optional<MapPinEvent> {
    if (M_MAP_PIN.matches(wireEvent.type)) {
        return new MapPinEvent(wireEvent);
    }

    return null; // not a map pin event
}