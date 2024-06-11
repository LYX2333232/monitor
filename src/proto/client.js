import * as monitor from './monitor_info_grpc_web_pb'

// console.log(monitor.default.GrpcManagerClient)

const client = new monitor.default.GrpcManagerClient('http://47.236.36.97:50051')

export default client