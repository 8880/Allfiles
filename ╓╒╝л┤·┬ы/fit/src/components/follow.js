import React, {Component} from "react";
import PropoTypes from "prop-types";

import  Modal from 'antd-mobile/lib/modal';
import Toast from 'antd-mobile/lib/toast';

import "./follow.scss";

const operation = Modal.operation;

class Follow extends Component {

  static propoTypes = {
      headImg: PropoTypes.string.isRequired,
      nickName: PropoTypes.string.isRequired,
      lastStateTime: PropoTypes.string.isRequired,
      lastStateText: PropoTypes.string.isRequired,
      lastClass: PropoTypes.string.isRequired,
      lastClassNumber: PropoTypes.number.isRequired
  };

  constructor(props){
    super(props);
  }

  horn(){
    Toast.info("加油1次",2000);
  }


  render(){
    const commonStyle = {
      cssFloat: "left",
      width: "1.2rem",
      height: "1.2rem",
      marginRight: "2rem"
    };

    return (
      <div className="follow">
        <div className="follow-head clearfix" >
          <img src={this.props.headImg}/>
          <p>{this.props.nickName}</p>
          <div>{this.props.lastStateTime}</div>
        </div>

        <div className="follow-state">
          <p>{this.props.lastStateText}</p>
          <div className="clearfix">
            <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/lighting.svg"/>
            <div>完成<span>{this.props.lastClass}</span>第{this.props.lastClassNumber}次</div>
          </div>
        </div>

        <div  className="follow-bottom clearfix">
          <img onClick={this.horn} style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/horn.svg" />

          <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/message1.svg" />

          <img style={commonStyle} src="//orkwtps3q.bkt.clouddn.com/image/svg/share.svg" />

          <div onClick={() => operation([
              { text: '举报', onPress: () => console.log('举报被点击')}
            ])}
            style={{cssFloat: "right", fontSize: "2rem", marginTop: "-1.2rem"}}>...</div>
        </div>

        {/*<div className="bottom-line"></div> */}

      </div>
    );
  }
}

export default Follow;
