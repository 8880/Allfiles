
## react 组件的生命周期

```

//mounting  挂载(创建真实dom，并且插入到页面中)
constructor()
componentWillMount() //将要挂载，但是还没有
render() // 渲染dom
componentDidMount() //已经挂载成功



// updating  更新
componentWillReceiveProps(nextProps) //接收到了新的props
shouldComponentUpdate(nextProps, nextState)  // 决定是否要更新，是就能返回true，否就返回false, 默认返回true
componentWillUpdate(nextProps, nextState) //
render() // 更新
componentDidUpdate() //更新完毕


// unmounting  卸载
componentWillUnmount()


// errror handling  错误捕获, React V16
componentDidCatch()

```

## React virtual DOM 虚拟dom

```

obj = {
  tagName: xxx,
  props: yyyy,
  children: [
  {
    tagName:xxx,
    props: yyy,
    children: []
    },
    {
      tagName:xxx,
      props: yyy,
      children: []
    }
    ]
}


修改state 重新生成虚拟节点， 和原来的节点进行对比，只修改有差异的地方

```
