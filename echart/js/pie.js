var myChart1 = echarts.init(document.getElementById('main1'));

var option1 = {
    // title : {
    //     text: '超期预警',
    //     x:'center'
    // },
    title: {
        text: '共'+117+89+89+'人',
        x: 'center',
        y: 'center'
   },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x : 'center',
        y : 'bottom',
        data:['超法定期限','超文书期限','即将超期'],
        formatter: function(name) {
            var index = 0;
            var clientlabels = ['超法定期限','超文书期限','即将超期'];
            var clientcounts = [117,89,89];
            clientlabels.forEach(function(value,i){
                if(value == name){
                    index = i;
                }
            });
            if(name.length == 5){
                return name + "                        " + clientcounts[index] +"人";
            }else{
                return name + "                           " + clientcounts[index] +"人";
            }
        }
    },
    calculable : true,
    series : [
        {
            name:'超期预警',
            type:'pie',
            radius : [80, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            pie:{
                label:{
                    show:true
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: { //设置扇形颜色
                color: function (params) {
                    var colorList = ["#006eda", "#25c9ff", "#12ca8d"];
                    return colorList[params.dataIndex];
                }
            },
            data:[
                {value:117, name:'超法定期限'},
                {value:89, name:'超文书期限'},
                {value:89, name:'即将超期'},
            ]
        },
    ]
};

myChart1.setOption(option1);


//饼图2
var myChart2 = echarts.init(document.getElementById('main2'));

var option2 = {
    // title : {
    //     text: '超期预警',
    //     x:'center'
    // },
    title: {
        text: '共'+117+89+89+'人',
        x: 'center',
        y: 'center'
   },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x : 'center',
        y : 'bottom',
        data:['超法定期限','超文书期限','即将超期'],
        formatter: function(name) {
            var index = 0;
            var clientlabels = ['超法定期限','超文书期限','即将超期'];
            var clientcounts = [117,89,89];
            clientlabels.forEach(function(value,i){
                if(value == name){
                    index = i;
                }
            });
            if(name.length == 5){
                return name + "                        " + clientcounts[index] +"人";
            }else{
                return name + "                           " + clientcounts[index] +"人";
            }
        }
    },
    calculable : true,
    series : [
        {
            name:'超期预警',
            type:'pie',
            radius : [80, 110],
            center : ['50%', '50%'],
            pie:{
                label:{
                    show:true
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: { //设置扇形颜色
                color: function (params) {
                    var colorList = ["#006eda", "#25c9ff", "#12ca8d"];
                    return colorList[params.dataIndex];
                }
            },
            data:[
                {value:117, name:'超法定期限'},
                {value:89, name:'超文书期限'},
                {value:89, name:'即将超期'},
            ]
        },
    ]
};

myChart2.setOption(option2);
