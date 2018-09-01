import React from "react";
import { Row, Col, Input, Table, Select, Button } from "antd";

import { Tabs } from "antd";

const InputGroup = Input.Group;

const TabPane = Tabs.TabPane;
const Option = Select.Option;

export default class MyInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      headers: []
    };
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  callback(key) {
    console.log(key);
  }

  addHeader() {
    const hed = <Row><Col><Input placeholder="kkk" /></Col></Row>
    this.state.headers.push(hed);
    this.setState({ headers: this.state.headers });
  }

  render() {
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];

    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      }
    ];

    return (
      <div>
        <Row>
          <Col span={2}>
            <Select
              defaultValue="lucy"
              onChange={
                this.handleChange.bind(this) //   style={{ width: 120 }}
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col span={14}>
            <Input placeholder="Basic usage" />
          </Col>
          <Col span={1} />
          <Col span={4}>
            <Button type="primary">发送请求</Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />

        <Row>
          <Col>
            <Tabs onChange={this.callback.bind(this)} type="card">
              <TabPane tab="Head" key="1">
                <Row>
                  <Col>
                    <Button type="primary" onClick={this.addHeader.bind(this)}>
                      添加
                    </Button>
                  </Col>
                </Row>
                {this.state.headers}
              </TabPane>
              <TabPane tab="Cookie" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Request" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Response" key="4">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}
