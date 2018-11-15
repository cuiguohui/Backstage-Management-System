/**
 * Created by 崔国辉 on 2018/11/14 0014 17:09
 * Develop by 崔国辉 on 2018/11/14 0014 17:09
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Styles from './main.module.css';

const { SubMenu } = Menu;

class MainSider extends React.Component {
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
          <Menu.Item key="home">
            <Link to="/">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="common"
            title={(
              <span>
                <Icon type="desktop" />
                <i className="title">常用功能</i>
              </span>
            )}
          >
            <Menu.Item key="rich-text"><Link to="rich-text">富文本编辑器</Link></Menu.Item>
            <Menu.Item key="drag"><Link to="drag">拖曳</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="animation"
            title={(
              <span>
                <Icon type="desktop" />
                <i className="title">功能</i>
              </span>
            )}
          >
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu
            key="table"
            title={(
              <span>
                <Icon type="desktop" />
                <i className="title">功能</i>
              </span>
            )}
          >
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu
            key="form"
            title={(
              <span>
                <Icon type="desktop" />
                <i className="title">功能</i>
              </span>
            )}
          >
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
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
    );
  }
}

export default MainSider;
