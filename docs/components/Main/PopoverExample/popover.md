### 介绍

该组件主要用于简略展示某些详细信息。在实现长按功能，让我认识到 `setInterval` 往往是有坑的，我使用了 setTimeout 来代替，为了避免该组件受父亲 `overflow: hidden` 等影响。对 `content` 使用了传送门技巧，并再次基础上使用原生 DOM 方法进行再定位。

{||}

### type - 'default' | 'longPress'

类型是来控制该组件是点击触发还是长按触发。默认是点击触发。

{||}

### interval - number

当设置了长按，可以通过这个属性来设置长按多少秒显示，不传默认是 300 ms，单位是毫秒(ms) 。

{||}

### position - 'top' | 'bottom'

默认点击出现在上面。

{||}

### content - ReactNode | string

你可以传普通的字符串，也可以传你写的组件。

{||}

### 代码部分

```
<Popover content="我问一下，你今天快乐吗，我感觉你非常的快乐？">
  <Button>Top</Button>
</Popover>

<Popover type="longPress" position="bottom" content="我问一下，你今天快乐吗">
  <Button>Bottom</Button>
</Popover>
```