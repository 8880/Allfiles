import React, {Component} from "react";

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import Flex from 'antd-mobile/lib/flex';
import Icon from 'antd-mobile/lib/icon';

import IScroll from 'iscroll/build/iscroll';

import Gap from "../components/gap.js";
import Follow from "../components/follow.js";
import RecommandUser from "../components/recommand_user.js";

import $ from 'n-zepto';
import {follow,recommand} from "../data/state_header_two.json";

import "../styles/state_header_two.scss";


class StateTwo extends Component {

  constructor(props){
    super(props);
    this.state = {follow,recommand};
  }

  componentDidMount() {
    var recommandScroll = new IScroll('#recommandScroll', { scrollX: true, scrollY: false, mouseWheel: true, eventPassthrough: true});
  }

   clickHandler(index){
    let recommand = this.state.recommand;
    recommand.splice(index,1);
    this.setState({recommand});
  }

  render(){

    const title = {
      fontSize: "0.8rem",
      padding: "1rem 0"
    };

    const handler = this.clickHandler.bind(this);

    return (
      <div className="state_header_two">

        <div>
          {
            this.state.follow.map((ii,index)=>(
              <Follow key={index} headImg={ii.headImg}
                nickName={ii.nickName}
                lastStateTime={ii.lastStateTime}
                lastStateText={ii.lastStateText}
                lastClass={ii.lastClass}
                lastClassNumber={ii.lastClassNumber}
                />
            ))
          }
        </div>

        <Gap marginTop="0rem" />

        <WingBlank style={{paddingBottom:"1rem"}}>
          <div className="item" style={{title}}>
            推荐用户
            <Icon type="right" size="lg" />
          </div>

          <div id="recommandScroll" style={{overflow:"hidden"}}>
            <div className="clearfix" style={{width: "100rem"}}>
              {
                this.state.recommand.map((ii,index)=>(
                  <RecommandUser key={index}
                    headImg={ii.headImg}
                    nickName={ii.nickName}
                    index={index}
                    clickHandler={handler}
                  />
                ))
              }
            </div>
          </div>

        </WingBlank>

      </div>

    );
  }
}

export default StateTwo;
