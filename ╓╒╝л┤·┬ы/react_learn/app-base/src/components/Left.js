import React from 'react'


function Left(){
  let styles = {
    width: "200px",
    height: "100px",
    backgroundColor: "green",
    cssFloat: "left"
  };

  return (
    <aside style={styles}>我是左边栏</aside>
  );
}

export default Left;
