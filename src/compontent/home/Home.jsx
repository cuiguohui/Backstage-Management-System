/**
 * Created by 崔国辉 on 2018/11/13 0013 11:45
 * Develop by 崔国辉 on 2018/11/13 0013 11:45
 */
import React from 'react';
import HomeLayout from './layout/HomeLayout';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      theme: 'dark',
    };
  }

  handleNavToggle = (collapsed) => {
    this.setState({ isCollapsed: !collapsed });
  };

  handleChangeTheme = (value) => {
    this.setState({
      theme: value,
    });
  };

  render() {
    const { isCollapsed, theme } = this.state;
    return (
      <HomeLayout
        isCollapsed={isCollapsed}
        theme={theme}
        onChangeTheme={this.handleChangeTheme}
        onNavToggle={this.handleNavToggle}
      />
    );
  }
}

export default Home;
