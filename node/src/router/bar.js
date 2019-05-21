const handleBar = (req,res) => {
    const method = req.method
    const path = req.url.split('?')[0]
    
    if(method === 'GET' && path === '/api/bar1'){
        const echartsData = [
            {name:'出所就医',val:21},
            {name:'请假出所',val:58},
            {name:'提解出所',val:0},
        ]
        let max = 0
        echartsData.forEach(item => {
            if(item.val > max){
                max = item.val
            }
        })
        let bgData = []
        echartsData.forEach((item,index) => {
            if(item.val === 0){
                bgData[index] = max
            }else{
                bgData[index] = 0
            }
        })

        return {echartsData,bgData}
    }

    if(method === 'GET' && path === '/api/bar2'){
        // '刑拘', '逮捕', '补帧（1）', '补帧（2）', '其他'
        const echartsData = [
            {name:'刑拘',val:21},
            {name:'逮捕',val:58},
            {name:'补帧（1）',val:60},
            {name:'补帧（2）',val:45},
            {name:'其他',val:17},
        ]

        return {echartsData}
    }
}
module.exports = handleBar