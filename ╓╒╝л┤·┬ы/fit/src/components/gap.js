import React, {Component} from "react";
import PropTypes from "prop-types";


const gapStyles = {
  height: "0.7rem",
  backgroundColor: "#d3d7d4",
  opactiy: 0.3,
  marginTop: "0.6rem",
};

/*
Gap组件用于分割的横线,给其传入样式即可
*/
class Gap extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{...gapStyles,...this.props}}></div>
    );
  }
}

export default Gap;
