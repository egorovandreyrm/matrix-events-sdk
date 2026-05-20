"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMMapPin = parseMMapPin;

var _map_pin_types = require("../../events/map_pin_types");

var _MapPinEvent = require("../../events/MapPinEvent");

function parseMMapPin(wireEvent) {
  if (_map_pin_types.M_MAP_PIN == wireEvent.type) {
    return new _MapPinEvent.MapPinEvent(wireEvent);
  }

  return null; // not a map pin event
}