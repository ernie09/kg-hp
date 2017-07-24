import React, {Component} from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class YearSlider extends Component {
  state = {
    inputValue: 2017,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1949} max={2017} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1949}
            max={2017}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }

}

export default YearSlider;
