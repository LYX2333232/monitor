import * as monitor from './monitor_info_grpc_web_pb'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js';

console.log('monitor',monitor.default.GrpcManagerClient)

const request = new google_protobuf_empty_pb.Empty()

// const client = new monitor.default.GrpcManagerClient('http://47.236.36.97:50051')
const client = new monitor.default.GrpcManagerClient('http://139.199.192.218:8080')
// const client = new monitor.default.GrpcManagerClient('http://47.236.36.97:8080')
 
async function getMonitorInfo() {
    return new Promise((resolve, reject) => {
        client.getMonitorInfo(request, {}, (err, response) => {
            if (err) {
                console.error(err)
                reject(err)
            }
            resolve(response)
        })
    })
}
export default getMonitorInfo
