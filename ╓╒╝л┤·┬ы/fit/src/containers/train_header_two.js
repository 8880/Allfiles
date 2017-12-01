import React, {Component} from "react";
import PropTypes from "prop-types";
// import { Carousel, WhiteSpace, WingBlank,List, Icon } from 'antd-mobile';

import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import List from 'antd-mobile/lib/list';
import Icon from 'antd-mobile/lib/icon';

import Train from  "../pages/train/train.js";

import BMapComponent from "../components/BMap.js";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Gap from "../components/gap.js";
import Miles from "../components/run_mile.js";

import "../styles/train_header_two.scss";

import {runWays,runTrains} from "../data/train_header_two.json";

const Item = List.Item;
const Brief = Item.Brief;


class TrainTwo extends  Component {

  constructor(props){
    super(props);
    this.state = {runWays,runTrains};
  }
  render(){
    const _this = this;
    const title = {
      fontSize: "0.8rem",
      padding: "1rem 0"
    };

    return (
      <div className="train_header_two" style={{paddingBottom: "3rem", position:"relative"}}>
        <Miles mile={10} title="RUNNING"/>
        <Gap/>

        <WingBlank>
          <div  style={title}>跑步路线</div>
          <div>
            {
              this.state.runWays.map((ii,index)=>(
                <Link to="/bmp/caochang" key={index}>
                  <List className="my-list-1">
                    <Item extra={`距离${ii.distance}公里`}>
                      {ii.name}
                      <Brief>全长{ii.long}公里{ii.members}人已打卡</Brief>
                    </Item>
                  </List>
                </Link>
              ))
            }
          </div>
        </WingBlank>

        {/*
          使用百度地图时，要使用window去访问，否则也提示 未定义，编译无法通过
          */}
        <div>
          <Route path="/bmp/caochang" render={(props)=>(<BMapComponent ak="bqHWbmgjAXI7THmM4aG0mwmBXS9SX2c9" isShow={true} callback={(map)=>{

                  var geolocation = new window.BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                  if(this.getStatus() == window.BMAP_STATUS_SUCCESS){
                    var mPoint = new window.BMap.Point(r.point.lng,r.point.lat);
                    map.centerAndZoom(mPoint,12);
                    map.enableScrollWheelZoom();

                    var circle = new window.BMap.Circle(mPoint,8000,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
                    map.addOverlay(circle);
                    var local =  new window.BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});
                    local.searchNearby('操场',mPoint,8000);

                  }});
                }}></BMapComponent>
            )}></Route>
        </div>

        <Gap marginTop="0rem"/>


        <WingBlank  className="load-img">
          <div className="item" style={{title}}>
            跑步相关训练
            <Icon type="right" size="lg" />
          </div>

          <div>
            {this.state.runTrains.map((ii, index) => {
              var to = "/train/" + ii.id;
              return (
              <Link to={to}  key={index} style={{color: "#fff",display: "block", position: "relative"}}>
                <img
                  src={require(`../images/run/${index + 1}.jpg`)}
                  alt="icon"
                  style={{width: "100%"}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                  />
                <div className="trains">
                  <div>{ii.name}</div>
                  <div>{ii.members}人参加</div>
                  <div>{ii.time}分钟</div>
                </div>
              </Link>
            );})}
          </div>
        </WingBlank>

        <div>
          {
            this.state.runTrains.map((ii,index)=>{
              var path = `/train/${ii.id}`;
              return (<Route key={index} path={path} render={(props)=>(
                  <Train {...props} title={ii.title} isFirst={false} trainId={ii.id} prev={_this.href} />
                )}></Route>)
              })
          }
        </div>


        <BMapComponent ak="bqHWbmgjAXI7THmM4aG0mwmBXS9SX2c9" isShow={false} callback={(map)=>{
            var geolocation = new window.BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){

              if(this.getStatus() == window.BMAP_STATUS_SUCCESS){
                var point = new window.BMap.Point(r.point.lng,r.point.lat);
                map.centerAndZoom(point,12);

                var options = {
                  onSearchComplete: function(results){
                    // 判断状态是否正确
                    if (local.getStatus() == window.BMAP_STATUS_SUCCESS){
                      var s = [];
                      for (var i = 0; i < results.getCurrentNumPois(); i ++){
                        s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
                      }
                      let _runWays = _this.state.runWays;
                      for (let i = 0; i < _runWays.length; i++) {
                        _runWays[i].name = s[i];
                      }
                      _this.setState({runWays:_runWays});
                    }
                  }
                };
                var local = new window.BMap.LocalSearch(map, options);
                local.search("操场");
              }});
            }} />
          </div>
    );
  }

}

export default  TrainTwo;
