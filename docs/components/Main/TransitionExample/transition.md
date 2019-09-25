### 使用说明
就算初始化 `visible` 为 `false`，也会有消失的动画效果，如果想让这个动画消失，可以借鉴我在 `popup` 组件中的代码。

{||}

### Visible

用来控制该组件包裹的元素是隐藏还是显示，`visible` 为 `false` 时，被包裹的元素会被销毁，所以，请不要使用下面的错误示例,
不然会影响离开动画的效果。
```
// 错误的用法
visible && (
  <Transition>Your component<Transition>
) 

// 正确的用法
<Transition visible={false}>
  Your component
<Transition> 
```

{||}

### interval

动画的持续时间，单位为毫米，默认是 300ms

{||}

### Enter 

enter 过程中有两个 API:
1. `beforeEnter` 在进入动画的第一帧。
2. `afterEnter` 在进入动画的最后一帧。

```html
 <Transition
  interval={500}
  visible={isVisible}
  beforeEnter={{ fontSize: '16px', opacity: 0 }}
  afterEnter={{ fontSize: '24px', opacity: '1' }}
 >
   <div>Hello World</div>
 </Transition>

```

{||}

### Leave 

leave 过程中同样有两个 API:
2. `beforeLeave` 在进入离开动画的第一帧。
3. `afterLeave` 在进入离开动画的最后一帧。

```html
<Transition
  interval={500}
  visible={isVisible}
  beforeLeave={{ marginLeft: '10px', }}
  afterLeave={{ color: 'red', marginLeft: '100px' }}
 >
   <div>Hello World</div>
 </Transition>
```