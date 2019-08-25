import * as renderer from "react-test-renderer";
import * as React from "react";
import {Icon} from '../../lib/index';

describe('Components export', ()=>{
    it('Icon exports successfully', ()=> {
        const json = renderer.create(<Icon name="car"/>).toJSON();
        expect(json).toMatchSnapshot();
    })
});