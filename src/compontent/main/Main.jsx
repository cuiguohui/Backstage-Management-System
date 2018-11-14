/**
 * Created by 崔国辉 on 2018/11/13 0013 11:45
 * Develop by 崔国辉 on 2018/11/13 0013 11:45
 */
import React from 'react';
import MainLayout from './layout/MainLayout';

class Main extends React.Component {
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
      <MainLayout
        isCollapsed={isCollapsed}
        theme={theme}
        onChangeTheme={this.handleChangeTheme}
        onNavToggle={this.handleNavToggle}
      />
    );
  }
}

export default Main;
