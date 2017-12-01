import React, {Component} from "react";
import PropoTypes from "prop-types";


import "./recommand_user.scss";



class RecommandUser extends Component {

  static propoTypes = {
    clickHandler: PropoTypes.func.isRequired,
    headImg: PropoTypes.string.isRequired,
    nickName: PropoTypes.string.isRequired,
  };

  clickHandler(){
    this.props.clickHandler(this.props.index);
    /*
        <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/close3.svg" onClick={this.props.clickHandler(this.props.index)}/>
        直接在onClick中写props中的函数调用，有问题.
        现将父组件中方法封装到自己的方法中，然后调用自己的方法。
    */
  }

  render(){

    return (
      <div className="recommand_user">

        <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/close3.svg" onClick={this.clickHandler.bind(this)}/>

        <div className="head_img">
          <img src={this.props.headImg} />
        </div>

        <div className="user_name">
          <p>{this.props.nickName}</p>
          <div>可能感兴趣的人</div>
        </div>

        <div className="follow">关注</div>

      </div>
    );
  }
}

export default RecommandUser;
