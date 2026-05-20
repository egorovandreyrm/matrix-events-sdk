import { TSNamespace } from "../types";
import { M_MESSAGE_EVENT_CONTENT } from "./message_types";
export declare const M_MAPPIN_TYPE_PIN = "m.pin";
export declare const M_MAPPIN_TYPE_TRACKER = "m.tracker";
export declare type M_MAP_PIN_TYPE = TSNamespace<typeof M_MAPPIN_TYPE_PIN> | TSNamespace<typeof M_MAPPIN_TYPE_TRACKER> | string;
export declare type KNOWN_MAP_PIN_TYPE = (typeof M_MAPPIN_TYPE_PIN) | (typeof M_MAPPIN_TYPE_TRACKER);
/**
 * The namespaced value for m.map_pin
 */
export declare const M_MAP_PIN = "m.map_pin";
/**
 * The m.map_pin type within event content
 */
export declare type M_MAP_PIN_SUBTYPE = {
    type: M_MAP_PIN_TYPE;
    id: number;
    name: string;
};
/**
 * The event definition for an m.map_pin event (in content)
 */
export declare type M_MAP_PIN_EVENT = {
    [M_MAP_PIN]: M_MAP_PIN_SUBTYPE;
};
/**
 * The content for an m.map_pin event
 */
export declare type M_MAP_PIN_EVENT_CONTENT = M_MAP_PIN_EVENT & M_MESSAGE_EVENT_CONTENT;
