/**
 * Created by 崔国辉 on 2018/11/15 0015 11:55
 * Develop by 崔国辉 on 2018/11/15 0015 11:55
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import Draggable from 'react-draggable';
import Styles from './drag.module.css';

class Drags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
    };
  }

  onStart = () => {
    let { activeDrags } = this.state;
    this.setState({ activeDrags: ++activeDrags });
  };

  onStop = () => {
    let { activeDrags } = this.state;
    this.setState({ activeDrags: --activeDrags });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className={Styles.root}>
        <Row gutter={16}>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <Draggable zIndex={100} {...dragHandlers}>
                <Card bordered={false} className="dragDemo">
                  随意拖拽
                </Card>
              </Draggable>
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <Draggable axis="x" {...dragHandlers}>
                <Card bordered={false} className="dragDemo">
                 只能左右拖拽
                </Card>
              </Draggable>
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <Draggable axis="y" {...dragHandlers}>
                <Card bordered={false} className="dragDemo">
                  只能上下拖拽
                </Card>
              </Draggable>
            </div>
          </Col>
        </Row>
        <style>
          {`
                    .dragDemo {
                        height: 180px;
                    }
                `}
        </style>
      </div>
    );
  }
}


export default Drags;
