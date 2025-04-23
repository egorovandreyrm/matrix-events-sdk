"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.M_STREAM_START = exports.M_STREAM_END = void 0;

var _NamespacedValue = require("../NamespacedValue");

/**
 * The namespaced value for m.poll.start
 */
var M_STREAM_START = new _NamespacedValue.UnstableValue("m.stream.start", "org.matrix.msc3381.stream.start");
/**
 * The m.poll.start type within event content
 */

exports.M_STREAM_START = M_STREAM_START;

/**
 * The namespaced value for m.poll.end
 */
var M_STREAM_END = new _NamespacedValue.UnstableValue("m.stream.end", "org.matrix.msc3381.stream.end");
/**
 * The event definition for an m.poll.end event (in content)
 */

exports.M_STREAM_END = M_STREAM_END;