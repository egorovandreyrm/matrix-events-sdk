"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamStartEvent = void 0;

var _MessageEvent = require("./MessageEvent");

var _message_types = require("./message_types");

var _InvalidEventError = require("../InvalidEventError");

var _events = require("../utility/events");

var _ExtensibleEvent2 = require("./ExtensibleEvent");

var _stream_types = require("./stream_types");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Represents a poll start event.
 */
var StreamStartEvent = /*#__PURE__*/function (_ExtensibleEvent) {
  _inherits(StreamStartEvent, _ExtensibleEvent);

  var _super = _createSuper(StreamStartEvent);

  function StreamStartEvent(wireFormat) {
    var _this;

    _classCallCheck(this, StreamStartEvent);

    _this = _super.call(this, wireFormat);

    _defineProperty(_assertThisInitialized(_this), "description", void 0);

    _defineProperty(_assertThisInitialized(_this), "stream_app", void 0);

    _defineProperty(_assertThisInitialized(_this), "stream_id", void 0);

    _defineProperty(_assertThisInitialized(_this), "third_party", void 0);

    var stream = _stream_types.M_STREAM_START.findIn(_this.wireContent);

    if (!(stream !== null && stream !== void 0 && stream.description)) {
      throw new _InvalidEventError.InvalidEventError("A description is required");
    }

    if (!(stream !== null && stream !== void 0 && stream.stream_app)) {
      throw new _InvalidEventError.InvalidEventError("A stream_url is required");
    }

    if (!(stream !== null && stream !== void 0 && stream.stream_id)) {
      throw new _InvalidEventError.InvalidEventError("A stream_id is required");
    }

    if ((stream === null || stream === void 0 ? void 0 : stream.third_party) == null) {
      throw new _InvalidEventError.InvalidEventError("A third_party is required");
    }

    _this.description = new _MessageEvent.MessageEvent({
      type: "org.matrix.sdk.stream.description",
      content: stream.description
    });
    _this.stream_app = new _MessageEvent.MessageEvent({
      type: "org.matrix.sdk.stream.stream_url",
      content: stream.stream_app
    });
    _this.stream_id = new _MessageEvent.MessageEvent({
      type: "org.matrix.sdk.stream.stream_id",
      content: stream.stream_id
    });
    _this.third_party = stream.third_party;
    return _this;
  }

  _createClass(StreamStartEvent, [{
    key: "isEquivalentTo",
    value: function isEquivalentTo(primaryEventType) {
      return (0, _events.isEventTypeSame)(primaryEventType, _stream_types.M_STREAM_START);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var _content;

      return {
        type: _stream_types.M_STREAM_START.name,
        content: (_content = {}, _defineProperty(_content, _stream_types.M_STREAM_START.name, {
          description: this.description.serialize().content,
          stream_app: this.stream_app.serialize().content,
          stream_id: this.stream_app.serialize().content,
          third_party: this.third_party
        }), _defineProperty(_content, _message_types.M_TEXT.name, "".concat(this.description.text, " app: ").concat(this.stream_app.text, " id: ").concat(this.stream_id.text, " third_party: ").concat(this.third_party)), _content)
      };
    }
  }], [{
    key: "from",
    value: function from(description, stream_app, stream_id, third_party) {
      var _content2;

      return new StreamStartEvent({
        type: _stream_types.M_STREAM_START.name,
        content: (_content2 = {}, _defineProperty(_content2, _message_types.M_TEXT.name, description), _defineProperty(_content2, _stream_types.M_STREAM_START.name, {
          description: _defineProperty({}, _message_types.M_TEXT.name, description),
          stream_app: _defineProperty({}, _message_types.M_TEXT.name, stream_app),
          stream_id: _defineProperty({}, _message_types.M_TEXT.name, stream_id),
          third_party: third_party
        }), _content2)
      });
    }
  }]);

  return StreamStartEvent;
}(_ExtensibleEvent2.ExtensibleEvent);

exports.StreamStartEvent = StreamStartEvent;