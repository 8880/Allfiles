import React from "react";
// import {Tabs,WhiteSpace} from 'antd-mobile';

import Tabs from 'antd-mobile/lib/tabs';
import WhiteSpace from 'antd-mobile/lib/white-space';


import "../lib/css/antd-mobile.min.css";
import "../styles/train_header.scss";

import TrainOne from "./train_header_one.js";
import TrainTwo from "./train_header_two.js";
import TrainThree from "./train_header_three.js";
import TrainFour from "./train_header_four.js";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}

function handleTabClick(key) {
  console.log('onTabClick', key);
}



const  TrainTabs = () => (
    <div style={{fontSize: '1rem'}}>
      <Tabs swipeable={false} defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
        <TabPane  tab="训练" key="1">
          <div style={{ }}>
            <TrainOne/>
          </div>
        </TabPane>

        <TabPane tab="跑步" key="2">
          <div style={{ }}>
            <TrainTwo/>
          </div>
        </TabPane>

        <TabPane tab="骑行" key="3">
          <div style={{ }}>
            <TrainThree/>
          </div>
        </TabPane>

        <TabPane tab="搜索" key="4">
          <div>
            <TrainFour/>
          </div>
        </TabPane>
      </Tabs>
      <WhiteSpace />
    </div>
);

export default TrainTabs;
