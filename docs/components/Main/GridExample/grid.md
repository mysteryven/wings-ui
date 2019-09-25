### 简介

主要的难点是如何实现 `gutter` 这里，要使用到负 margin 来取消某一行开始和结尾超出的 padding
其他的就都是一些 css 的设置了。

{||}

### gutter - number

设置在 `Row` 上面，用来设置每个 col 之间的间隔。

{||}

### span - number

设置在 `Col` 上面，总的 `Row` 被分为 24 份。

{||}

### offset - number

偏移量, 同样设置在 `Col` 上面。

{||}

## 代码示例

```
<Row gutter={10} className="row">
    <Col className="col" span={6}></Col>
    <Col className="col" span={6}></Col>
    <Col className="col" span={6}></Col>
    <Col className="col" span={6}></Col>
</Row>
<Row className="row" gutter={10}>
    <Col className="col" span={6}></Col>
    <Col className="col" offset={6} span={6}></Col>
    <Col className="col" span={6}></Col>
</Row>
```

