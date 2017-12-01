import React, {Component} from "react";

 import Carousel from 'antd-mobile/lib/carousel';
 import WhiteSpace from 'antd-mobile/lib/white-space';
 import WingBlank from 'antd-mobile/lib/wing-blank';
 import Flex  from "antd-mobile/lib/flex";
 import Icon from "antd-mobile/lib/icon";

 import $  from 'n-zepto';

 import IScroll from 'iscroll/build/iscroll';

 import Gap from "../components/gap.js";

 import  "../styles/find_header_three.scss";

 import {lunbo,recommand, abc,star} from "../data/find_header_three.json";

 class FindThree extends  Component {
   constructor(props){
     super(props);
     this.state = {lunbo,recommand,abc,star};
   }

   componentDidMount(){
     $(".load-img img").on('load', function(){
       $(this).css("height", "auto");
     });

    $(".slider-frame").css("min-height", "12rem");


     new IScroll('#recommand_Wrapper', { scrollX: true, scrollY: false, mouseWheel: true ,eventPassthrough: true});
     new IScroll('#abc_Wrapper', { scrollX: true, scrollY: false, mouseWheel: true ,eventPassthrough: true});
     new IScroll('#star_Wrapper', { scrollX: true, scrollY: false, mouseWheel: true ,eventPassthrough: true});
   }

   render(){

     const settings = {
      className: "my-carousel",
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      autoplay: true,
      dotActiveStyle: {
        backgroundColor: "#33a3f4"
      }
    };

    const title = {
      fontSize: "0.8rem",
      padding: "1rem 0"
    };


     return (
       <div className="find_header_three">
         <div className="load-img">
           <Carousel {...settings} >

             {this.state.lunbo.map(ii => (
               <a href="https://www.baidu.com" key={ii} style={{display: "block"}}>
                 <img
                   src={require("../images/find/train/lunbo/" + ii + ".jpg")}
                   alt="icon"
                   style={{width: "100%"}}
                   onLoad={() => {
                     window.dispatchEvent(new Event('resize'));
                   }}
                   />
               </a>
             ))}
           </Carousel>
         </div>

         <div className="classify">
           <Flex style={{height: "3rem", padding:"1rem  0rem", color:"#000", textAlign:"center", fontSize:"0.6rem"}}>

             <Flex.Item style={{height:"3.2rem"}}>
               <a href="https://www.baidu.com" className="classify_link">
                 <img style={{width:"100%"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/train_action.svg" />
               </a>
               <p style={{margin: "0.2rem 0 0 0"}}>动作</p>
             </Flex.Item>

             <Flex.Item style={{height:"3rem"}}>
               <a href="https://www.baidu.com" className="classify_link">
                 <img style={{width:"100%"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/train_music.svg" />
               </a>
               <p style={{margin: "0.2rem 0 0 0"}}>音乐</p>
             </Flex.Item>

             <Flex.Item style={{height:"3rem"}}>
               <a  href="https://www.baidu.com" className="classify_link">
                 <img style={{width:"100%"}} src="http://orkwtps3q.bkt.clouddn.com/image/svg/train_all.svg" />
               </a>
               <p style={{margin: "0.2rem 0 0 0"}}>全部训练</p>
             </Flex.Item>

           </Flex>
         </div>

         <Gap/>


           <WingBlank>
             <div className="item" style={{title}}>
               推荐训练
               <Icon type="right" size="lg" />
             </div>

             <div id="recommand_Wrapper" style={{overflow:"hidden"}}>
               <div className="clearfix" style={{width:"50rem"}} >
                 {
                   this.state.recommand.map((ii,index) => (
                     <a href="https://www.baidu.com" key={index} className="course_link">
                        <img
                         src={require("../images/find/train/recommand/" + ii.id + ".jpg")}
                         alt="icon"
                         style={{width: "16rem", height:"8rem"}}
                         onLoad={() => {
                           window.dispatchEvent(new Event('resize'));
                         }}
                         />
                       <p style={{margin: "0rem",position:"absolute", top:"1rem", left: '1rem', fontSize:"1rem"}}>{ii.title}</p>
                       <p className="small_font" style={{margin: "0rem",position:"absolute", top:"2.5rem", left: '1rem'}}>{ii.members}人已经参加</p>
                       <p style={{margin: "0rem",position:"absolute", bottom:"1rem", left: '1rem', fontSize:"0.8rem"}}>{ii.grade} {ii.time}分钟</p>
                     </a>
                   ))
                 }
               </div>
             </div>
           </WingBlank>

           <Gap/>

           <WingBlank>
             <div className="item" style={{title}}>
               新手入门
               <Icon type="right" size="lg" />
             </div>

             <div id="abc_Wrapper" style={{overflow:"hidden"}}>
               <div className="clearfix" style={{width:"68rem"}} >
                 {
                   this.state.abc.map((ii,index) => (
                     <a href="https://www.baidu.com" key={index} className="course_link">
                       <img
                         src={require("../images/find/train/abc/" + ii.id + ".jpg")}
                         alt="icon"
                         style={{width: "16rem", height:"8rem"}}
                         onLoad={() => {
                           window.dispatchEvent(new Event('resize'));
                         }}
                         />
                       <p>{ii.title}</p>
                       <p>{ii.members}人已经参加</p>
                       <p>{ii.grade} {ii.time}分钟</p>
                     </a>
                   ))
                 }
               </div>
             </div>
           </WingBlank>

           <Gap />
             <WingBlank>
               <div className="item" style={{title}}>
                 明星课程
                 <Icon type="right" size="lg" />
               </div>

               <div id="star_Wrapper" style={{overflow:"hidden"}}>
                 <div className="clearfix" style={{width:"68rem"}} >
                   {
                     this.state.star.map((ii,index) => (
                       <a href="https://www.baidu.com" key={index} className="course_link">
                         <img
                           src={require("../images/find/train/star/" + ii.id + ".jpg")}
                           alt="icon"
                           style={{width: "16rem", height:"8rem"}}
                           onLoad={() => {
                             window.dispatchEvent(new Event('resize'));
                           }}
                           />
                         <p>{ii.title}</p>
                         <p>{ii.members}人已经参加</p>
                         <p>{ii.grade} {ii.time}分钟</p>
                       </a>
                     ))
                   }
                 </div>
               </div>
             </WingBlank>



       </div>
     );
   }
 }

 export default FindThree;
