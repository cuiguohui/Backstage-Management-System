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
import RichText from '../../commonly/rich-text/RichText';
import Drag from '../../commonly/drag/Drag';

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

  handleChangeTheme = (value) => {
    const { onChangeTheme } = this.props;
    onChangeTheme(value);
  };

  renderRouter = () => (
    <Switch>
      <Route path="/" render={() => (<HomePage />)} exact />
      <Route path="/rich-text" render={() => (<RichText />)} exact />
      <Route path="/drag" render={() => (<Drag />)} exact />
    </Switch>
  );

  render() {
    const { isCollapsed, theme } = this.props;
    return (
      <Layout>
        <MainSider
          isCollapsed={isCollapsed}
          theme={theme}
          onChangeTheme={this.handleChangeTheme}
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
