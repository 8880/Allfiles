import React, {Component} from "react";

 import Carousel from 'antd-mobile/lib/carousel';
 import WhiteSpace from 'antd-mobile/lib/white-space';
 import WingBlank from 'antd-mobile/lib/wing-blank';
 import List from 'antd-mobile/lib/list';
 import Icon from "antd-mobile/lib/icon";


 import Flex from "antd-mobile/lib/flex";

 import $ from "n-zepto";

 import Gap from "../components/gap.js";

 import {lunbo, topic, hotEvent, expert} from "../data/find_header_one.json";

 import "../styles/find_header_one.scss";

 class FindOne extends Component {

   state = {lunbo, topic, hotEvent, expert};

   componentDidMount() {
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
      <div className="find_header_one">
        <div className="load-img">
          <Carousel {...settings} >

            {this.state.lunbo.map(ii => (
              <a href="https://www.baidu.com" key={ii} style={{display: "block"}}>
                <img
                  src={require("../images/select/" + ii + ".jpg")}
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

        <Gap marginTop="-0.3rem"/>

        <WingBlank>
          <div className="item" style={{title}}>
            话题讨论
            <Icon type="right" size="lg" />
          </div>

          <div>
            <Flex>
              {
                this.state.topic.map((ii,index) => (
                  <Flex.Item key={index}>
                    <a href="https://www.baidu.com" className="topic">
                      <img
                        src={require("../images/topic/" + ii.id + ".jpg")}
                        alt="icon"
                        style={{width: "100%"}}
                        onLoad={() => {
                          window.dispatchEvent(new Event('resize'));
                        }}
                        />
                      <div className="topic_title">
                        <div>{ii.title}</div>
                      </div>
                    </a>
                  </Flex.Item>
                ))
              }
            </Flex>
          </div>
        </WingBlank>

        <Gap/>

        <WingBlank>
          <div className="item" style={{title}}>
            热门活动
            <Icon type="right" size="lg" />
          </div>
          <div className="load-img">
            {
              this.state.hotEvent.map((ii,index) =>{
                return (
                  <a href="https://www.baidu.com" key={index} className="hot">
                    <img
                      src={require("../images/hot_event/" + ii.id + ".jpg")}
                      alt="icon"
                      style={{width: "100%"}}
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                      }}
                      />

                    <div className="hot_baoming">报名进行中</div>

                     <div className="hot_title">{ii.title}</div>

                      <div className="hot_live">直播</div>
                  </a>
                );})
              }
          </div>
        </WingBlank>


        <div>
          <div className="item" style={{title, padding:"0 0.3rem"}}>
            达人推荐
            <Icon type="right" size="lg" />
          </div>
          <div>
            {
              this.state.expert.map((ii,index) => (
                <div key={index} style={{position:"relative"}}>
                  <a href="https://www.baidu.com" className="clearfix daren">
                    <img
                      src={ii.headImg}
                      alt="icon"
                      onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                      }}
                      />

                    <div className="daren_desc">
                      <p style={{margin: "0 0 0.5rem 0"}}>{ii.nickName}</p>
                      <p style={{margin: "0", fontSize:"0.5rem", color:"gray"}}>{ii.intro}</p>
                    </div>
                  </a>

                  <div className="daren_guanzhu">关注</div>
                </div>
              ))
            }
          </div>
        </div>

        <Gap marginTop="0rem"/>

        <WingBlank>
          <div className="item" style={{title}}>
            精选文章
            <Icon type="right" size="lg" />
          </div>

          <a className="load-img" href="https://www.baidu.com" className="jingxuan">
            <img src={require("../images/select_article/1.jpg")} style={{width:"100%"}} />
            <p>小粗腿、高低肩、没准都是扁平足的锅！</p>
          </a>

        </WingBlank>



      </div>
    );
  }
}

export default FindOne;
