
import React from 'react'


class Form2  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let elem = event.target;//input的dom对象
    let name = elem.name; //isGoing or numberOfGuests

    //根据不同的input类型区分如何获得值
    let value =  elem.type === 'checkbox' ?  elem.checked  : elem.value;

    // if (elem.type === 'checkbox') {
    //   this.setState({isGoing: value});
    // } else {
    //   this.setState({numberOfGuests: value});
    // }

    /*
    es6中， [xxx] 写在对象的属性位置时，那么表示取name的值作为属性名称
    */

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
      <h1>复选框的状态为：{this.state.isGoing ? '选中' : '没选中'} ,  输入框的值为： {this.state.numberOfGuests}</h1>
      <form>
           <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /> <br/>
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
      </form>
      </div>
    );
  }
}


export default Form2;
