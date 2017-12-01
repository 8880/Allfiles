
import React , {Component} from  'react'


class If  extends Component {
  constructor(props){
    super(props);
    console.log("constructor ...");
  }

  componentWillMount(){
    console.log("componentWillMount....");
  }

  componentDidMount(){
    console.log("componentDidMount....");
  }

  shouldComponentUpdate(){
    return true;
  }

  render(){

    console.log("render....");
    let elm ;

    if (true === this.props.test){
      elm = <h1 style={{color: "green"}}>true</h1>;
    } else if (false === this.props.test) {
      elm = <h1 style={{color: "red"}}>false</h1>;
    } else {
      elm = <h1 style={{color: "yellow"}}>this.props.test</h1>
    }

    return elm;
  }

}


export default  If;
