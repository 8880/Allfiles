import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import App1 from './App1.js';

/*
//直接导入的是 export default
// {} 导入的是 export 导出的东西
import sayHello, {name, age} from "./moduleTest.js";

import registerServiceWorker from './registerServiceWorker';

console.log(sayHello);
console.log(name);
console.log(age);
*/

/*

import xxx from yyyy  导入模块， 类似于nodejs中 require
export  类似于 nodejs中的 module.exports
*/


ReactDOM.render(<App1 />, document.getElementById('root'));
