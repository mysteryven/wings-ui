import * as React from "react";
import { shallow } from 'enzyme';
import { findByTestAttr } from "../utils/testUtils";
import { Row, Col } from './index';

describe('Row', () => {
    it('renders without error with col', () => {
        const wrapper = shallow(
            <Row>
                <Col>Hello World</Col>
            </Row>
        );
        const component = findByTestAttr(wrapper, 'w-row');
        expect(component.length).toBe(1);
    });

    it('can set `gutter`', () => {
        const gutter = 20;
        const wrapper = shallow(
            <Row gutter={gutter}>
                <Col>Hello World</Col>
            </Row>
        );
        const component = findByTestAttr(wrapper, 'w-row');
        console.log();
        expect(component.prop('style')).toHaveProperty('marginLeft', `${-gutter / 2}px`);
        expect(component.prop('style')).toHaveProperty('marginRight', `${-gutter / 2}px`);
        const col = findByTestAttr(wrapper.children().dive(), 'w-col');
        console.log(col);
        expect(col.prop('style')).toHaveProperty('padding', `0 ${gutter / 2}px`);
    });
});

describe('Col', () => {
    it('can received `span` ', () => {
        const span = 4;
        const wrapper = shallow(
            <Row>
                <Col span={span}>Hello World</Col>
            </Row>
        );

        const component = findByTestAttr(wrapper.children().dive(), `w-col-${span}`);
        expect(component.length).toBe(1);
    })
    it('can received `offset` ', () => {
        const offset = 4;
        const wrapper = shallow(
            <Row>
                <Col offset={offset}>Hello World</Col>
            </Row>
        );

        const component = findByTestAttr(wrapper.children().dive(), `w-col-offset-${offset}`);
        expect(component.length).toBe(1);
    })
});