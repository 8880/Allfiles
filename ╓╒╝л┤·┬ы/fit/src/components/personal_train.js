
import React, {Component} from "react";

import {
  Link
} from 'react-router-dom';



class PersonalTrain extends Component {

  render(){
    var to = `/train/${this.props.id}`;
    return (
      <Link to={to} style={{margin: "0rem", padding: "0rem"}}>
        {this.props.children}
      </Link>
    );
  }
}

export default PersonalTrain;
