import React, {Component} from "react";
import Flex from 'antd-mobile/lib/flex';

import $ from "n-zepto";
import IScroll from 'iscroll/build/iscroll';
import "whatwg-fetch";
import Line from "../../components/line.js";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {train} from "../../data/train.json";
import {trainVideo} from "../../data/video.json";


class Train extends Component {

  constructor(props){
    super(props);
    this.height = $(window).height();
    this.scrollId = "train" + this.props.trainId;
    console.log(this.props.trainId);

    let trainItem = train.find((e,i)=>{
      return e.id == this.props.trainId;
    });

    let trainItemVideo = trainVideo.find((e,i)=>{
      return e.id == this.props.trainId;
    });

    this.state = {trainItem,trainItemVideo};
  }

  componentWillMount(){

    /*
    向后台请求数据，并且将数据设置到 state中
    fetch(this.scrollId, {
      method:"get"
    }).then(function(response){
      return response.json();
    }).then(function(data){

    }).catch(function(e){
      console.log(e);
    });
    */
  }

  componentDidMount(){
    const _this = this;

    $(window).scrollTop(0);
    $("body").css({height:this.height, overflow:"hidden"});

    $(".am-tabs-bar").css("display", "none");
    $(".bottom_bars .am-tab-bar-bar").hide();


    this.setState({scrollHeight: this.height - $(".train_course_top").height() - 48});

    setTimeout(function() {
      //如果有问题，可以稍作延迟
      //垂直滚动时，不要设置eventPassthrough: true，否则就无效
      new IScroll("#" + _this.scrollId, {mouseWheel: true});
    }, 100);

    $(".load_action_img img").on('load', function(){
      $(this).css("width", "auto");
    });
  }

  closeHandler = ()=>{
    $("body").css({height:"auto", overflow:"auto"});
    $(".am-tabs-bar").css("display", "flex");

    // window.location.href = this.props.prev;//速度有些慢
    window.history.go(-1);
    $(".bottom_bars .am-tab-bar-bar").show();
  }


  render() {

    const strong = {
      fontWeight: "bolder",
      margin: "0.5rem 0"
    };

    const topImage = {
      height: "12rem",
      background: `url(${this.state.trainItem.image})  0 0/100% 100%`,
      padding:"0 1rem",
      position:"relative"
    };

    return (
      <div className="train_course"  style={{position:"absolute", minHeight:this.height, top: (this.props.isFirst === true ? "0rem":"-1rem"), left: "0", right:"0",zIndex:"11"}}>
        <div className="clearfix train_course_top" style={{ height: "2rem", padding:"1rem", background:"#584f60"}}>
          <img onClick={this.closeHandler} style={{cssFloat: "left", width:"1rem", height: "2rem",background: "none"}}
            src="http://orkwtps3q.bkt.clouddn.com/image/svg/back.svg"/>
          <div style={{color:"#fff",fontSize:"1rem",cssFloat: "left", height:"2rem", lineHeight:"2rem", marginLeft:"1rem"}}>训练详情</div>
        </div>

        <div id={this.scrollId}  style={{height:this.state.scrollHeight, background:"#fff", overflow:"hidden"}}>
          <div>
            <div style={topImage}>
              <p style={{fontSize:"2rem",margin:"0",position:"absolute",top:"20%"}}>{this.state.trainItem.title}</p>
              <p  style={{ margin:"0",fontSize:"0.6rem", position:"absolute", top:"60%"}}>{this.state.trainItem.desc}</p>
            </div>

            <div style={{padding:"0 0.8rem"}}>

              <div style={{height:"3rem", lineHeight:"3rem", fontSize:"1rem"}}>{this.state.trainItem.type}</div>
              <Line/>

              <Flex justify="between" style={{padding:"1rem 0",textAlign:"center", fontSize:"0.6rem"}} >
                <Flex.Item style={{textAlign:"left"}}>
                  <div>燃脂</div>
                  <div style={{...strong}}>{this.state.trainItem.ranzhi}千卡</div>
                </Flex.Item>
                <Flex.Item>
                  <div>时间</div>
                  <div style={{...strong}}>{this.state.trainItem.time}分钟</div>
                </Flex.Item>
                <Flex.Item style={{textAlign:"right"}}>
                  <div>难度</div>
                  <div style={{...strong}}>{this.state.trainItem.nandu}</div>
                </Flex.Item>
              </Flex>
              <Line/>

              <div className="clearfix" style={{padding:"1rem 0",fontSize:"0.8rem"}}>
                <div style={{cssFloat:"left"}}>动作列表</div>
                <div style={{cssFloat:"right", color:"gray"}}>{this.state.trainItemVideo.names.length}个动作</div>
              </div>


              <div className="load_action_img">
                {
                  this.state.trainItemVideo.names.map((e,i)=>{
                    //七牛云的路径
                    var imgSrc = "http://orkwtps3q.bkt.clouddn.com/video/train/" + this.props.trainId + "/" + (i+1) + ".jpg";
                    return (
                      <div key={i} style={{height:"5rem", fontSize:"1rem", marginBottom:"1rem"}} className="clearfix">
                        <img style={{cssFloat:"left",height:"5rem", width:"8rem"}}   src={imgSrc}/>
                        <div style={{cssFloat:"left",padding:"1rem", height:"3rem"}}>
                          <div style={{marginBottom:"1rem"}}>{e.title}</div>
                          <div style={{fontSize:"0.8rem", color:"gray"}}>{e.time}{e.unit}</div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>


            </div>
          </div>
        </div>

        <div className="begin_train_btn">开始训练</div>
      </div>
    );
  }
}

export default Train;
