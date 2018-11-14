/**
 * Created by 崔国辉 on 2018/11/14 0014 11:31
 * Develop by 崔国辉 on 2018/11/14 0014 11:31
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';

// 引入柱状图（这里放你需要使用的echarts类型 很重要）
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class ECharts extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    const myChart = echarts.init(document.getElementById(id));
    myChart.setOption({
      title: { text: `${id}` },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      }],
    });
  }

  render() {
    const { id } = this.props;
    return (
      <div id={id} style={{ width: 400, height: 400, float: 'left' }} />
    );
  }
}

export default ECharts;
