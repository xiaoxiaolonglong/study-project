//柱状图1
var myChart1 = echarts.init(document.getElementById('main1'));
var option1 = {
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //         type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //     }
    // },
    /* legend: {
        orient: 'vertical',
        data: [{
            name: '出所就医',
            // 强制设置图形为圆。
            icon: 'circle',
        }, {
            name: '请假出所',
            // 强制设置图形为圆。
            icon: 'circle',
        }, {
            name: '提解出所',
            // 强制设置图形为圆。
            icon: 'circle',
        }],
        x: "left",
        top: "middle",
        textStyle:{
            color:'#dfe0e1'
        }
    },
    grid: {
        left: '12%',
        right: '4%',
        bottom: '3%',
        containLabel: false
    },
    xAxis: [{
        type: 'category',
        data: ['出所类型'],
        show: false,
        axisTick: { //刻度
            show: false
        }
    }],
    yAxis: [{
        type: "value",
        axisLine: {
            show: false
        },
        axisLabel: { //刻度标签
            show: false
        },
        axisTick: { //刻度
            show: false
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。(横线)
            show: false
        }

    }],
    dataset: {
        //柱形图的数据
        source: [
            ['product', '出所就医', '请假出所', '提解出所'],
            ['出所类型', 8, 2, 1],
        ]
    },
    series: [{
        name: '出所就医',
        type: 'bar',
        barWidth: 40,
        itemStyle: { //设置柱形颜色
            color: ["#ffc05c"],
        }
    }, {
        name: '请假出所',
        type: 'bar',
        barWidth: 40,
        itemStyle: { //设置柱形颜色
            color: ["#6991ff"]
        }
    }, {
        name: '提解出所',
        type: 'bar',
        barWidth: 40,
        itemStyle: { //设置柱形颜色
            color: ["#ff6c6d"]
        }
    }] */
    xAxis: {
        data: ['出所就医', '请假出所', '提解出所'],
        show: false,
        axisTick: { //刻度
            show: false
        }
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: false
        },
        axisLabel: { //刻度标签
            show: false
        },
        axisTick: { //刻度
            show: false
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。(横线)
            show: false
        }
    },
    series: [{//柱形图背景
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        silent: true,
        barWidth: 40,
        barGap: '-100%', // Make series be overlap
        data: [0, 0, 60]
    }, {
        type: 'bar',
        barWidth: 40,
        z: 10,
        itemStyle: { //设置柱形颜色
            color: function (params) {
                var colorList = ["#006eda", "#25c9ff", "#12ca8d", "#ff6c6d", "#f5a623"];
                return colorList[params.dataIndex];
            }
        },
        data: [45, 20, 0]
    }]
}
myChart1.setOption(option1);
//柱状图2
var myChart2 = echarts.init(document.getElementById('main2'));
var option2 = {
    grid: {
        left: '12%',
        right: '4%',
        bottom: '12%',
        containLabel: false
    },
    xAxis: [{
        type: 'category',
        data: ['刑拘', '逮捕', '补帧（1）', '补帧（2）', '其他'],
        axisLabel: {
            show: true,
            rotate :-45,
            textStyle: {
                color: '#dfe0e1'
            }
        },
        axisTick: { //刻度
            show: false
        }
    }],
    yAxis: [{
        axisLine: {
            show: false
        },
        axisLabel: { //刻度标签
            show: false
        },
        axisTick: { //刻度
            show: false
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。(横线)
            show: false
        }

    }],
    series: [{
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        barWidth: 40,
        itemStyle: { //设置柱形颜色
            color: function (params) {
                var colorList = ["#006eda", "#25c9ff", "#12ca8d", "#ff6c6d", "#f5a623"];
                return colorList[params.dataIndex];
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color:"#ffffff"
            }
        },
    }]
}
myChart2.setOption(option2);

//进度条
var progressbar = function(obj){
    obj.dom.style.backgroundColor = obj.bgColor || "#2064f5";
    var div = document.createElement("div");
    div.style.width = obj.progress/obj.total *100 +"%";
    div.style.height = "100%";
    div.style.backgroundColor = obj.progressColor || "#6991ff";
    obj.dom.appendChild(div)
}

var progressbarArr = document.getElementsByClassName("progress-bar")
var option = {
    total:62,//总数
    progress:10,//完成数量
    bgColor:"",//背景颜色
    progressColor:"#ff6c6d",//进度条颜色
    dom:progressbarArr[0]//进度条dom元素
}
progressbar(option)