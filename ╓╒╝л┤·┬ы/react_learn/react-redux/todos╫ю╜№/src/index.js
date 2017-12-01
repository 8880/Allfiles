import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

/*
import reducer from './reducers/index.js'
直接引入目录，是引入目录中的index.js文件
*/
import reducer from './reducers'


/*store就是redux创建的全局state
reducer（如果有多个reducer，那么需要combineReducers进行合并）是专门用于修改state的
reducer利用action来修改对应的state
*/
const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
