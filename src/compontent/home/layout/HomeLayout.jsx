/**
 * Created by 崔国辉 on 2018/11/13 0013 15:50
 * Develop by 崔国辉 on 2018/11/13 0013 15:50
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import HomeHeader from '../header/HomeHeader';

import './home.kepp.css';
import Styles from './home.module.css';

const { SubMenu } = Menu;

class HomeLayout extends React.Component {
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

  render() {
    const { isCollapsed, theme } = this.props;
    return (
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={isCollapsed}
          style={{ backgroundColor: `${theme === 'dark' ? '#001529' : ''}` }}
        >
          <div className={Styles.logo}>Welcome Come !</div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme={theme}
            inlineCollapsed={isCollapsed}
            id="home-side"
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={(
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
)}
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={(
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Two</span>
                </span>
)}
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
          <div
            className={Styles['theme-button']}
            role="none"
            onClick={this.handleChangeThemeClick}
            style={{ color: `${theme === 'dark' ? '#fff' : ''}` }}
          >
            切换主题
          </div>
        </Layout.Sider>
        <Layout>
          <HomeHeader collapsed={isCollapsed} onNavToggle={this.handleNavToggle} />
          <div>
              l
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default HomeLayout;
