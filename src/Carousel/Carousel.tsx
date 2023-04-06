import React from 'react';
import '../assets/style/carousel.less';

type DemoProps = {
  imgList: Item[];
};
type Item = {
  id: number;
  title: string;
  desc: string;
  src: string;
};

// 这是一个demo
export default ({ imgList }: DemoProps) => {
  // const backImage = useRef(null);
  // useEffect(() => {
  //   setBackImage();
  // }, ['']);
  // /**设置背景图片**/
  // const setBackImage = () => {
  //   backImage.current.style.backgroundImage = `url(${imgList[0].src})`
  //   // const items = document.getElementsByClassName("item")
  //   // for (let i = 0; i < items.length; i++) {
  //   //   console.log(items[i],items[i].style.backgroundImage);
  //   //   items[i].style.backgroundImage = `url(${imgList[i].src})`
  //   // }
  // };

  /**上一张图片**/
  const previousImage = () => {
    const panel = document.getElementsByClassName('panel');
    const items = document.getElementsByClassName('item');
    panel[0].prepend(items[items.length - 1]);
  };
  /**下一张图片**/
  const nextImage = () => {
    const panel = document.getElementsByClassName('panel');
    const items = document.getElementsByClassName('item');
    panel[0].appendChild(items[0]);
  };
  return (
    <div style={{ marginLeft: '20px' }} className="carousel">
      <div className="container">
        <div className="panel">
          {imgList.map((item) => {
            return (
              <div key={item.id} className="item">
                <div className="content">
                  <img src={item.src} alt="" />
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                  <div className="button">查看更多 &gt;</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="carouselButton">
          <div className="button" onClick={previousImage}>
            &lt;
          </div>
          <div className="button" onClick={nextImage}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};
