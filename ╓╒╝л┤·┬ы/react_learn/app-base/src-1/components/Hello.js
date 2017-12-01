
import React, {Component} from 'react'

class Hello  extends  Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <p style={{color: this.props.color, fontSize: this.props.fontSize}}>Good morning {this.props.city}</p>
    );
  }
}


export default Hello;
