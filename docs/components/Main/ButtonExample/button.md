### theme - 按钮类型

按钮类型有以下三种

```html
<Button>Hello</Button>
<Button theme="primary">Hello</Button>
<Button theme="warning">Hello</Button>
```

{||}

### disabled - 禁用状态

通过指定 `disabled` 属性来设置禁用状态，这个时候按钮的点击事件不生效

```html
<Button disabled>Hello</Button>
<Button theme="primary" disabled>Hello</Button>
<Button theme="warning" disabled>Hello</Button>
```

{||}

### full

快捷的让按钮的宽度为 100%
```html
<Button full>Hello</Button>
<Button theme="primary" full>Hello</Button>
<Button theme="warning" full>Hello</Button>
```

{||}

## loading - 加载状态

设置 loading 状态，此时 `onClick` 事件同样不生效

```html
<Button full loading>Hello</Button>
<Button theme="primary" full loading>Hello</Button>
<Button theme="warning" full loading>Hello</Button>
```