import React, {Component} from "react";

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import Flex from 'antd-mobile/lib/flex';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import $ from 'n-zepto';
import Show from "../components/show.js";
import HotVideo from "../pages/video/hot_video.js";

import  StateDetail from "../components/state_detail.js";

import "../styles/state_header_one.scss";
import {show} from "../data/state_header_one.json";
import {hotVideos} from "../data/hot_videos.json";


class StateOne extends Component {

  constructor(props){
    super(props);
    this.state = {"show":show, hotVideos};
  }


  componentDidMount() {
    $(".load-img img").on('load', function(){
      $(this).css("height", "auto");
    });
  }

  formatTime(min){
    if (min > 59  && min < 24 * 60){
      //返回小时
      return parseInt(min / 60) + "小时";
    }

    if (min > 24 * 60){
      //返回天
      return parseInt(min / (24 * 60)) + "天";
    }

    return min + "分钟";//返回分钟
  }


  render(){

    const  _this = this;
    return (
      <div className="state_header_one"  style={{paddingBottom: "3rem"}}>

        <Link to="/hotvideo/main">
          <div className="hot">
            <img  src={require("../images/hot/video.jpg")} />
            <p className="title-1"> Hot Video</p>
            <p className="title-2">今日热门视频</p>
            <p className="play-button"></p>
          </div>
        </Link>


        <div className="show clearfix">
        {
          this.state.show.map((elem,index)=>(
            <div className="load-img" key={index}>
            <Show  imgSrc={elem.img} content={elem.content}
            nickName={elem.nickName} support={elem.support}/>
            </div>
          ))
        }
        </div>

        <Route path="/hotvideo/:id" render={(props)=>{
            if (props.match.params.id == "main"){
              return <HotVideo  {...props} isFirst={true}/>;
            }

            let item = _this.state.hotVideos.find((e,i)=>{
              return e.id == props.match.params.id;
            });

            return <StateDetail
              isFirst={true}
              headImg={item.headImg}
              videoSrc={item.videoSrc}
              nickName={item.nickName}
              timeAgo={_this.formatTime(item.timeAgo)}
              desc={item.desc}
              id={item.id}
              />

          }}></Route>


      </div>
    );
  }
}

export default StateOne;
