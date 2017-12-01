
import React, {Component} from 'react'

class NameForm extends  Component {
  constructor(props){
    super(props);

    this.state = {value: ''};
    //将一个普通函数绑定
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){

    return (
      <div>
      <h1>输入框的内容为： {this.state.value }</h1>

      <form onSubmit={this.handleSubmit}>
      {/*
        Name: <input type="text" placeholder="请输入姓名" value={this.state.value} onChange={this.handleChange} />
        content: <textarea style={{width:"400px", height: "300px"}}   onChange={this.handleChange} />
      */}

      <select value={this.state.value} onChange={this.handleChange}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
      </select>

      <button>提交</button>
      </form>
      </div>
    );
  }
}


export default  NameForm;
