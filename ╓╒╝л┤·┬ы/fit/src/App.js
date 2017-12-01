import React, { Component } from 'react';
import BottomBar from "./containers/bottom_bars.js";
import "./lib/css/antd-mobile.min.css";
import $ from "n-zepto";

class App extends Component {

  componentDidMount() {
    $(".load-img img").on('load', function(){
      $(this).css("height", "auto");
    });
  }

  render(){
    return (
        <div className="">
          <BottomBar/>
        </div>
    );
  }
}


export default App;
