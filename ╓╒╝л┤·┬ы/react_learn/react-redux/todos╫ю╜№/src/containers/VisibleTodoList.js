import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

/*
返回值必须是对象，对象中的属性都会作为props注入到新组件中
*/
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})


/*
当 mapDispatchToProps为Object时，会将对象中的方法当做actionCreator,并且
直接将返回的action传递给dispatch来更新state，因此不用显示的调用dispatch(atction)
!!!!!
*/
const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

/*
将todos,onTodoClick,注入到TodoList组件中作为props
*/
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
