
import React, {Component} from "react";

import $ from "n-zepto";

class Show extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    //img src中使用require(this.props.imgSrc)存在错误
    //更换为服务器图片
  }

  componentDidMount(){

    //超过两行之后，显示省略号...
    $(".show_component p").css({
      "text-overflow": "ellipsis",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",
      display:"-webkit-box"
    });
  }

  render(){

    const supportStyle = {
      height: "2rem",
      width: "4rem",
      lineHeight: "2rem",
      textAlign: "right",
      cssFloat: "right",
      background: "url('http://orkwtps3q.bkt.clouddn.com/image/svg/support.svg') left center no-repeat",
      backgroundSize: "2rem 1rem"
    };


    return (
      <div className="show_component" style={{fontSize: "0.8rem"}}>
        <img style={{"width": "100%"}} src={this.props.imgSrc}/>
        <p style={{"margin": "0rem", "paddingTop": "0.3rem", "height": "1.7rem", "overflow":"hidden"}}>
        {this.props.content}
        </p>
        <div style={{"height":"2rem", "lineHeight": "2rem"}}>
          <div style={{cssFloat: "left", height: "2rem"}}>{this.props.nickName}</div>
          <div style={supportStyle}>{this.props.support}</div>
        </div>
      </div>
    );
  }
}

export default Show;
