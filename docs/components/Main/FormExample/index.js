import React, { useState } from 'react';
import Form from '../../../../src/Form'
import Button from '../../../../src/Button'

const FormDoc = () => {
  const [values, setValues] = useState({ username: '', password: '' });
  const [values2, setValues2] = useState({ username: '', password: '' });
  const fields = [
    {
      key: 'username',
      label: '用户名',
      formItem: { type: 'text' },
      rules: [
        {
          required: true,
          message: 'required!'
        },
        {
          minLength: 8,
          message: 'to short'
        }
      ]
    },
    {
      key: 'password',
      label: '密码',
      formItem: { type: 'password' },
      rules: [
        {
          required: true,
          message: 'required!'
        },
        {
          minLength: 8,
          message: 'to short'
        }
      ]
    },
    {
      key: 'submit',
      label: 'hi',
      formItem: { type: 'none', item: <Button type={"primary"}>提交</Button> },
    },
  ];

  const onSubmit = (e, values) => {
    console.log(e);
    console.log(values);
  };

  const formLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
    style: {
      marginBottom: '20px',
    }
  };

  return (
    <div>
      <div>
        <Form
          formLayout={formLayout}
          values={values}
          fields={fields}
          onSubmit={onSubmit}
          onChange={(values, errors) => {
            setValues(values);
          }}
        />
      </div>
      <div>
        <h3>Google style form</h3>
        <Form
          formItemStyle={"google"}
          formLayout={formLayout}
          values={values2}
          fields={fields}
          onSubmit={onSubmit}
          onChange={(values, errors) => {
            setValues2(values);
          }}
        />
      </div>
    </div>
  )
}

export default FormDoc;