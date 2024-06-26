// source: metric_info.proto
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

goog.exportSymbol('proto.monitor.proto.MetricInfo', null, global);
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
proto.monitor.proto.MetricInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.monitor.proto.MetricInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.monitor.proto.MetricInfo.displayName = 'proto.monitor.proto.MetricInfo';
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
proto.monitor.proto.MetricInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.monitor.proto.MetricInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.monitor.proto.MetricInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.monitor.proto.MetricInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    httpServerRequests: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    executorPoolMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    tomcatSessionsCreated: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    diskTotal: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    diskFree: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    tomcatSessionsExpired: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    tasksScheduledExecution: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    executorQueueRemaining: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    executorQueued: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    jvmMemoryUsed: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    httpServerRequestsActive: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    jvmThreadsDaemon: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    tomcatSessionsActiveCurrent: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    tomcatSessionsActiveMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    systemCpuUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    jvmMemoryUsageAfterGc: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
    jvmThreadsPeak: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
    processCpuUsage: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
    jvmThreadsLive: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
    executorPoolSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
    jvmGcOverhead: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    jvmThreadsStarted: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
    executorCompleted: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
    executorActive: jspb.Message.getFloatingPointFieldWithDefault(msg, 24, 0.0),
    tasksScheduledExecutionActive: jspb.Message.getFloatingPointFieldWithDefault(msg, 25, 0.0)
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
 * @return {!proto.monitor.proto.MetricInfo}
 */
proto.monitor.proto.MetricInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.monitor.proto.MetricInfo;
  return proto.monitor.proto.MetricInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.monitor.proto.MetricInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.monitor.proto.MetricInfo}
 */
proto.monitor.proto.MetricInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHttpServerRequests(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setExecutorPoolMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTomcatSessionsCreated(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDiskTotal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDiskFree(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTomcatSessionsExpired(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTasksScheduledExecution(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setExecutorQueueRemaining(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setExecutorQueued(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJvmMemoryUsed(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHttpServerRequestsActive(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJvmThreadsDaemon(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTomcatSessionsActiveCurrent(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTomcatSessionsActiveMax(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSystemCpuUsage(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJvmMemoryUsageAfterGc(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJvmThreadsPeak(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProcessCpuUsage(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJvmThreadsLive(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setExecutorPoolSize(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJvmGcOverhead(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setJvmThreadsStarted(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setExecutorCompleted(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setExecutorActive(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTasksScheduledExecutionActive(value);
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
proto.monitor.proto.MetricInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.monitor.proto.MetricInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.monitor.proto.MetricInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.monitor.proto.MetricInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttpServerRequests();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getExecutorPoolMax();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTomcatSessionsCreated();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getDiskTotal();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getDiskFree();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getTomcatSessionsExpired();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getTasksScheduledExecution();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getExecutorQueueRemaining();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getExecutorQueued();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getJvmMemoryUsed();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getHttpServerRequestsActive();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getJvmThreadsDaemon();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getTomcatSessionsActiveCurrent();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getTomcatSessionsActiveMax();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getSystemCpuUsage();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getJvmMemoryUsageAfterGc();
  if (f !== 0.0) {
    writer.writeFloat(
      16,
      f
    );
  }
  f = message.getJvmThreadsPeak();
  if (f !== 0.0) {
    writer.writeFloat(
      17,
      f
    );
  }
  f = message.getProcessCpuUsage();
  if (f !== 0.0) {
    writer.writeFloat(
      18,
      f
    );
  }
  f = message.getJvmThreadsLive();
  if (f !== 0.0) {
    writer.writeFloat(
      19,
      f
    );
  }
  f = message.getExecutorPoolSize();
  if (f !== 0.0) {
    writer.writeFloat(
      20,
      f
    );
  }
  f = message.getJvmGcOverhead();
  if (f !== 0.0) {
    writer.writeFloat(
      21,
      f
    );
  }
  f = message.getJvmThreadsStarted();
  if (f !== 0.0) {
    writer.writeFloat(
      22,
      f
    );
  }
  f = message.getExecutorCompleted();
  if (f !== 0.0) {
    writer.writeFloat(
      23,
      f
    );
  }
  f = message.getExecutorActive();
  if (f !== 0.0) {
    writer.writeFloat(
      24,
      f
    );
  }
  f = message.getTasksScheduledExecutionActive();
  if (f !== 0.0) {
    writer.writeFloat(
      25,
      f
    );
  }
};


/**
 * optional float http_server_requests = 1;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getHttpServerRequests = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setHttpServerRequests = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float executor_pool_max = 2;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getExecutorPoolMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setExecutorPoolMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float tomcat_sessions_created = 3;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getTomcatSessionsCreated = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setTomcatSessionsCreated = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float disk_total = 4;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getDiskTotal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setDiskTotal = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float disk_free = 5;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getDiskFree = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setDiskFree = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float tomcat_sessions_expired = 6;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getTomcatSessionsExpired = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setTomcatSessionsExpired = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float tasks_scheduled_execution = 7;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getTasksScheduledExecution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setTasksScheduledExecution = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float executor_queue_remaining = 8;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getExecutorQueueRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setExecutorQueueRemaining = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float executor_queued = 9;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getExecutorQueued = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setExecutorQueued = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float jvm_memory_used = 10;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getJvmMemoryUsed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setJvmMemoryUsed = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float http_server_requests_active = 11;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getHttpServerRequestsActive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setHttpServerRequestsActive = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional float jvm_threads_daemon = 12;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getJvmThreadsDaemon = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setJvmThreadsDaemon = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float tomcat_sessions_active_current = 13;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getTomcatSessionsActiveCurrent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setTomcatSessionsActiveCurrent = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional float tomcat_sessions_active_max = 14;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getTomcatSessionsActiveMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setTomcatSessionsActiveMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional float system_cpu_usage = 15;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getSystemCpuUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setSystemCpuUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional float jvm_memory_usage_after_gc = 16;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getJvmMemoryUsageAfterGc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setJvmMemoryUsageAfterGc = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional float jvm_threads_peak = 17;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getJvmThreadsPeak = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setJvmThreadsPeak = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional float process_cpu_usage = 18;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getProcessCpuUsage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setProcessCpuUsage = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional float jvm_threads_live = 19;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getJvmThreadsLive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setJvmThreadsLive = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional float executor_pool_size = 20;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getExecutorPoolSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setExecutorPoolSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional float jvm_gc_overhead = 21;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getJvmGcOverhead = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setJvmGcOverhead = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional float jvm_threads_started = 22;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getJvmThreadsStarted = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setJvmThreadsStarted = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional float executor_completed = 23;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getExecutorCompleted = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setExecutorCompleted = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional float executor_active = 24;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getExecutorActive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setExecutorActive = function(value) {
  return jspb.Message.setProto3FloatField(this, 24, value);
};


/**
 * optional float tasks_scheduled_execution_active = 25;
 * @return {number}
 */
proto.monitor.proto.MetricInfo.prototype.getTasksScheduledExecutionActive = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.monitor.proto.MetricInfo} returns this
 */
proto.monitor.proto.MetricInfo.prototype.setTasksScheduledExecutionActive = function(value) {
  return jspb.Message.setProto3FloatField(this, 25, value);
};


// goog.object.extend(exports, proto.monitor.proto);
export const MetricInfo = proto.monitor.proto.MetricInfo
