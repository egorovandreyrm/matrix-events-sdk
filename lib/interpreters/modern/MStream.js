"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMStream = parseMStream;

var _stream_types = require("../../events/stream_types");

var _StreamStartEvent = require("../../events/StreamStartEvent");

var _StreamEndEvent = require("../../events/StreamEndEvent");

function parseMStream(wireEvent) {
  if (_stream_types.M_STREAM_START.matches(wireEvent.type)) {
    return new _StreamStartEvent.StreamStartEvent(wireEvent);
  } else if (_stream_types.M_STREAM_END.matches(wireEvent.type)) {
    return new _StreamEndEvent.StreamEndEvent(wireEvent);
  }

  return null; // not a stream event
}