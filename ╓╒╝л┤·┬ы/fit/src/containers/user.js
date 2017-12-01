import React, {Component} from "react";

 import WingBlank from 'antd-mobile/lib/wing-blank';
 import Icon from "antd-mobile/lib/icon";
 import Flex from "antd-mobile/lib/flex";

 import Gap from "../components/gap.js";
 import Back from "../components/back.js";

 import $ from "n-zepto";

 import "../styles/user.scss";

 class User extends Component {

   constructor(props){
     super(props);
     this.state = {showSet: false};
   }


   showSet = ()=>{
     this.setState({showSet: true});

     $(window).scrollTop(0);
     $("body").css({"overflow":"hidden", "height": $(window).height + 'px'});
   }

   setClose = ()=>{
     this.setState({showSet: false});
      $("body").css({"overflow":"auto", "height":'auto' });
   }

   render(){

     const title = {
       fontSize: "1.2rem !important",
       padding: "1rem 0"
     };

     const setCommonStyle = {
       height: "4rem",
       lineHeight: "4rem",
       fontSize: "1rem",
       borderBottom: "1px solid #ddd"
     };

    return (
      <div className="user">

        <div className="clearfix" style={{position:"fixed", top: "0", left:"0", zIndex:"10", background:"#fff",width:"100%",fontSize:"1.2rem", height:"1.5rem", padding:"1rem 1rem"}}>
          <span style={{cssFloat:"left"}}>我</span>
          <img onClick={this.showSet} style={{cssFloat:"right", width:"1.2rem", height:"1.2rem",marginRight:"2rem"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/health/set.svg"/>
          <div style={{cssFloat:"right", marginRight:"1.5rem", position:"relative"}}>
            <img style={{width:"1.2rem", height:"1.2rem"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/health/message.svg"/>
            <span style={{color:"#fff",textAlign:"center", lineHeight:"1rem", fontSize:"0.2rem",position:"absolute", right:"-0.4rem", top:"-0.4rem", width:"1rem", height:"1rem",background:"red", borderRadius:"50%"}}>20</span>
          </div>
        </div>

        <div className="user-info clearfix" style={{marginTop:"3.5rem"}} >
            <div className="head-img">
              <img src={require("../images/hot/show.jpg")}/>
            </div>

            <div className="nick">
              <p>
                蚂蚁要革命
                <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/health/editor-2.svg" />
              </p>
              <div>
                <span>0</span>&nbsp;粉丝 &nbsp;&nbsp;
                <span>0</span>&nbsp;关注 &nbsp;&nbsp;
                <span>0</span>&nbsp;动态
              </div>
            </div>
            <Icon  type="right" size="lg" />
        </div>

        <WingBlank style={{paddingBottom: "1rem"}} className="user-border">
          <div className="item user-font">
            我的健康数据
            <Icon type="right" size="lg" />
          </div>

          <Flex>
            <Flex.Item className="health-data">
              <div className="health-data-top">
                <div><img src="http://orkwtps3q.bkt.clouddn.com/image/svg/health/clock.svg"/></div>
              </div>
              <p>运动历史</p>
            </Flex.Item>

            <Flex.Item className="health-data">
              <div className="health-data-top">
                <div><img src="http://orkwtps3q.bkt.clouddn.com/image/svg/health/step.svg"/></div>
              </div>
              <p>步数记录</p>
            </Flex.Item>

            <Flex.Item className="health-data">
              <div className="health-data-top">
                <div><img src="http://orkwtps3q.bkt.clouddn.com/image/svg/health/curve.svg"/></div>
              </div>
              <p>身体数据</p>
            </Flex.Item>

            <Flex.Item className="health-data">
              <div className="health-data-top">
                <div><img src="http://orkwtps3q.bkt.clouddn.com/image/svg/health/columnar.svg"/></div>
              </div>
              <p>运动能力</p>
            </Flex.Item>
          </Flex>
        </WingBlank>


        <WingBlank>
          <div className="item user-font">
            徽章
            <span style={{cssFloat:"right",marginRight:"1.5rem"}}>5</span>
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>

        <Gap marginTop="0rem"/>

        <WingBlank  className="user-border">
          <div className="item user-font">
            运动概况
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>

        <WingBlank >
          <div className="item user-font">
            每周目标
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>
        <Gap marginTop="0rem"/>

        <WingBlank className="user-border">
          <div className="item user-font">
            我的活动
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>

        <WingBlank className="user-border">
          <div className="item user-font">
            我的收藏
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>

        <WingBlank >
          <div className="item user-font">
            我的小组
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>
        <Gap marginTop="0rem"/>


        <WingBlank  className="user-border">
          <div className="item user-font">
            购物车
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>

        <WingBlank className="user-border">
          <div className="item user-font">
            购买记录
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>

        <WingBlank >
          <div className="item user-font">
            优惠券
            <Icon type="right" size="lg" />
          </div>
        </WingBlank>
        <Gap marginTop="0rem"/>

        <Back show={this.state.showSet} setClose={this.setClose} title="设置">

          <WingBlank>
            <div style={setCommonStyle}>个人资料</div>
            <div style={setCommonStyle}>账号管理</div>
            <div style={setCommonStyle}>账号绑定</div>
            <div style={setCommonStyle}>隐私设置</div>
            <div style={setCommonStyle}>连接第三方服务</div>
          </WingBlank>
          <Gap marginTop="-0.2rem"/>

        </Back>
      </div>
    );
   }
 }

 export default User;
