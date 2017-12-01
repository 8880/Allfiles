
import React, {Component} from "react";

import ImagePicker  from 'antd-mobile/lib/image-picker';
import Modal from 'antd-mobile/lib/modal';

import "./publis.scss";

const alert = Modal.alert;


class Publish extends Component {
  constructor(props){
    super(props);
    this.state = {
      files: []
    }
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files
    });
  }

  closeHandler = ()=>{
    let handler = this.props.closeHandler;
    this.setState({files: []});

    //延迟一下，解决弹出框比页面后消失的问题
    setTimeout(function() {
      handler();
    }, 100);
  };

  componentDidMount() {
    this.text.focus();
  }

  render(){

    const close = this.closeHandler;
    const { files } = this.state;

    return (
      <div>

        {/*动态发布头部*/}
        <div className="publish-head">
            <img src="http://orkwtps3q.bkt.clouddn.com/image/svg/close1.svg"   onClick={() => alert('你还没发布状态', '确定不发了?', [
              { text: '再看看', onPress: () => console.log() },
              { text: '不发布了', onPress: () => close() },
            ])}/>
          <p>新动态</p>
          <button>发布</button>
        </div>

        {/*动态发布内容区域*/}
        <div className="publish-content">
          <div className="publish-content-text" ref={(text)=>{this.text = text;}}  contentEditable="true">
            点击编辑阁下的健身心得和经验吧
          </div>

          <div>
            <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 1}
              />
          </div>
        </div>

      </div>
    );
  }
}


export default Publish;
