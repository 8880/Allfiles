import React, {Component} from "react";
import "./hot_video_item.scss";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import $ from 'n-zepto';
import PropoTypes from "prop-types";
import Toast from 'antd-mobile/lib/toast';

import StateDetail from "./state_detail.js";

import Line from "./line.js";


import Modal from "antd-mobile/lib/modal";
const operation = Modal.operation;


class HotVideoItem extends Component {

  static propotypes = {
    id: PropoTypes.number.isRequired,
    desc: PropoTypes.string.isRequired,
    headImg: PropoTypes.string.isRequired,
    videoSrc: PropoTypes.string.isRequired,
    nickName: PropoTypes.string.isRequired,
    timeAgo: PropoTypes.number.isRequired,
    comments: PropoTypes.number.isRequired,
    jiayou: PropoTypes.number.isRequired
  }

  constructor(props){
    super(props);
    this.state = {...props};
  }


  componentDidMount(){
    $(".desc").each(function(index,elem){
      if ($(elem).height() > 70){
        $("p.show_all").eq(index).show();
      }
    });
  }

  horn=()=>{
    // Toast.info("加油1次",2);
    let count = ++this.state.jiayou;
    this.setState({jiayou:count});
  }


  render(){

    const _this = this;

    const commonStyle = {
      cssFloat: "left",
      width: "1.2rem",
      height: "1.2rem",
      marginRight: "2rem"
    };

    const url = "/hotvideo/" + this.props.id;

    return (
      <div className="hot_video_item">

        <div className="hot_video_item_top">
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
          <div className="show_all" onClick={()=>{$(".video_icon").hide()}} style={{dispay:"none"}}>
            <Link to={url}>全部</Link>
          </div>

          <div  className="clearfix  share">
            <img onClick={this.horn} style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/horn.svg" />

            <Link to={url}>
              <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/message1.svg" />
            </Link>

            <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/share.svg" />

            <div onClick={() => operation([
                { text: '举报', onPress: () => console.log('举报被点击')}
              ])}
              style={{cssFloat: "right", fontSize: "2rem", marginTop: "-1.2rem"}}>...</div>
          </div>

          <Line/>

          <div className="jiayou">
            <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/jirou.svg"/>
            <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/se.svg"/>
            <span><i>{this.state.jiayou}</i>&nbsp;个加油</span>

            <div className="comment">
              <div><Link to={url}>查看全部 <span>{this.state.comments}</span> 评论</Link></div>
            </div>

          </div>




          </div>
    );
  }
}

export default HotVideoItem;
