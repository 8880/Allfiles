import React, {Component} from "react";
// import { Carousel, WhiteSpace, WingBlank,List } from 'antd-mobile';

 import Carousel from 'antd-mobile/lib/carousel';
 import WhiteSpace from 'antd-mobile/lib/white-space';
 import WingBlank from 'antd-mobile/lib/wing-blank';
 import List from 'antd-mobile/lib/list';

 import Miles from "../components/run_mile.js";

 const Item = List.Item;
 const Brief = Item.Brief;


 class TrainThree extends Component {
   render(){
     const goStyle = {
      fontSize: "1rem",
      height: "3rem",
      lineHeight: "3rem",
      color: "#fff",
      backgroundColor: "#24c789",
      marginTop: "5rem",
      position: "relative"
     };

     return (
       <div className="train_header_three" style={{textAlign: "center"}}>
         <div style={{marginTop: "5rem"}}><Miles mile={10} title="CICLING"/></div>
         <div style={goStyle}>
           开始你的骑行
           <img style={{position: "absolute", height: "1rem", right: "1rem", top: "50%", marginTop: "-0.5rem"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/cycle.svg" />
         </div>
       </div>
     );
   }
 }


 export default TrainThree;
