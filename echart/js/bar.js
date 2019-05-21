//柱状图1
// var myChart1 = echarts.init(document.getElementById('main1'));
// var option1 = {
//     // tooltip: {
//     //     trigger: 'axis',
//     //     axisPointer: { // 坐标轴指示器，坐标轴触发有效
//     //         type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
//     //     }
//     // },
//     legend: {
//         orient: 'vertical',
//         x : 'center',
//         y : 'center',
//         data:['出所就医', '请假出所', '提解出所'],
//         formatter: function(name) {
//             var index = 0;
//             var clientlabels = ['出所就医', '请假出所', '提解出所'];
//             var clientcounts = [117,89,89];
//             clientlabels.forEach(function(value,i){
//                 if(value == name){
//                     index = i;
//                 }
//             });
//             if(name.length == 5){
//                 return name + "                        " + clientcounts[index] +"人";
//             }else{
//                 return name + "                           " + clientcounts[index] +"人";
//             }
//         }
//     },
//     xAxis: {
//         data: ['出所就医', '请假出所', '提解出所'],
//         show: false,
//         axisTick: { //刻度
//             show: false
//         }
//     },
//     yAxis: {
//         type: "value",
//         axisLine: {
//             show: false
//         },
//         axisLabel: { //刻度标签
//             show: false
//         },
//         axisTick: { //刻度
//             show: false
//         },
//         splitLine: { //坐标轴在 grid 区域中的分隔线。(横线)
//             show: false
//         }
//     },
//     series: [{//柱形图背景
//         type: 'bar',
//         itemStyle: {
//             normal: {
//                 color: 'rgba(255,255,255,.1)'
//             }
//         },
//         silent: true,
//         barWidth: 40,
//         barGap: '-100%', // Make series be overlap
//         data: [0, 0, 60]
//     }, {
//         type: 'bar',
//         barWidth: 40,
//         z: 10,
//         itemStyle: { //设置柱形颜色
//             color: function (params) {
//                 var colorList = ["#006eda", "#25c9ff", "#12ca8d", "#ff6c6d", "#f5a623"];
//                 return colorList[params.dataIndex];
//             }
//         },
//         data: [45, 20, 0]
//     }]
// }

var myChart1 = echarts.init(document.getElementById('main1'));
var option1 = {
    grid: {
        left: '50%',
        right: '4%',
        bottom: '12%',
        containLabel: false
    },
    legend: {
        orient: 'vertical',
        x : 'left',
        y : 'center',
        data:['出所就医', '请假出所', '提解出所'],
        formatter: function(name) {
            var index = 0;
            var clientlabels = ['出所就医', '请假出所', '提解出所'];
            var clientcounts = [117,89,89];
            clientlabels.forEach(function(value,i){
                if(value == name){
                    index = i;
                }
            });
            if(name.length == 5){
                return name + " " + clientcounts[index] +"人";
            }else{
                return name + " " + clientcounts[index] +"人";
            }
        }
    },
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
        name:'出所就医',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#006eda'
            }
        },
        barWidth: 40,
        data: [45]
    }, {//柱形图背景
        name:'请假出所',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#25c9ff'
            }
        },
        barWidth: 40,
        data: [28]
    }, {//柱形图背景
        name:'提解出所',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#12ca8d'
            }
        },
        barWidth: 40,
        data: [10]
    }]
}

//异步获取数据
// $.get('http://127.0.1.1:8000/api/bar1',function (data) {
//     let xAxisName = []
//     let valData = []
//     data.echartsData.forEach((item,index) => {
//         xAxisName[index] = item.name
//         valData[index] = item.val
//     });
//     option1.xAxis.data = xAxisName
//     option1.series[0].data = data.bgData
//     option1.series[1].data = valData
//     myChart1.setOption(option1);
// });
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

//异步获取数据
// $.get('http://127.0.1.1:8000/api/bar2',function (data) {
//     let xAxisName = []
//     let valData = []
//     data.echartsData.forEach((item,index) => {
//         xAxisName[index] = item.name
//         valData[index] = item.val
//     });
//     option2.xAxis.data = xAxisName
//     option2.series[0].data = valData
//     myChart2.setOption(option2);
// });
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
    progress:50,//完成数量
    bgColor:"",//背景颜色
    progressColor:"#ff6c6d",//进度条颜色
    dom:progressbarArr[0]//进度条dom元素
}
progressbar(option)