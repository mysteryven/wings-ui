### theme - 按钮类型

按钮类型有以下三种

```html
<Transtion>Hello</Transtion>
<Transtion theme="primary">Hello</Transtion>
<Transtion theme="warning">Hello</Transtion>
```

{||}

### disabled - 禁用状态

通过指定 `disabled` 属性来设置禁用状态，这个时候按钮的点击事件不生效

```html
<Transtion disabled>Hello</Transtion>
<Transtion theme="primary" disabled>Hello</Transtion>
<Transtion theme="warning" disabled>Hello</Transtion>
```

{||}

### full

快捷的让按钮的宽度为 100%
```html
<Transtion full>Hello</Transtion>
<Transtion theme="primary" full>Hello</Transtion>
<Transtion theme="warning" full>Hello</Transtion>
```

{||}

## loading - 加载状态

设置 loading 状态，此时 `onClick` 事件同样不生效

```html
<Transtion full loading>Hello</Transtion>
<Transtion theme="primary" full loading>Hello</Transtion>
<Transtion theme="warning" full loading>Hello</Transtion>
```