/**
 * Created by 崔国辉 on 2018/11/13 0013 15:50
 * Develop by 崔国辉 on 2018/11/13 0013 15:50
 */
import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import MainHeader from '../header/MainHeader';
import HomePage from '../../home/Home';
import MainSider from '../side/MainSider';
import Commonly from '../../commonly/Commonly';

import './main.kepp.css';


class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleNavToggle = (collapsed) => {
    const { onNavToggle } = this.props;
    onNavToggle(collapsed);
  };

  handleChangeThemeClick = () => {
    const { onChangeTheme, theme } = this.props;
    if (theme === 'dark') {
      onChangeTheme('light');
    } else {
      onChangeTheme('dark');
    }
  };

  renderRouter = () => (
    <Switch>
      <Route path="/" render={() => (<HomePage />)} exact />
      <Route path="/commonly" render={() => (<Commonly />)} exact />
    </Switch>
  );

  render() {
    const { isCollapsed, theme } = this.props;
    return (
      <Layout>
        <MainSider
          isCollapsed={isCollapsed}
          theme={theme}
        />
        <Layout>
          <MainHeader collapsed={isCollapsed} onNavToggle={this.handleNavToggle} />
          {this.renderRouter()}
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
