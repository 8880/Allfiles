import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Tabs from 'antd-mobile/lib/tabs';
import WhiteSpace from 'antd-mobile/lib/white-space';
import Toast from 'antd-mobile/lib/toast';

import "../styles/login.scss";
import "whatwg-fetch";


//index.html中引入zepto(添加了模块)，即 window.$
const $ = window.$;


const TabPane = Tabs.TabPane;
class Login extends Component {
    constructor(props){
    super(props);
    this.isPasswdShow = false;
    this.initHeight = $(window).height();
    this.state = {tabKey:1};
  }

  componentDidMount(){

    const _this = this;
    $("#login .am-tabs-tab").eq(0).css("border-bottom", "2px solid #108ee9");

    //组建刚加载完毕时，只显示第一个tab,只能获得2个input
    this.phoneInput = $("input[name=phonenumber]").eq(0);
    this.yanzhengmaInput = $("input[name=yanzhengma]").eq(0);

    this.phoneInput.focus(function(){
      $(".bottom_bars .am-tab-bar-bar").hide();

      //虚拟键盘的高度 h
      setTimeout(function() {
        let h = _this.initHeight - $(window).height();
        alert(h);
      }, 2000);


    }).blur(function(){
      $(".bottom_bars .am-tab-bar-bar").show();
    });

    this.yanzhengmaInput.focus(function(){
      $(".bottom_bars .am-tab-bar-bar").hide();
    }).blur(function(){
      $(".bottom_bars .am-tab-bar-bar").show();
    });
  }

  callback = (key)=> {

    if (this.state.tabKey === 2){

      //切换了tab之后才能获得剩余2个input
      this.accountInput = $("input[name=account]").eq(0);
      this.passwdInput = $("input[name=passwd]").eq(0);

      this.accountInput.focus(function(){
        $(".bottom_bars .am-tab-bar-bar").hide();
      }).blur(function(){
        $(".bottom_bars .am-tab-bar-bar").show();
      });

      this.passwdInput.focus(function(){
        $(".bottom_bars .am-tab-bar-bar").hide();
      }).blur(function(){
        $(".bottom_bars .am-tab-bar-bar").show();
      });
    }
  }

  handleTabClick= (key)=> {
    $("#login .am-tabs-tab").eq(key-1).css("border-bottom", "2px solid #108ee9").siblings(".am-tabs-tab").css("border-bottom", "none");
    let count = this.state.tabKey + 1;
    this.setState({tabKey: count});
  }

  showToast=(text)=>{
    Toast.info(text,2);
  }

  passwdHandler = ()=>{

    /*
    子元素使用transform时，导致 .passwd_show的borderRadius有问题，需要每次重新设置？？？？
    */
    if (!this.isPasswdShow){
      $("#login .passwd_show div").eq(0).css({
        transform: "translate3d(1.5rem, 0,0)"
      });
      $("#login .passwd_show").eq(0).css({backgroundColor:"#108ee9", borderColor: "#108ee9" ,color: "#fff", borderRadius:"10px/50%"}).find("span").text("abc");

      $("#login input[name=passwd]").eq(0).attr('type', "text");
      this.isPasswdShow = true;
    } else {
        $("#login .passwd_show div").eq(0).css({
        transform: "translate3d(0, 0,0)"
      });
      $("#login .passwd_show").eq(0).css({backgroundColor:"#fff", borderColor:"#ddd", color: "#000", borderRadius:"10px/50%"}).find("span").text("");
      $("#login input[name=passwd]").eq(0).attr('type', "password");
      this.isPasswdShow = false;
    }
    }

