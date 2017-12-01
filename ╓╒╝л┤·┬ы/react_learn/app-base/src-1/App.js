import React, { Component } from 'react';

import "./App.css";

//组件
class App extends Component {

  clickHandler(){
    console.log("点击了h2");
  }

  render(){
    const name = {
      firstName: 'nick',
      lastName: 'lisi'
    };

    // {} 的作用是变量替换，类似于模板引擎
    //  jsx中直接可以写 html标签

    //style不能写字符串
    // const elm = <h1 style="color:red;">我是 {name.firstName} .{name.lastName}</h1>;

    var styles = {color: 'red', fontSize: '50px'};
    const elm =
    <div>
    <h1 style={styles}>我是 {name.firstName} .{name.lastName}</h1>

    {/*
        注释方法： className 代表类，不要写class
        onXXX: 添加事件， 事件处理函数的名字
      */}
    <h2 className="one" onClick={this.clickHandler}>h2标签</h2>
    </div>

    // return 返回一个容器，所有需要包裹！！！！
    return (elm);
  }
}


//导出一个模块
export default App;
