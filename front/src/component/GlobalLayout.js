import { Layout, Menu, Breadcrumb, Icon } from "antd";
import React from "react";
import MyInfo from './user/MyInfo'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class GloabalLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>个人中心</span>
                </span>
              }
            >
              <Menu.Item key="3">我的信息</Menu.Item>
              <Menu.Item key="4">我的任务</Menu.Item>
              {/* <Menu.Item key="5"></Menu.Item> */}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>项目中心</span>
                </span>
              }
            >
              <Menu.Item key="6">项目管理</Menu.Item>
              {/* <Menu.Item key="8">Team 2</Menu.Item> */}
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="team" />
                  <span>接口中心</span>
                </span>
              }
            >
              <Menu.Item key="7">接口管理</Menu.Item>
              {/* <Menu.Item key="8">Team 2</Menu.Item> */}
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="team" />
                  <span>报告中心</span>
                </span>
              }
            >
              <Menu.Item key="8">报告管理</Menu.Item>
              {/* <Menu.Item key="8">Team 2</Menu.Item> */}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {/* 这里添加content的信息 */}
              {/* content */}
              <MyInfo/>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
