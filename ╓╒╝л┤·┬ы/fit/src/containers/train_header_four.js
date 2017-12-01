import React, {Component} from "react";

// import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

import SearchBar from "antd-mobile/lib/search-bar";
import WhiteSpace from "antd-mobile/lib/white-space";
import Button from "antd-mobile/lib/button";
import WingBlank from "antd-mobile/lib/wing-blank";
import Modal from "antd-mobile/lib/modal";

import Record from  "../components/record.js";
import "../styles/train_header_four.scss";

const alert = Modal.alert;


class TrainFour extends Component {
  state = {
    value: '深蹲',
    focused: false,
    canClearRecords: true,
    records: ["深蹲","腹肌撕裂", "俯卧撑入门", "晨间操", "引体向上", "徒手胸肌训练" ]
  };

  clearRecords = ()=>{
    this.setState({ canClearRecords:false, records: []});
  }

  recordHandler(value) {
    this.setState({value: value});
  }

  onChange= (value) => {
    this.setState({ value});
  };

  onBlur = () =>{
    //失去焦点时，添加记录
    let records = this.state.records;
    let value = this.state.value;

    //防止添加空记录，防止重复添加搜索记录
    if (value !== ""){
      if (records.indexOf(value) == -1 ){
        records.push(value);
      }
    }

    this.setState({records, canClearRecords: true})
  }

  clear = () => {
    this.setState({ value: '' });
  };

  render() {

    const recordHandler = this.recordHandler.bind(this);

    return (
      <div className="train_header_four">
        <div className="my-search">
          <SearchBar
            value={this.state.value}
            placeholder="搜索课程"
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => this.onBlur() }
            onCancel={() => console.log('onCancel')}
            showCancelButton
            onChange={this.onChange}
            />
        </div>

        <WingBlank style={{fontSize: "0.8rem",  padding: "1.2rem"}}>

          <div style={{height: "1rem", lineHeight: "1rem", color: "#827a89"}}>
            <div style={{float: "left"}}>搜索记录</div>

             {/* 当已经清除记录时， 不在显示清除按钮*/}
            <div   style={{ display: this.state.canClearRecords ? "block": "none" ,float: "right"}} onClick={() => alert('删除记录', '确定删除么?', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确定', onPress: () => this.clearRecords(), style: { fontWeight: 'bold' } },
            ])}>清除记录</div>
          </div>


          {/*
            根据 记录，生成历史查询记录
            点击清除时，不在显示
          */}
          <div className="clearfix">
            {
              this.state.records.map((elem,index)=>(
                <Record key={index} content={elem} clickHandler={recordHandler} />
              ))
            }
          </div>
        </WingBlank>

      </div>
    );
  }
}

export default TrainFour;