  phoneLogin= ()=>{

    let phonenumber = this.phoneInput.val();
    let  yanzhengma = this.yanzhengmaInput.val();

    if ((!phonenumber) || (!yanzhengma)){
      this.showToast("手机号或者验证码不可以为空");
      this.phoneInput.focus();
      return;
    }


    /*
    //发送登录信息
    fetch("/login",{
      method: 'post',
      headers: {
        'Content-type': "application/json"
      },
      body:JSON.stringify({
        phonenumber: phonenumber,
        yanzhengma: yanzhengma
      })
    }).then(function(res){
      return res.json();
    }).then(function(data){
      //根据data判断登录状态
      if (data.loginStatus){
      //设置全局的state
      this.props.dispatch({type:'LOGIN', login:true});
      } else {
      this.props.dispatch({type:'LOGIN', login:false});
      }
    }).catch(function(err){
      console.log("login",err);
    });
    */
  }

  passwdLogin=()=>{
    let account = this.accountInput.val();
    let  passwd = this.passwdInput.val();

    if ((!account) || (!passwd)){
      this.showToast("用户名或者密码不能为空！");
      this.account.focus();
      return;
    }


    /*
    //发送登录信息
    fetch("/login",{
    method: 'post',
    headers: {
    'Content-type': "application/json"
    },
    body:JSON.stringify({
    account:account,
    passwd: passwd
    })
    }).then(function(res){
    return res.json();
    }).then(function(data){
    //根据data判断登录状态
    if (data.loginStatus){
    //设置全局的state
    this.props.dispatch({type:'LOGIN', login:true});
    } else {
    this.props.dispatch({type:'LOGIN', login:false});
    }
    }).catch(function(err){
    console.log("login",err);
    });
    */
  }

  getYanzhenma=()=>{
    /*
     fetch("/getyzm", {
       method: "post"
     }).then(function(res){
       return res.json();
     }).then(function(data){
       //判断验证码是否发送成功
     }).catch(function(err){
       console.log(err);
     });
     */
  }

  render(){

    return (
      <div id="login">
        <div className="login_top">
          <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/logo.svg"/>
          <span>Fit Youself</span>
          <div>美好身材,出汗可得</div>
        </div>

        <div style={{width:"80%", margin:"0 auto"}}>
          <WhiteSpace />
          <Tabs defaultActiveKey="1" animated={false} onChange={this.callback} onTabClick={this.handleTabClick}>

            <TabPane tab="短信登录" key="1">
              <div style={{padding:"1.5rem 0rem"}}>
                <section className="section_com">
                  <input className="input_area" type="text" name="phonenumber" placeholder="手机号"/>
                  <button  onClick={this.getYanzhenma} className="yanzhengma">获取验证码</button>
                </section>

                <section className="section_com">
                  <input className="input_area" type="text" name="yanzhengma" placeholder="验证码"/>
                </section>

                <section className="hint">
                   温馨提示：未注册Fit帐号的手机号，登录时将自动注册，且代表您已同意
                   <a href="#" target="_blank">《用户服务协议》</a>
                </section>

                <section style={{marginTop: "2rem"}}>
                  <button onClick={this.phoneLogin} className="login_btn">登录</button>
                </section>

                <section className="about_us">
                  <a href="#">关于我们</a>
                </section>

              </div>
            </TabPane>

            <TabPane tab="密码登录" key="2">
              <div style={{padding:"1.5rem 0rem"}}>
                <section className="section_com" >
                  <input className="input_area" type="text" name="account" placeholder="手机/邮箱/用户名"/>
                </section>

                <section className="section_com">
                  <input className="input_area" type="password"  name="passwd" placeholder="密码"/>
                  <div className="passwd_show" onClick={this.passwdHandler}>
                    <div></div>
                    <span></span>
                  </div>
                </section>

                <section style={{marginTop: "2rem"}}>
                  <button onClick={this.passwdLogin} className="login_btn">登录</button>
                </section>

                <section className="about_us">
                  <a href="#" >关于我们</a>
                </section>

              </div>
            </TabPane>

          </Tabs>
          <WhiteSpace />
        </div>

      </div>
    );
  }
}


//将dispatch注入 Login
Login = withRouter(connect()(Login))
export default Login;
