// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

// var jspb = require('google-protobuf');
import * as jspb from 'google-protobuf';
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.network.ErrorCode', null, global);
goog.exportSymbol('proto.network.MessageType', null, global);
goog.exportSymbol('proto.network.RpcMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.network.RpcMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.network.RpcMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.network.RpcMessage.displayName = 'proto.network.RpcMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.network.RpcMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.network.RpcMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.network.RpcMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.RpcMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    service: jspb.Message.getFieldWithDefault(msg, 3, ""),
    method: jspb.Message.getFieldWithDefault(msg, 4, ""),
    request: msg.getRequest_asB64(),
    response: msg.getResponse_asB64(),
    error: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.network.RpcMessage}
 */
proto.network.RpcMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.network.RpcMessage;
  return proto.network.RpcMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.network.RpcMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.network.RpcMessage}
 */
proto.network.RpcMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.network.MessageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRequest(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResponse(value);
      break;
    case 7:
      var value = /** @type {!proto.network.ErrorCode} */ (reader.readEnum());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.network.RpcMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.network.RpcMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.network.RpcMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.RpcMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRequest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getResponse_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getError();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional MessageType type = 1;
 * @return {!proto.network.MessageType}
 */
proto.network.RpcMessage.prototype.getType = function() {
  return /** @type {!proto.network.MessageType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.network.MessageType} value
 * @return {!proto.network.RpcMessage} returns this
 */
proto.network.RpcMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 id = 2;
 * @return {number}
 */
proto.network.RpcMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.network.RpcMessage} returns this
 */
proto.network.RpcMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string service = 3;
 * @return {string}
 */
proto.network.RpcMessage.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.network.RpcMessage} returns this
 */
proto.network.RpcMessage.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string method = 4;
 * @return {string}
 */
proto.network.RpcMessage.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.network.RpcMessage} returns this
 */
proto.network.RpcMessage.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes request = 5;
 * @return {!(string|Uint8Array)}
 */
proto.network.RpcMessage.prototype.getRequest = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes request = 5;
 * This is a type-conversion wrapper around `getRequest()`
 * @return {string}
 */
proto.network.RpcMessage.prototype.getRequest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRequest()));
};


/**
 * optional bytes request = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRequest()`
 * @return {!Uint8Array}
 */
proto.network.RpcMessage.prototype.getRequest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRequest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.network.RpcMessage} returns this
 */
proto.network.RpcMessage.prototype.setRequest = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes response = 6;
 * @return {!(string|Uint8Array)}
 */
proto.network.RpcMessage.prototype.getResponse = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes response = 6;
 * This is a type-conversion wrapper around `getResponse()`
 * @return {string}
 */
proto.network.RpcMessage.prototype.getResponse_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResponse()));
};


/**
 * optional bytes response = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResponse()`
 * @return {!Uint8Array}
 */
proto.network.RpcMessage.prototype.getResponse_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResponse()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.network.RpcMessage} returns this
 */
proto.network.RpcMessage.prototype.setResponse = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional ErrorCode error = 7;
 * @return {!proto.network.ErrorCode}
 */
proto.network.RpcMessage.prototype.getError = function() {
  return /** @type {!proto.network.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.network.ErrorCode} value
 * @return {!proto.network.RpcMessage} returns this
 */
proto.network.RpcMessage.prototype.setError = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * @enum {number}
 */
proto.network.MessageType = {
  REQUEST: 0,
  RESPONSE: 1
};

/**
 * @enum {number}
 */
proto.network.ErrorCode = {
  NO_ERROR: 0,
  WRONG_PROTO: 1,
  NO_SERVICE: 2,
  NO_METHOD: 3,
  INVALID_REQUEST: 4,
  INVALID_RESPONSE: 5,
  TIMEOUT: 6
};

// goog.object.extend(exports, proto.network);
export { proto };