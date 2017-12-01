
import React , {Component} from  'react'


class Handle  extends Component {
  constructor(props){
    super(props);
    this.state = {value: 10};
  }


  // 使用箭头函数，是一种指定this的方法
  clickHandler1 = (event)=>{
    /*
    此处使用箭头函数，可以直接将该函数的this绑定到组件本身
    */

    console.log("clickHandler1 event ", event.currentTarget);

    console.log("clickHandler1 this = ", this);// Handle
    console.log(this.state.value);
  }

  // 使用bind对普通函数进行绑定
  clickHandler2(event){
    console.log("clickHandler2 event ", event);//
    console.log("clickHandler2 this = ", this);//
    console.log(this.state.value);
  }

  render(){

    return (

      <div  onClick={(e)=>{console.log("!!!!!!", e.target);}}>
        {/* 仍然会冒泡 */}


        <button onClick={this.clickHandler1}>按钮1</button>


        {/*需要手动bind,否则就挂了*/}
        <button onClick={this.clickHandler2.bind(this)}>按钮2</button>

      </div>
    );
  }

}


export default  Handle;
