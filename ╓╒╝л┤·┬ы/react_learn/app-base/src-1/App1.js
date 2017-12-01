
import React, {Component} from 'react'
//引入Welcome 组件
import Welcome  from  './components/Welcome.js'


import Hello from  './components/Hello.js'


/*

App1: 使用了Welcome组件，并且通过props给Welcome传递了参数
Welcome: 使用了Hello 组件， 并且呢通过props给Hello传递了参数

App1 ---> Welcome  ---> Hello
*/

//App1实例化后就是组件
class App1 extends Component {

  render(){
    const obj = {
      city: 'xxx',
      street: 'yyy'
    }

    return (
      <div>
       {/* 使用Welcome组件，并且给该组件传递参数，参数都会传递给该组件的props
         App1 是父组件， Welcome是子组件， 数据由父组件传递给子组件，称为react的单向数据流
         其中 city, street 都属于props中的键值对
          */}
       <Welcome city={obj.city}  street={obj.street}/>
       <Hello />
      </div>
    );
  }
}


export default  App1;
