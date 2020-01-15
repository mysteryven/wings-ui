import React from 'react';
import {Row, Col} from '../../src/Grid';
import './index.scss'

export default {
  title: 'Grid',
  component: Row,
};

export const grids = () => {
  return (
    <div>
      <Row className="row">
        <Col className="col" span={6} style={{background: "green"}}></Col>
        <Col className="col" span={6} style={{background: "red"}}></Col>
        <Col className="col" span={6} style={{background: "yellow"}}></Col>
        <Col className="col" span={6} style={{background: "black"}}></Col>
      </Row>
    </div>

  )
};

export const gutterGrid = () => {
  return (
    <Row gutter={10} className="row">
      <Col className="col" span={6}></Col>
      <Col className="col" span={6}></Col>
      <Col className="col" span={6}></Col>
      <Col className="col" span={6}></Col>
    </Row>
  )
};

export const offsetGrid = () => {
  return (
    <Row className="row" gutter={10}>
      <Col className="col" span={6}></Col>
      <Col className="col" offset={6} span={6}></Col>
      <Col className="col" span={6}></Col>
    </Row>)
};

