//柱状图模块1
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 指定配置和数据
    var option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "6px",
        right: "0%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017"           
          ],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "10"
            }
          },
          axisLine: {
            show: true
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: "10"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
              // width: 1,
              // type: "solid"
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "GDP",
          type: "bar",
          barWidth: "40%",
          data: [270232.3,319515.5, 349081.4, 413030.3,
            489300.6, 540367.4, 595244.4,643974,689052.1,
            743585.5,827121.7],
          itemStyle: {
            barBorderRadius: 5
          }
        }
      ]
    };
  
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  
    // 数据变化

    // $(".bar h2 ").on("click", "a", function() {
    //   option.series[0].data = dataAll[$(this).index()].data;
    //   myChart.setOption(option);
    // });
  })();

//折线图模块1
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 指定配置和数据
  var option = {
    color: ["#00f2f1", "#f54748","#fff5b7"],
    tooltip: {
      trigger: "axis", 
    },
    legend: {
       // 距离容器10%
       right: "10%",
       // 修饰图例文字的颜色
       textStyle: {
         color: "#4c9bfd",
         fontSize:"12"
       },
    
      //data: ['第一产业', '第二产业', '第三产业']
  },
    grid: {
      left: "3%",
      top: "20%",
      right: "4%",
      bottom: "3%",
      show:true, //显示边框
      borderColor:"#012f4a",
      containLabel: true
    },
    xAxis: 
      {
        type: 'category',
        boundaryGap: false,
        data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013','2014','2015','2016','2017'],
        axisTick: {
          show: true
        },     
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "10"
          }
        },
        axisLine: {
          show: true
        }
      },
    yAxis: 
      {
        type: "value",
        axisTick: {
          show: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "10"
          }
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a"
          }
        }
      },
    series: [
      {
        name: '第一产业',
        type: 'line',
        symbolSize:4,
        smooth:true,
        //stack: '总量',
        data: [10.3, 10.3, 9.8, 9.5, 9.4, 9.4, 9.3,9.1,8.8,8.6,7.9]
        
      },
      {
        name: '第二产业',
        type: 'line',
        smooth:true,
        symbolSize:4,
      //  stack: '总量',
        data: [46.9, 46.9, 45.9, 46.4, 46.4, 45.3,44,43.1,40.9,39.9,40.5]
      },
      {
        name: '第三产业',
        type: 'line',
        smooth:true,
        symbolSize:4,
       // stack: '总量',
        data: [42.9, 42.8, 44.3, 44.1, 44.2, 45.3, 46.7,47.8,50.2,51.6,51.6]
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化

  // $(".bar h2 ").on("click", "a", function() {
  //   option.series[0].data = dataAll[$(this).index()].data;
  //   myChart.setOption(option);
  // });
})();

//玫瑰图
(function(){
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    // legend: {
    //     top: 'bottom'
    // },
    tooltip:{
      trigger:'item',
      formatter:'{a}<br/>{b}:{c}亿元<br/>({d}%)'

    },
    toolbox: {
        show: true,
        feature: {
            // mark: {show: true},
            // dataView: {show: true, readOnly: false},
            // restore: {show: true},
            // saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: 'GDP及占比',
            type: 'pie',
            radius: ["20%", "80%"],
            center: ['50%', '60%'],
            roseType: 'radius',
            label:{
              fontSize:10
            },
            labelLine:{
              length:6,
              length2:5
            },
            itemStyle: {
                borderRadius: 8
            },
            data: [
                  {name:"北京",value:28014.94},
                  {name:"天津",value:18549.19},
                  {name:"河北",value:34016.32},
                  {name:"山西",value:15528.42},
                  {name:"内蒙古",value:16096.21},
                  {name:"辽宁",value:23409.24},
                  {name:"吉林",value:14944.53},
                  {name:"黑龙江",value:15902.68},
                  {name:"上海",value:30632.99},
                  {name:"江苏",value:85869.76},
                  {name:"浙江",value:51768.26},
                  {name:"安徽",value:27018},
                  {name:"福建",value:32182.09},
                  {name:"江西",value:20006.31},
                  {name:"山东",value:72634.15},
                  {name:"河南",value:44552.83},
                  {name:"湖北",value:35478.09},
                  {name:"湖南",value:33902.96},
                  {name:"重庆",value:19424.73},
                  {name:"四川",value:36980.22},
                  {name:"贵州",value:13540.8256},
                  {name:"云南",value:16376.34},
                  {name:"西藏",value:1310.92},
                  {name:"陕西",value:21898.81},
                  {name:"甘肃",value:7459.90},
                  {name:"青海",value:2624.83},
                  {name:"宁夏",value:3443.56},
                  {name:"新疆",value:10881.96},
                  {name:"广东",value:89705.23},
                  {name:"广西",value:18523.26},
                  {name:"海南",value:4462.54},
            ]
        }
    ]
};
  // 把配置给实例对象
  myChart.setOption(option);
})();


