/**
 * Created by 崔国辉 on 2018/11/13 0013 15:48
 * Develop by 崔国辉 on 2018/11/13 0013 15:48
 */
import React from 'react';
import {
 Layout, Icon, Menu, Badge,
} from 'antd';
import * as Images from '../../../images/index';
import Styles from './mainHeader.module.css';

const { Header } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

class MainHeader extends React.Component {
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
              <Badge count={99} overflowCount={100}>
                <Icon type="mail" />
              </Badge>
            </Menu.Item>
            <SubMenu title={(
              <span className="submenu-title-wrapper">
                <img src={Images.Avatar} alt="" />
              </span>
            )}
            >
              <MenuItemGroup title="个人中心">
                <Menu.Item key="setting:1">个人信息</Menu.Item>
                <Menu.Item key="setting:2">退出登录</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="设置">
                <Menu.Item key="setting:3">个人设置</Menu.Item>
                <Menu.Item key="setting:4">系统设置</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    );
  }
}

export default MainHeader;
