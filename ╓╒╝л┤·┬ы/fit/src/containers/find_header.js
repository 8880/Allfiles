import React from "react";
import Tabs from 'antd-mobile/lib/tabs';
import WhiteSpace from 'antd-mobile/lib/white-space';


import "../lib/css/antd-mobile.min.css";
import "../styles/find_header.scss";

import FindOne from "./find_header_one.js";
import FindTwo from "./find_header_two.js";
import FindThree from "./find_header_three.js";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}

function handleTabClick(key) {
  console.log('onTabClick', key);
}



const  FindTabs = () => (
    <div className="find_header" style={{fontSize: '1rem'}}>
      <Tabs swipeable={false} defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
        <TabPane  tab="精选" key="1">
          <div style={{ }}>
            <FindOne/>
          </div>
        </TabPane>

        <TabPane tab="饮食" key="2">
          <div style={{ }}>
            <FindTwo/>
          </div>
        </TabPane>

        <TabPane tab="训练" key="3">
          <div style={{ }}>
            <FindThree />
          </div>
        </TabPane>

      </Tabs>
      <WhiteSpace />
    </div>
);

export default FindTabs;
