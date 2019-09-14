### visible

用来控制该组件包裹的元素是隐藏还是显示，当隐藏后，元素会被销毁，所以不用使用如下代码,
不然会影响离开动画的效果。
```
visible && (
    <Transition>Your component<Transition>
) // 错误的用法

<Transition visible={false}>
    Your component
<Transition> // 正确的用法
```


{||}

### Enter 

enter 过程中有三个 API:
1. `enterActive` 存在于整个进入动画中。
2. `beforeEnter` 在进入动画的第一帧。
3. `afterEnter` 在进入动画的最后一帧。

```html
   
```

{||}

### Leave 

leave 过程中同样有三个 API:
1. `enterLeave` 存在于整个离开动画中。
2. `beforeLeave` 在进入离开动画的第一帧。
3. `afterLeave` 在进入离开动画的最后一帧。