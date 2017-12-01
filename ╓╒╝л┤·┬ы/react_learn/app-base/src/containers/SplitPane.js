
import React from  'react'


function SplitPane(props){
  let styles = {
    width: '400px',
    height: '100px'
  };

  return (
    <div style={styles} className="clearfix" >
     {props.left}
     {props.right}
    </div>
  );
}

export default SplitPane;