//地图模块
(function(){
  var myChart=echarts.init(document.querySelector(".map .chart"));
  var name_title = "城乡人口比重"
var subname = ''
var nameColor = " rgb(245, 245, 245)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 25
var mapName = 'china'
// var data = [
//     {name:"北京",value:28014.94},
//     {name:"天津",value:18549.19},
//     {name:"河北",value:34016.32},
//     {name:"山西",value:15528.42},
//     {name:"内蒙古",value:16096.21},
//     {name:"辽宁",value:23409.24},
//     {name:"吉林",value:14944.53},
//     {name:"黑龙江",value:15902.68},
//     {name:"上海",value:30632.99},
//     {name:"江苏",value:85869.76},
//     {name:"浙江",value:51768.26},
//     {name:"安徽",value:27018},
//     {name:"福建",value:32182.09},
//     {name:"江西",value:20006.31},
//     {name:"山东",value:72634.15},
//     {name:"河南",value:44552.83},
//     {name:"湖北",value:35478.09},
//     {name:"湖南",value:33902.96},
//     {name:"重庆",value:19424.73},
//     {name:"四川",value:36980.22},
//     {name:"贵州",value:13540.8256},
//     {name:"云南",value:16376.34},
//     {name:"西藏",value:1310.92},
//     {name:"陕西",value:21898.81},
//     {name:"甘肃",value:7459.90},
//     {name:"青海",value:2624.83},
//     {name:"宁夏",value:3443.56},
//     {name:"新疆",value:10881.96},
//     {name:"广东",value:89705.23},
//     {name:"广西",value:18523.26},
//     {name:"海南",value:4462.54},
//     ];

var data = [
  {name:"北京",value:28},
  {name:"天津",value:18},
  {name:"河北",value:34},
  {name:"山西",value:15},
  {name:"内蒙古",value:16},
  {name:"辽宁",value:23},
  {name:"吉林",value:14},
  {name:"黑龙江",value:15},
  {name:"上海",value:30},
  {name:"江苏",value:88},
  {name:"浙江",value:51},
  {name:"安徽",value:27},
  {name:"福建",value:32},
  {name:"江西",value:20},
  {name:"山东",value:72},
  {name:"河南",value:44},
  {name:"湖北",value:35},
  {name:"湖南",value:33},
  {name:"重庆",value:19},
  {name:"四川",value:36},
  {name:"贵州",value:13},
  {name:"云南",value:16},
  {name:"西藏",value:13},
  {name:"陕西",value:21},
  {name:"甘肃",value:74},
  {name:"青海",value:26},
  {name:"宁夏",value:34},
  {name:"新疆",value:10},
  {name:"广东",value:89},
  {name:"广西",value:18},
  {name:"海南",value:44},
  ];
    
var geoCoordMap = {};
var toolTipData = [ 
    {name:"北京",value:[{name:"城镇",value:86.5},{name:"乡村",value:13.5}]},
    {name:"天津",value:[{name:"城镇",value:82.93},{name:"乡村",value:17.07}]},
    {name:"河北",value:[{name:"城镇",value:55.01},{name:"乡村",value:44.99}]},
    {name:"山西",value:[{name:"城镇",value:57.34},{name:"乡村",value:42.66}]},
    {name:"内蒙古",value:[{name:"城镇",value:62.02},{name:"乡村",value:37.98}]},
    {name:"辽宁",value:[{name:"城镇",value:67.49},{name:"乡村",value:32.51}]},
    {name:"吉林",value:[{name:"城镇",value:56.65},{name:"乡村",value:43.35}]},
    {name:"黑龙江",value:[{name:"城镇",value:59.4},{name:"乡村",value:40.6}]},
    {name:"上海",value:[{name:"城镇",value:87.7},{name:"乡村",value:12.3}]},
    {name:"江苏",value:[{name:"城镇",value:68.76},{name:"乡村",value:31.24}]},
    {name:"浙江",value:[{name:"城镇",value:68},{name:"乡村",value:32}]},
    {name:"安徽",value:[{name:"城镇",value:53.49},{name:"乡村",value:46.51}]},
    {name:"福建",value:[{name:"城镇",value:64.8},{name:"乡村",value:35.2}]},
    {name:"江西",value:[{name:"城镇",value:54.6},{name:"乡村",value:45.4}]},
    {name:"山东",value:[{name:"城镇",value:60.58},{name:"乡村",value:39.42}]},
    {name:"河南",value:[{name:"城镇",value:50.16},{name:"乡村",value:49.84}]},
    {name:"湖北",value:[{name:"城镇",value:59.3},{name:"乡村",value:40.7}]},
    {name:"湖南",value:[{name:"城镇",value:54.62},{name:"乡村",value:45.38}]},
    {name:"广东",value:[{name:"城镇",value:69.85},{name:"乡村",value:30.15}]},
    {name:"广西",value:[{name:"城镇",value:49.21},{name:"乡村",value:50.79}]},
    {name:"海南",value:[{name:"城镇",value:58.04},{name:"乡村",value:41.96}]},
    {name:"重庆",value:[{name:"城镇",value:64.08},{name:"乡村",value:35.92}]},
    {name:"四川",value:[{name:"城镇",value:50.79},{name:"乡村",value:49.21}]},
    {name:"贵州",value:[{name:"城镇",value:46.02},{name:"乡村",value:53.98}]},
    {name:"云南",value:[{name:"城镇",value:46.69},{name:"乡村",value:53.31}]},
    {name:"西藏",value:[{name:"城镇",value:30.89},{name:"乡村",value:69.11}]},
    {name:"陕西",value:[{name:"城镇",value:56.79},{name:"乡村",value:43.21}]},
    {name:"甘肃",value:[{name:"城镇",value:46.39},{name:"乡村",value:53.61}]},
    {name:"青海",value:[{name:"城镇",value:53.07},{name:"乡村",value:46.93}]},
    {name:"宁夏",value:[{name:"城镇",value:57.98},{name:"乡村",value:42.02}]},
    {name:"新疆",value:[{name:"城镇",value:49.38},{name:"乡村",value:50.62}]},
   
];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 100,
    min = 10; // todo 
var maxSize4Pin = 40,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
option = {
    title: {
        text: name_title,
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle:{
            fontSize:subname_fontSize,
            fontFamily:name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"%"+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            }
        }
    },
    // legend: {
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x: 'right',
    //     data: ['credit_pm2.5'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
        show: true,
        min: 0,
        max: 200,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            //color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        zoom:1.2,
        roam: true,
        itemStyle: {
            normal: {
                areaColor: 'rgba(20, 41, 87, 0.8)',
                borderColor: '#ffeb7b',
                
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },

    ]
};

  myChart.setOption(option);
})();

