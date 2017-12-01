
import React, {Component} from  'react';
import PropTypes from 'prop-types';

import $ from "n-zepto";



class Back extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    setClose: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.height = $(window).height();
  }

  closeHandler = ()=>{
    this.props.setClose();
  }
  
  componentDidMount(){
  }

  render(){
    return (
      <div className="back_set" style={{zIndex:"11",display:this.props.show ? "block":"none",
        position:"fixed", top:"0", height: this.height + "px" ,"left": "0", right:"0", paddingBottom:"0.1rem", background:"#fff", overflow:"auto"}}>
        <div style={{height: "2rem", padding:"1rem", background:"#584f60"}} className="clearfix">
          <img onClick={this.closeHandler} style={{cssFloat: "left", width:"1rem", height: "2rem",background: "none"}}
            src="http://orkwtps3q.bkt.clouddn.com/image/svg/back.svg"/>
          <div style={{color:"#fff",fontSize:"1rem",cssFloat: "left", height:"2rem", lineHeight:"2rem", marginLeft:"1rem"}}>{this.props.title}</div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Back;
