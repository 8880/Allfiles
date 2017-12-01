import React, {Component} from 'react';
import $ from 'n-zepto';

/*
百度地图的异步加载方案，否则提示 BMap 未定义错误!!!
*/
class BMapComponent extends Component {
  static defaultProps = {
    ak: '',
    callback: function(map) {},
    id: `fit_bmp${parseInt(Math.random() * 10000000)}`
  }

  constructor(props){
    super(props);
    this.height = $(window).height();
    this.state = {isShow:this.props.isShow};
  }

  componentWillMount() {

    // 注意callback=init参数不能去掉，因为这是百度地图异步加载的接口，
    // 否则，会因为React异步创建了script，百度返回的script中又调用document.write()，从而触发错误
    let bmapSrc = `http://api.map.baidu.com/api?v=2.0&ak=${this.props.ak}&callback=init`;
    if (typeof BMap != 'undefined') {
      return;
    } else {
      let script = document.querySelector(`script[src='${bmapSrc}']`);
      if (!script) {
        script = document.createElement("script");
        script.src = bmapSrc;
        document.body.appendChild(script);
      }
    }
  }

  componentDidMount() {

    if (this.props.isShow){
      $(".am-tabs-bar").css("display", "none");
      $(window).scrollTop(0);
      $("body").css({
        height: this.height,
        overflow:"hidden"
      });

      $(".am-tab-bar-bar").css("display", "none");
    }

    function timeoutPromise(timeout) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve();
        }, timeout);
      });
    }
    function waitUntil(props) {
      return new Promise(function(resolve, reject) {
        const map = new window.BMap.Map(props.id);
        resolve(map);
      }).catch(err => {
        console.log("there's no BMap yet. Waitting ...", err);
        return timeoutPromise(300).then(() => {
          return waitUntil(props);
        });
      });
    }
    waitUntil(this.props).then(map => {
      console.log(`[+] bmap loaded`, map);
      this.props.callback(map);
    });
  }


  backHandler = ()=>{
    window.history.go(-1);
    $(".am-tabs-bar").css("display", "flex");
    $("body").css({
      height: "auto",
      overflow:"auto"
    });

    $(".am-tab-bar-bar").css("display", "flex");
    this.setState({isShow:false});
  }

  render(){
    return (
      <div style={{ display: (this.state.isShow ? "block":"none"), position:"absolute", zIndex:"11", top:"-1rem", left:"0",right:"0",minHeight:this.height, backgroundColor:"#fff"}}>
        <div id={this.props.id} style={{width:"100%", height:this.height}}></div>
        <div style={{position:"absolute", top:"1rem", left:"1rem", width:"1rem", height:"1rem", padding:"0.5rem", borderRadius:"50%", backgroundColor:"#333"}}>
          <img onClick={this.backHandler} style={{width:"100%", height:"100%"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/back.svg"/>
        </div>
      </div>
    );
  }
}


export default BMapComponent;
