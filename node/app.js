const handleBar = require('./src/router/bar')

const serverHandle = (req,res)=>{
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5501");
    //允许的header类型
    res.setHeader("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.setHeader("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    //设置返回的格式
    res.setHeader("Content-type","application/json; charset=UTF-8")
    let resData = ""
    req.on('data',chunck => {
        resData += chunck.toString()
    })

    //获取柱形图数据
    const bar = handleBar(req,res)
    
    if(bar){
        res.end(
            JSON.stringify(bar)
        )
    }
}

module.exports = serverHandle