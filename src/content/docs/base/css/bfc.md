---
title: BFC
description: BFC.
---

[区块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

- 隔离性： 具有bfc特性的容器里面的元素不会在布局上影响到外面的元素

下列方式会创建块格式化上下文：

- 文档的根元素（<html>）。
- 浮动元素（即 float 值不为 none 的元素）。
- 绝对定位元素（position 值为 absolute 或 fixed 的元素）。
- 行内块元素（display 值为 inline-block 的元素）。
- 表格单元格（display 值为 table-cell，HTML 表格单元格默认值）。
- 表格标题（display 值为 table-caption，HTML 表格标题默认值）。
- 匿名表格单元格元素（display 值为 table（HTML 表格默认值）、table-row（表格行默认值）、table-row-group（表格体默认值）、table-header-group（表格头部默认值）、table-footer-group（表格尾部默认值）或 inline-table）。
- overflow 值不为 visible 或 clip 的块级元素。
- display 值为 flow-root 的元素。
- contain 值为 layout、content 或 paint 的元素。
- 弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
- 网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
- 多列容器（column-count 或 column-width (en-US) 值不为 auto，且含有 column-count: 1 的元素）。
- column-span 值为 all 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中（规范变更、Chrome bug）
