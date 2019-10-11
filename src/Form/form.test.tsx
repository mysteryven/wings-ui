import * as React from "react";
import {shallow} from "enzyme";
import {findByTestAttr} from "../utils/testUtils";
import Form from "./index";

const defaultProps = {
  values: {
    username: 'wz',
    password: '123',
  },
  fields: [
    { key: 'username', label: '用户名', formItem: { type: 'text' } },
    { key: 'password', label: '密码', formItem: { type: 'text' } },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Form {...setupProps} />);
};

describe("Form with grid style formItem", () => {
  it("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "w-form");
    expect(component.length).toBe(1);
  });
  it("generators correct number of formItems", () => {
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'text' } },
      { key: 'password', label: '密码', formItem: { type: 'text' } }
    ];
    const wrapper = setup({ fields });
    const component = findByTestAttr(wrapper, 'w-form-item');
    expect(component.length).toBe(fields.length);
  });
  it("can set value correctly to the key in fields", () => {
    const values = {
      username: 'test-username'
    };
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'text' } },
    ];
    const wrapper = setup({ values, fields });
    const component = wrapper.find(`[value="${values.username}"]`);
    expect(component.length).toBe(1);
  });
  it('can record FormItem onChange event', () => {
    const values = {
      username: 'previous-username'
    };
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'text' } },
    ];
    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: 'new-username' }
    };
    const wrapper = setup({ values, fields, onChange });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    const newValues = {
      username: 'new-username'
    };
    expect(onChange).toBeCalledWith(newValues, {});
  });

  it('can validate `maxLength` rule', () => {
    const values = {
      username: 'long username'
    };
    const fields = [
      {
        key: 'username',
        label: '用户名',
        formItem: { type: 'text' },
        rules: [
          { maxLength: 4, message: 'too long' }
        ]
      },
    ];
    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: 'long username' }
    };
    const wrapper = setup({ values, fields, onChange });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    expect(onChange).toBeCalledWith(values, {
      username: ['too long']
    });
  });

  it('can validate `minLength` rule', () => {
    const values = {
      username: 'short username'
    };
    const fields = [
      {
        key: 'username',
        label: '用户名',
        formItem: { type: 'text' },
        rules: [
          { minLength: 20, message: 'too short' }
        ]
      },
    ];
    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: 'short username' }
    };
    const wrapper = setup({ values, fields, onChange });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    expect(onChange).toBeCalledWith(values, {
      username: ['too short']
    });
  });

  it('can validate `required` rule', () => {
    const values = {
      username: ''
    };
    const fields = [
      {
        key: 'username',
        label: '用户名',
        formItem: { type: 'text' },
        rules: [
          { required: true, message: 'is required' }
        ]
      },
    ];

    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: '' }
    };
    const wrapper = setup({ values, fields, onChange });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    expect(onChange).toBeCalledWith(values, {
      username: ['is required']
    });
  });

  it('can accept a random element', () => {
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'none', item: <input className="random-input"/> } },
    ];
    const wrapper = setup({ fields });
    const component = findByTestAttr(wrapper, 'random-input');
    expect(component.length).toBe(fields.length);
  });
});

describe("Form with google style formItem", () => {
  const formItemStyle = 'google';

  it("renders without error", () => {
    const wrapper = setup({ formItemStyle });
    const component = findByTestAttr(wrapper, "w-form");
    expect(component.length).toBe(1);
  });
  it("generators correct number of formItems", () => {
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'text' } },
      { key: 'password', label: '密码', formItem: { type: 'tex' } }
    ];
    const wrapper = setup({ fields, formItemStyle });
    const component = findByTestAttr(wrapper, 'w-form-item');
    expect(component.length).toBe(fields.length);
  });
  it("can set value correctly to the key in fields", () => {
    const values = {
      username: 'test-username'
    };
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'text' } },
    ];
    const wrapper = setup({ values, fields, formItemStyle });
    const component = wrapper.find(`[value="${values.username}"]`);
    expect(component.length).toBe(1);
  });
  it('can record FormItem onChange event', () => {
    const values = {
      username: 'previous-username'
    };
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'text' } },
    ];
    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: 'new-username' }
    };
    const wrapper = setup({ values, fields, onChange, formItemStyle });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    const newValues = {
      username: 'new-username'
    };
    expect(onChange).toBeCalledWith(newValues, {});
  });

  it('can trigger submit event', () => {
    const values = {
      username: 'test'
    };
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'text' } },
      { key: 'submit', formItem: { type: 'none', item: (<button type='submit'>submit</button>) } },
    ];
    const onSubmit = jest.fn();
    const wrapper = shallow(<Form values={values} fields={fields} onSubmit={onSubmit} formItemStyle={formItemStyle } />);
    const component = findByTestAttr(wrapper, 'w-form');
    const fakeEvent = {
      preventDefault() {
      }
    };
    component.simulate('submit', fakeEvent);
    expect(onSubmit).toBeCalledWith(values, fakeEvent);
  });

  it('can validate `maxLength` rule', () => {
    const values = {
      username: 'long username'
    };
    const fields = [
      {
        key: 'username',
        label: '用户名',
        formItem: { type: 'text' },
        rules: [
          { maxLength: 4, message: 'too long' }
        ]
      },
    ];
    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: 'long username' }
    };
    const wrapper = setup({ values, fields, onChange, formItemStyle });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    expect(onChange).toBeCalledWith(values, {
      username: ['too long']
    });
  });

  it('can validate `minLength` rule', () => {
    const values = {
      username: 'short username'
    };
    const fields = [
      {
        key: 'username',
        label: '用户名',
        formItem: { type: 'text' },
        rules: [
          { minLength: 20, message: 'too short' }
        ]
      },
    ];
    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: 'short username' }
    };
    const wrapper = setup({ values, fields, onChange, formItemStyle });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    expect(onChange).toBeCalledWith(values, {
      username: ['too short']
    });
  });

  it('can validate `required` rule', () => {
    const values = {
      username: ''
    };
    const fields = [
      {
        key: 'username',
        label: '用户名',
        formItem: { type: 'text' },
        rules: [
          { required: true, message: 'is required' }
        ]
      },
    ];

    const onChange = jest.fn();
    const event = {
      preventDefault() {
      },
      target: { value: '' }
    };
    const wrapper = setup({ values, fields, onChange, formItemStyle });
    wrapper.find(`[value="${values.username}"]`).simulate('change', event);

    expect(onChange).toBeCalledWith(values, {
      username: ['is required']
    });
  });

  it('can accept a random element', () => {
    const fields = [
      { key: 'username', label: '用户名', formItem: { type: 'none', item: <input className="random-input"/> } },
    ];
    const wrapper = setup({ fields });
    const component = findByTestAttr(wrapper, 'random-input');
    expect(component.length).toBe(fields.length);
  });
});