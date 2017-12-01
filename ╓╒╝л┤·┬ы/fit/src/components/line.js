import React, {Component} from "react";


class Line extends Component {
  render(){
    const styles={
      borderBottom: "1px solid #ddd",
      transformOrigin:"0 50%",
      transform: "scale(1,0.5)"
    };
    return (
      <div style={styles}></div>
    );
  }
}

export default Line;
