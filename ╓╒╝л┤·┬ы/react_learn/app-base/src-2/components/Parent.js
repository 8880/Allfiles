import React, { Component } from 'react';
import Child  from './Child.js'


class Parent extends Component {
  constructor(props){
    super(props);
    this.state = {value: 10};
  }

  incValue(){

    //setState的第二种更新方式
    // 永远保证 prevState是上一个修改成功的state
    this.setState((prevState, props)=>{

      //return 的内容为要修改的state
      return {value: prevState.value + 1};
    });
  }


  render(){

    return (
      <div>
      <h1> 当前的value值为 {this.state.value} </h1>

      {/*子组件要想修改父组件中的数据，那么必须要接收父组件传递过来的函数，并且该函数的this要绑定到父组件上*/}
      <Child incValue={this.incValue.bind(this)} />
      </div>
    );
  }


}


export default Parent
