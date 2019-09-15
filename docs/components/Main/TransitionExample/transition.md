### 使用说明

该组件的 API 设计参考 Vue 的 Transition 组件，使用中，过渡所需的时间要加在 `enterActive` 或 `leaveAcitve` 中。具体如下面例子所示。

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


### Enter 

enter 过程中有三个 API:
1. `enterActive` 存在于整个进入动画中。
2. `beforeEnter` 在进入动画的第一帧。
3. `afterEnter` 在进入动画的最后一帧。

```html
 <Transition
   visible={isVisible}
   beforeEnter={{ fontSize: '16px', opacity: 0 }}
   afterEnter={{ fontSize: '24px', opacity: '1' }}
   enterActive={{ transition: 'all 1s' }}
 >
   <div>Hello World</div>
 </Transition>

```

{||}

### Leave 

leave 过程中同样有三个 API:
1. `enterLeave` 存在于整个离开动画中。
2. `beforeLeave` 在进入离开动画的第一帧。
3. `afterLeave` 在进入离开动画的最后一帧。

```html
<Transition
   visible={isVisible}
   beforeLeave={{ marginLeft: '10px', }}
   afterLeave={{ color: 'red', marginLeft: '100px' }}
   leaveActive={{ transition: 'all 0.4s', }}
 >
   <div>Hello World</div>
 </Transition>
```