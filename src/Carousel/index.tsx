import React from 'react';

type DemoProps = {
  /**
   * @description 标题
   * @default 轮播图
   */
  title: string;
  /**
   * @description 描述
   * @default 这是一张图片
   */
  des: string;
};

// 这是一个demo
export default ({ title, des }: DemoProps) => {
  return (
    <h1>
      {title}
      {des}
    </h1>
  );
};
