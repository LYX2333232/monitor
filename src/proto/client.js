import * as monitor from './monitor_info_grpc_web_pb'
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb.js';

// console.log(monitor.default.GrpcManagerClient)

const request = new google_protobuf_empty_pb.Empty()
// console.log('http://139.199.192.218:50051');

// const client = new monitor.default.GrpcManagerClient('http://47.236.36.97:50051')
const client = new monitor.default.GrpcManagerClient('http://139.199.192.218:8080')
console.log(client)

let res 
 
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
async function update() {
    try {
        res = await getMonitorInfo()
    } catch (err) {
        console.error(err)
    }
}
setInterval(update, 2000);
await update()
// console.log(res)

export default res
