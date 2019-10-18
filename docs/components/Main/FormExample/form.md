### fields 

这是这个组件最主要的部分，并且可以指定校验规则，格式如下：

```js
 const fields = [
    {
      key: 'username',
      label: '用户名',
      formItem: { type: 'text' }, // 目前只支持 text 和 password
      rules: [ // 这一项的验证信息，错误信息在 onChange 函数的第二个参数
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
      formItem: { 
        type: 'none',  // type 为 none 时，接受一个 item，item 的类型是 ReactElement
        item: <Button type={"primary"}>提交</Button> 
      },
    },
  ]; 
```

{||}

### formLayout 

表单的格式，在表单类型不为 `googleStyle` 的时候生效，仿照 ant-design 的设计模式

```
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
```

{||}

### formItemStyle 

不填写的时候展示默认类型，就跟 ant-design 一样，设置了 这个值为 'google' 之后就变成 Google style form 的样式了。

{||}

### values 表单的值

你可以填一下值，打开控制台看看输出的结果。

{||}

### onSubmit 和 onChange

onSubmit: 点击提交时触发此函数，也就是点击按钮类型为 `submit` 的按钮时触发的函数，这里已经做了阻止默认表单事件的操作了，你不需要在去做。


onChange: 当表单中有值有改变就会执行这个函数，使用者需要手动赋值 `values`

```js
  <Form
    formLayout={formLayout}
    values={values}
    fields={fields}
    onSubmit={onSubmit}
    onChange={(values, errors) => {
      setValues(values);
    }}
  />

  const onSubmit = (e, values) => {
    console.log(e);
    console.log(values);
  }
```