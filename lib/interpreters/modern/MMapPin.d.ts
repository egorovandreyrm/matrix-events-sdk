import { IPartialEvent } from "../../IPartialEvent";
import { Optional } from "../../types";
import { M_MAP_PIN_EVENT_CONTENT } from "../../events/map_pin_types";
import { MapPinEvent } from "../../events/MapPinEvent";
export declare function parseMMapPin(wireEvent: IPartialEvent<M_MAP_PIN_EVENT_CONTENT>): Optional<MapPinEvent>;
