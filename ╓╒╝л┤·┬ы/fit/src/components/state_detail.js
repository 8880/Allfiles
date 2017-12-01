import React, {Component} from "react";
import "./state_detail.scss";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {withRouter} from "react-router";
import IScroll from 'iscroll/build/iscroll';


import PropoTypes from "prop-types";
import Toast from 'antd-mobile/lib/toast';

import Modal from "antd-mobile/lib/modal";
const operation = Modal.operation;

const $ = window.$;

class StateDetail extends Component {

  static propotypes = {

  }

  constructor(props){
    super(props);
    this.height = $(window).height();
    this.state = {scrollHeight:this.height};
  }


  componentDidMount(){

    $(window).scrollTop(0);
    $("body").css({height:this.height, overflow:"hidden"});

    $(".am-tabs-bar").css("display", "none");
    $(".bottom_bars .am-tab-bar-bar").hide();
    $(".state-publish").hide();
    $(".state-attention").hide();


    let __height = this.height - $(".item_top").height() - 48;
    this.setState({scrollHeight: __height});

    let scrollid = new IScroll("#state_detail_item_show", {mouseWheel: true});

    $("#state_detail_item_show video").get(0).play();
    $("#state_detail_item_show .video_icon").hide();
  }

  horn(){
    Toast.info("加油1次",2);
  }

  closeHandler = ()=>{
    $("body").css({height:"auto", overflow:"auto"});
    $(".am-tabs-bar").css("display", "flex");
    $(".state-publish").show();
    $(".state-attention").show();

    window.history.go(-1);
    $(".bottom_bars .am-tab-bar-bar").show();
    $("#state_detail_item_show video").get(0).pause();
  }

  message = ()=>{
    $(".state_detail_item .share").hide();
    $(".state_detail_item .write_message").show();

    $(".state_detail_item .write_message input").off("focus");

    $(".state_detail_item .write_message input").focus(function () {
      let input = $(this);

      //设置输入框在虚拟键盘的上边
      setTimeout(function() {
        input.parent().css({
          "bottom": "330px"
        });
      }, 1200);
    });

    $(".state_detail_item .write_message input").focus();

  }

  sendMessage = ()=>{
    let str = $(".state_detail_item .write_message input").val();

    $(".state_detail_item .write_message").hide();
    $(".state_detail_item .share").show();
  }



  render(){

    const _this = this;

    const commonStyle = {
      cssFloat: "left",
      width: "1.2rem",
      height: "1.2rem",
      marginRight: "2rem"
    };

    return (
      <div className="state_detail_item"  style={{position:"absolute", minHeight:this.height, top: (this.props.isFirst === true ? "0rem":"-1rem"), left: "0", right:"0",zIndex:"11"}}>

        <div className="clearfix item_top" style={{ height: "2rem", padding:"1rem", background:"#584f60"}}>
          <img onClick={this.closeHandler} style={{cssFloat: "left", width:"1rem", height: "2rem",background: "none"}}
            src="http://orkwtps3q.bkt.clouddn.com/image/svg/back.svg"/>
          <div style={{color:"#fff",fontSize:"1rem",cssFloat: "left", height:"2rem", lineHeight:"2rem", marginLeft:"1rem"}}>动态详情</div>
        </div>

        <div id="state_detail_item_show" style={{height:this.state.scrollHeight, background:"#fff", overflow:"hidden"}}>
          <div>

            <div className="state_detail_item_top">
              <div  className="clearfix" style={{padding: "1rem"}}>
                <img style={{cssFloat: "left", width:"2.5rem", height:"2.5rem", borderRadius:"50%", border: "0.06rem solid gray"}} src={this.props.headImg}/>
                <div style={{cssFloat: "left", height: "2.5rem", paddingLeft: "0.5rem"}}>
                  <span style={{fontSize: "0.5rem"}}>{this.props.nickName}</span>
                  <p style={{fontSize: "0.2rem", color: "gray", margin: "0.2rem 0 0 0"}}>{this.props.timeAgo}之前&nbsp;</p>
                </div>
                <button style={{cssFloat: "right", border: "none", width: "4rem", height: "2rem", borderRadius: "0.9rem", padding: "0.2rem 1rem",fontSize: "0.5rem", color: "#fff", background: "#24c789"}}>关注</button>
              </div>
            </div>

            <div className="hot_video_src">
              {/*object-fit用于让video进行填充*/}
              <video  className="video_tag" muted  >
                <source src={this.props.videoSrc}/>
              </video>

              <div className="video_icon">
                <img src="http://orkwtps3q.bkt.clouddn.com/image/png/playVideo.png"/>
              </div>
            </div>
            <p className="desc">{this.props.desc}</p>

          </div>
        </div>

        <div className="write_message" style={{display: "none"}}>
          <input type="text" />
          <button onClick={this.sendMessage}>发布</button>
        </div>

          <div  className="clearfix  share">
          <div>
          <div>
          <img onClick={this.horn}  src="//orkwtps3q.bkt.clouddn.com/image/svg/horn.svg" />
          </div>
          <span>1236</span>
          </div>

          <div onClick={this.message}>
          <div>
          <img  src="//orkwtps3q.bkt.clouddn.com/image/svg/message1.svg" />
          </div>
          <span>100</span>
          </div>

          <div>
          <div>
          <img  src="//orkwtps3q.bkt.clouddn.com/image/svg/collect.svg" />
          </div>
          <span>67</span>
          </div>
          </div>

      </div>
    );
  }
}

export default StateDetail;
