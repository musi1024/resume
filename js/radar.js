var myChart = echarts.init(document.getElementById('skillRadar'));

// 指定图表的配置项和数据
var option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [6, 8]
            }
        },
        indicator: [{
                name: 'JavaScript',
                max: 10000
            },
            {
                name: 'HTML/CSS',
                max: 10000
            },
            {
                name: 'jQuery',
                max: 10000
            },
            {
                name: 'Vue',
                max: 10000
            },
            {
                name: 'React',
                max: 10000
            },
            {
                name: 'Node.js',
                max: 10000
            }
        ]
    },
    series: [{
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
                value: [7500, 7000, 6000, 6000, 4000, 4000],
                name: 'My Radar'
            },
            {
                value: [10000, 10000, 10000, 10000, 10000, 10000],
                name: 'Perfect Radar'
            },
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);