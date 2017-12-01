import React, {Component} from "react";
// import {Tabs,WhiteSpace} from 'antd-mobile';

import Tabs from 'antd-mobile/lib/tabs';
import WhiteSpace from 'antd-mobile/lib/white-space';


import "../lib/css/antd-mobile.min.css";
import "../styles/state_header.scss";

import StateOne from "./state_header_one.js";
import StateTwo from "./state_header_two.js";
import StateThree from "./state_header_three.js";

import Publish from "../components/publish.js";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}

function handleTabClick(key) {
  console.log('onTabClick', key);
}



class StateTabs extends Component {

  constructor(props){
    super(props);
    this.state = {
      tabShow: true,
      publishShow: false
    };
  }


  publish = ()=>{
    this.setState({
      tabShow: false,
      publishShow: true
    });
  }

  publishClose = ()=>{
    this.setState({
      tabShow: true,
      publishShow: false
    });
  }

  render(){
    return (
      <div className="state_header">
        <div className="state-all" style={{display: this.state.tabShow ? "block": "none" , fontSize: '1rem'}}>
          <Tabs swipeable={false} defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
            <TabPane  tab="热门" key="1">
              <div style={{ }}>
                <StateOne />
              </div>
            </TabPane>


            <TabPane tab="关注" key="2">
              <div style={{ }}>
                <StateTwo/>
              </div>
            </TabPane>

            <TabPane tab="同城" key="3">
              <div style={{ }}>
                <StateThree/>
              </div>
            </TabPane>
          </Tabs>

          <div className="line-through"></div>
          <div className="state-publish" onClick={this.publish}></div>
          <div className="state-attention"></div>
          <WhiteSpace />
        </div>

        <div className="publish-panel" style={{ display: this.state.publishShow ? "block": "none"}}>
          <Publish closeHandler={this.publishClose} />
        </div>
      </div>
    );
  }
}

export default StateTabs;
