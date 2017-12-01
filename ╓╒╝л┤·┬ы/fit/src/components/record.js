import React, {Component} from "react";

import PropTypes from 'prop-types';


const styles = {
  fontSize: "0.7rem",
  cssFloat: "left",
  background: "rgba(130,122,137,0.1)",
  borderRadius: "0.6rem",
  padding: "0.5rem  0.8rem",
  marginRight: "0.6rem",
  marginTop: "0.8rem"
};

class Record extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
  }

   change=()=>{
     this.props.clickHandler(this.props.content);
   };

  render(){
    return (
      <div style={styles} onClick={this.change}>{this.props.content}</div>
    );
  }
}


export default Record;
