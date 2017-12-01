import React, {Component} from "react";

import  Modal from 'antd-mobile/lib/modal';
import Toast from 'antd-mobile/lib/toast';

import "./same_city.scss";


const operation = Modal.operation;

class SameCity extends  Component {

  constructor(props){
    super(props);
  }

  horn(){
    Toast.info("加油1次",2);
  }

  render(){

    const commonStyle = {
      cssFloat: "left",
      width: "1.5rem",
      height: "1.5rem",
      marginRight: "2rem"
    };

    return (
      <div style={{padding: "0.5rem"}}>

        <div  className="clearfix" style={{paddingBottom: "0.5rem"}}>
          <img style={{cssFloat: "left", width:"2.5rem", height:"2.5rem", borderRadius:"50%", border: "0.06rem solid gray"}} src={this.props.headImg} />
          <div style={{cssFloat: "left", height: "2.5rem", paddingLeft: "0.5rem"}}>
            <span style={{fontSize: "0.5rem"}}>{this.props.nickName}</span>
            <p style={{fontSize: "0.2rem", color: "gray", margin: "0.2rem 0 0 0"}}>{this.props.timeAgo}之前&nbsp;{this.props.city}</p>
          </div>
          <button style={{cssFloat: "right", border: "none", width: "4rem", height: "2rem", borderRadius: "0.9rem", padding: "0.2rem 1rem",fontSize: "0.5rem", color: "#fff", background: "#24c789"}}>关注</button>
        </div>

        <div className="load-img">
          <img style={{width: "100%"}} src={this.props.imgSrc} />
        </div>

        <div style={{fontSize: "0.6rem", padding: "0.5rem 0rem" }}>
          <p style={{margin: "0rem"}}>{this.props.content}</p>
          <div>{this.props.train}</div>
        </div>

        <div style={{padding: "1rem 0.5rem"}} className="clearfix">
          <img onClick={this.horn} style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/horn.svg" />

          <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/message1.svg" />

          <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/share.svg" />

          <div onClick={() => operation([
              { text: '举报', onPress: () => console.log('举报被点击')}
            ])}
            style={{cssFloat: "right", fontSize: "2rem", marginTop: "-1.2rem"}}>...</div>
        </div>

      </div>
    );
  }
}

export default SameCity;
