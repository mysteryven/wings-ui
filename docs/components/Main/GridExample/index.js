import React from 'react';
import { Row, Col } from '../../../../src/Grid';
import './index.scss'

const GridDoc = () => {
  return (
    <div>
      <div>普通</div>
      <Row gutter={10} className="row">
        <Col className="col" span={6}></Col>
        <Col className="col" span={6}></Col>
        <Col className="col" span={6}></Col>
        <Col className="col" span={6}></Col>
      </Row>
      <div>offset</div>
      <Row className="row" gutter={10}>
        <Col className="col" span={6}></Col>
        <Col className="col" offset={6} span={6}></Col>
        <Col className="col" span={6}></Col>
      </Row>
    </div>

  )
}

export default GridDoc;