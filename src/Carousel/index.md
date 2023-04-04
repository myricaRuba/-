---
title: 轮播图
order: 1
group:
  title: 组件
---

## 轮播图

该组件为自定义的轮播图

### 何时使用

多张图片需要展示，且需要图片介绍

### 代码演示

```tsx
import React from 'react';
import { Demo } from 'react-strange-components';
import Carousel from './Carousel';

const imgList = [
  {
    id: 1,
    src: './src/assets/img/girl.jpg',
    desc: '这是第一张图',
    title: '女孩',
  },
  {
    id: 2,
    src: './src/assets/img/kongFu.jpg',
    desc: '这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图',
    title: '动漫功夫女孩',
  },
];

export default () => <Carousel imgList={imgList} />;
```

<!-- 自动生成API表格 -->

<API id="Demo"></API>
