
import React  from 'react'

import Hello from './Hello.js'

/*

// 使用function 创建组件，只适用于只有props的情况
function Welcome(props){
  //
  // props = {
  //   city: "xxx",
  //   street: 'yyy'
  // }
  //
  return (<h1>welcome to {props.city}   {props.street}</h1>);
}
*/



class Welcome extends React.Component {

  constructor(props){
    super(props);
  }

  //render 就是该组件将来要显示的内容
  render(){

   //render必须return，return的内容就是要显示的内容
   return (
     <div>
     <Hello color="red" fontSize="50px" city={this.props.city}/>
     <Hello color="green" fontSize="50px" city={this.props.city}/>  
     <h1>welcome to {this.props.city}   {this.props.street}</h1>
     </div>
   );
  }
}

export default Welcome;
