/**
 * Created by 崔国辉 on 2018/11/13 0013 15:48
 * Develop by 崔国辉 on 2018/11/13 0013 15:48
 */
import React from 'react';
import { Layout, Icon, Menu } from 'antd';

import Styles from './homeHeader.module.css';

const { Header } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

class HomeHeader extends React.Component {
  handleNavToggleClick = () => {
    const { collapsed, onNavToggle } = this.props;
    onNavToggle(collapsed);
  };

  render() {
    const { collapsed } = this.props;
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className={Styles['menu-icon']}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.handleNavToggleClick}
          />
        </div>
        <div className={Styles['header-list']}>
          <Menu
            onClick={this.handleClick}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />
              <span>信息</span>
            </Menu.Item>
            <SubMenu title={(
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                <span>设置</span>
              </span>
            )}
            >
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    );
  }
}

export default HomeHeader;
