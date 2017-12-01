import React from 'react'
import Left  from '../components/Left.js'
import Right from '../components/Right.js'
import SplitPane from './SplitPane.js'

function Main(){
  return (
    <SplitPane left={<Left/>}  right={<Right/>} />
  );
}

export default Main;
