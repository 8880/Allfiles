import React, {Component} from "react";

 import Carousel from 'antd-mobile/lib/carousel';
 import WhiteSpace from 'antd-mobile/lib/white-space';
 import WingBlank from 'antd-mobile/lib/wing-blank';
 import List from 'antd-mobile/lib/list';
 import Icon from "antd-mobile/lib/icon";
 import Flex from "antd-mobile/lib/flex";

 import $  from 'n-zepto';

 import IScroll from 'iscroll/build/iscroll';

 import Gap from "../components/gap.js";

 import {lunbo, drink, meat} from "../data/find_header_two.json";

 import "../styles/find_header_two.scss";

 class FindTwo extends Component {

   state = {lunbo, drink, meat};


   componentDidMount(){

     //使用IScroll库实现，局部滚动
     /*
     注意查看iscroll配置选项， eventPassthrough用于在设置一个方向的滚动时，保留另一个方向的功能，否则在该区域内
     就只能横向滚动，纵向滑动就失效了
     */
     var drinkScroll = new IScroll('#drinkWrapper', { scrollX: true, scrollY: false, mouseWheel: true, eventPassthrough: true});
     var meatScroll = new IScroll('#meatWrapper', { scrollX: true, scrollY: false, mouseWheel: true ,eventPassthrough: true});

     $(".load-img img").on('load', function(){
       $(this).css("height", "auto");
     });

    $(".slider-frame").css("min-height", "12rem");
   }


   render(){

     const settings = {
      className: "my-carousel",
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      autoplay: true,
      dotActiveStyle: {
        backgroundColor: "#33a3f4"
      }
    };

    const title = {
      fontSize: "0.8rem",
      padding: "1rem 0"
    };


    return (
      <div className="find_header_two">

        {/*轮播*/}
        <div className="load-img">
          <Carousel {...settings} >

            {this.state.lunbo.map(ii => (
              <a href="https://www.baidu.com" key={ii} style={{display: "block"}}>
                <img
                  src={require("../images/food/" + ii + ".jpg")}
                  alt="icon"
                  style={{width: "100%"}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                  />
              </a>
            ))}
          </Carousel>
        </div>

        {/*分类点击*/}
        <div>
          <Flex className="classify">

            <Flex.Item style={{height:"3.2rem"}}>
              <a href="https://www.baidu.com"  className="classify_link">
                <img style={{width:"100%"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/food.svg" />
              </a>
              <p className="classify_title">饮食指南</p>
            </Flex.Item>

            <Flex.Item style={{height:"3rem"}}>
              <a href="https://www.baidu.com" className="classify_link">
                <img style={{width:"100%"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/classify.svg" />
              </a>
              <p className="classify_title">分类食谱</p>
            </Flex.Item>

            <Flex.Item style={{height:"3rem"}}>
              <a  href="https://www.baidu.com" className="classify_link">
                <img style={{width:"100%"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/warehouse.svg" />
              </a>
              <p className="classify_title">食物库</p>
            </Flex.Item>

          </Flex>
        </div>

        {/*饮品*/}
        <WingBlank>
          <div className="item" style={{title}}>
            夏日轻饮
            <Icon type="right" size="lg" />
          </div>

          {/*实现局部滚动时，注意 drinkWrapper的overflow:hidden, 否则整体也就滚动了*/}
          <div id="drinkWrapper" style={{overflow:"hidden"}}>
            <div className="clearfix" style={{width:"35rem"}} >
              {
                this.state.drink.map((ii,index) => (
                  <a href="https://www.baidu.com" className="food" key={index}>
                    <img
                      src={require("../images/drink/" + ii.id + ".jpg")}
                      alt="icon"
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                      }}
                      />
                    <p>{ii.title}</p>
                  </a>
                ))
              }
            </div>
          </div>
        </WingBlank>

        <Gap/>

        {/*肉食*/}
        <WingBlank>
          <div className="item" style={{title}}>
            肉食主义
            <Icon type="right" size="lg" />
          </div>

          <div id="meatWrapper" style={{overflow:"hidden"}}>
            <div className="clearfix" style={{width:"50rem"}} >
              {
                this.state.meat.map((ii,index) => (
                  <a href="https://www.baidu.com" key={index} className="food" >
                    <img
                      src={require("../images/meat/" + ii.id + ".jpg")}
                      alt="icon"
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                      }}
                      />
                    <p>{ii.title}</p>
                  </a>
                ))
              }
            </div>
          </div>
        </WingBlank>


      </div>
    );
  }
}

export default FindTwo;
