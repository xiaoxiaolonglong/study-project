const http = require('http')
const PORT = 8000
const server = http.createServer((req,res)=>{
    const serverHandle = require('../app')
    serverHandle(req,res)
})
server.listen(PORT)
console.log('ok')