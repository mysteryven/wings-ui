该组件使用起来非常的简单

```js
  import {success} from 'wings-ui';

  const onShowMessageHandle = () => {
    success({ duration: 4000, content: '恭喜你，更新成功' });
  };
  
  return (
    <Button onClick={onShowMessageHandle}>Show Message</Button>
  );
```