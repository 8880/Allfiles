import React, {Component} from "react";

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import $ from "n-zepto";
import SameCity from "../components/same_city.js";
import {sameCity} from "../data/state_header_three.json";

import "../styles/state_header_three.scss";

class StateThree extends Component {

  constructor(props){
    super(props);
    this.state = {
      sameCity: []
    };
  }

  componentWillMount(){
    this.setState({sameCity});
  }

  componentDidMount() {
    $(".load-img img").on('load', function(){
      $(this).css("height", "auto");
    });
  }

  formatTime(min){
    if (min > 59  && min < 24 * 60){
      //返回小时
      return parseInt(min / 60) + "小时";
    }

    if (min > 24 * 60){
      //返回天
      return parseInt(min / (24 * 60)) + "天";
    }

    return min + "分钟";//返回分钟
  }


  render(){
    return (
      <div className="state_header_three">
        {
          this.state.sameCity.map((elem,index)=>(
            <SameCity key={index} headImg={elem.headImg}
              nickName={elem.nickName}
              timeAgo={this.formatTime(elem.timeAgo)}
              city={elem.city}
              imgSrc={elem.imgSrc}
              content={elem.content}
            />
          ))
        }

      </div>
    );
  }
}

export default StateThree;
