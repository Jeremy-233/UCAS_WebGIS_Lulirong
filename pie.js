var data = [  
    {name:'United States', value:21.34	},
    {name:'China', value:14.22},
    {name:'Japan', value:5.18},
    {name:'Germany', value:3.96},
    {name:'India', value:2.97},
    {name:'United Kingdom',value:2.83},
    {name:'France', value:2.76},
    {name:'Italy', value:2.03},
    {name:'Brazil', value:1.96},
    {name:'Canada', value:1.74},
    {name:'South Korea', value:1.66},
    {name:'Russia', value:1.61},
    {name:'Spain', value:1.43},
    {name:'Australia', value:1.42},
    {name:'Mexico', value:1.24},
    {name:'Indonesia', value:1.1}
    ] 

    option = {
        
        title: [{
            textStyle: {
                color: '#fff'
            }      
        },  
         {
            subtext: 'GDP超1万亿',
            left: '83%',
            top: '80%',
            textAlign: 'center',
        }],
        series: [ {
            type: 'pie',
            radius: '35%',
            center: ['50%', '50%'],
            roam: true,
            itemStyle:{  
                emphasis:{label:{show:true}}  
            },  
            data: data,
            animation: true,
            label: {
                position: 'outer',
                alignTo: 'labelLine',
                bleedMargin: 5
            },
            left: '33.3333%',
            right: '33.3333%',
            top: 0,
            bottom: 0
        }, {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: data,
            animation: true,
            label: {
                position: 'outer',
                alignTo: 'edge',
                margin: 20
            },
            left: '66.666%',
            right: 0,
            top: 0,
            bottom: 0
        }]
    };
    var myChart = echarts.init(document.getElementById('main'));  
    myChart.setOption(option);