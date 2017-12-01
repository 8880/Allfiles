import React from 'react'


class Test extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return <div>{this.props.value}</div>;
  }
}


function Test(props){
  return (
    <div>{props.value}</div>;
  );
}


<Test one="1" two="2" three="3"  value="hehe"  />
