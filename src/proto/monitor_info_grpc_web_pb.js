/**
 * @fileoverview gRPC-Web generated client stub for monitor.proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.1
// source: monitor_info.proto


/* eslint-disable */
// @ts-nocheck



import * as grpcWeb from 'grpc-web';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js';
import * as net_info_pb from './net_info_pb.js';
import * as mem_info_pb from './mem_info_pb.js';
import * as cpu_stat_pb from './cpu_stat_pb.js';
import * as cpu_softirq_pb from './cpu_softirq_pb.js';
import * as cpu_load_pb from './cpu_load_pb.js';
import * as cpu_info_pb from './cpu_info_pb.js';
import * as monitorInfoPb from './monitor_info_pb.js';
const grpc = {};
grpc.web = grpcWeb;
  // require('grpc-web');


// var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

// var net_info_pb = require('./net_info_pb.js')

// var mem_info_pb = require('./mem_info_pb.js')

// var cpu_stat_pb = require('./cpu_stat_pb.js')

// var cpu_softirq_pb = require('./cpu_softirq_pb.js')

// var cpu_load_pb = require('./cpu_load_pb.js')
const proto = {};
proto.monitor = {};
proto.monitor.proto = Object.assign({},monitorInfoPb)
// require('./monitor_info_pb.js');
// console.log(Object.isExtensible(proto.monitor.proto));

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.monitor.proto.GrpcManagerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.monitor.proto.GrpcManagerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.monitor.proto.MonitorInfo,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_GrpcManager_SetMonitorInfo = new grpc.web.MethodDescriptor(
  '/monitor.proto.GrpcManager/SetMonitorInfo',
  grpc.web.MethodType.UNARY,
  proto.monitor.proto.MonitorInfo,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.monitor.proto.MonitorInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.monitor.proto.MonitorInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.monitor.proto.GrpcManagerClient.prototype.setMonitorInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/monitor.proto.GrpcManager/SetMonitorInfo',
      request,
      metadata || {},
      methodDescriptor_GrpcManager_SetMonitorInfo,
      callback);
};


/**
 * @param {!proto.monitor.proto.MonitorInfo} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.monitor.proto.GrpcManagerPromiseClient.prototype.setMonitorInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/monitor.proto.GrpcManager/SetMonitorInfo',
      request,
      metadata || {},
      methodDescriptor_GrpcManager_SetMonitorInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.monitor.proto.MonitorInfo>}
 */
const methodDescriptor_GrpcManager_GetMonitorInfo = new grpc.web.MethodDescriptor(
  '/monitor.proto.GrpcManager/GetMonitorInfo',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.monitor.proto.MonitorInfo,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.monitor.proto.MonitorInfo.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.monitor.proto.MonitorInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.monitor.proto.MonitorInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.monitor.proto.GrpcManagerClient.prototype.getMonitorInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/monitor.proto.GrpcManager/GetMonitorInfo',
      request,
      metadata || {},
      methodDescriptor_GrpcManager_GetMonitorInfo,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.monitor.proto.MonitorInfo>}
 *     Promise that resolves to the response
 */
proto.monitor.proto.GrpcManagerPromiseClient.prototype.getMonitorInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/monitor.proto.GrpcManager/GetMonitorInfo',
      request,
      metadata || {},
      methodDescriptor_GrpcManager_GetMonitorInfo);
};


// module.exports = proto.monitor.proto;
const web_pb = proto.monitor.proto
export default {...web_pb}

