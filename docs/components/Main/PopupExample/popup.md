### 介绍

过渡效果使用的是 `Transition` 组件，该组件的比较复杂的地方依然考虑好在使用 hooks 时的异步问题。另外，要使用 `Portal` 来让每一个 Popup 都直接放在 `document.body` 下，以免被覆盖。 

{||}

### Visible - boolean

控制 Popup 的显示与隐藏，默认值是 false

{||}

### position - 'bottom' | 'left'

我只添加了常用的两个选项，其他的也只是简单地添加 css 就可以了，本框架出于提升自己，就不做重复的工作了。

{||}

### 代码演示

```html
 <Popup visible={isLeftVisible} position="left">
    <Button onClick={() => { setLeftVisible(false) }}>close</Button>
    <p>Html</p>
    <p>JavaScript</p>
    <p>CSS</p>
    <p>Java</p>
    <p>Go</p>
</Popup>
```

```
<Popup visible={isBottomVisible}>
    <Button onClick={() => { setBottomVisible(false) }}>close</Button>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
</Popup>
```


