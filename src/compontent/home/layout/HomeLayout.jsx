/**
 * Created by 崔国辉 on 2018/11/14 0014 11:33
 * Develop by 崔国辉 on 2018/11/14 0014 11:33
 */
import React from 'react';
import ECharts from '../../common/eCharts/ECharts';

class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ECharts id="Good" />
        {' '}
        <ECharts id="Number" />
      </div>
    );
  }
}

export default HomeLayout;
