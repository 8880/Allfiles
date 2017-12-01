import React, {Component} from "react";
import Proptypes from "prop-types";

class Miles extends Component {

  static propTypes = {
    mile: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired
  };

  render (){
    const commonStyle = {
      position: "absolute",
      width: "7rem",
      height: "2rem",
      left:"50%",
      marginLeft: "-3.5rem",
      backgroundColor: "#fff",
    };

    const oneStyle = {
      fontSize: "0.8rem",
      top: "2rem"
    };

    const twoStyle = {
      top: "4.5rem",
      fontSize: "2rem"
    };

    const threeStyle = {
      bottom: "-0.2rem",
      color: "#24c789"
    };

    return (
      <div>
        <div style={{width: "11rem", height: "11rem", margin: "1rem auto", position: "relative", textAlign:"center"}}>
          <div style={{width: "100%", height: "100%", border: "1px solid gray", borderRadius: "50%"}}></div>
          <div style= {{...commonStyle, ...oneStyle}}>总公里数</div>
          <div style= {{...commonStyle, ...twoStyle}}>{this.props.mile}</div>
          <div style={{...commonStyle, ...threeStyle}}>{this.props.title}</div>
        </div>
      </div>
    );
  }

}

export default Miles;
