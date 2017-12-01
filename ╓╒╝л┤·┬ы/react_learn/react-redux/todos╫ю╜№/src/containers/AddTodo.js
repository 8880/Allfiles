import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/*
import {bindActionCreators} from 'redux'

一个组件被注入dispath时,并且该组件的子组件需要修改state，但是不需要
state或者dispatch，就可以使用bindActionCreators.

var boundActionCreators = bindActionCreators(actions, dispatch);
此时返回的 boundActionCreators是一个同名的action对象
{
action1: function
action2: function
}
只不过调用 boundActionCreators.action1(arg)相当于
dispatch(action1(arg));
这样子组件直接使用boundActionCreators就行了，不用考虑其他
*/

let AddTodo = ({dispatch}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

/*
connect没有传递参数，直接将dispatch注入到AddTodo组件(props)中
*/
AddTodo = connect()(AddTodo)

export default AddTodo
