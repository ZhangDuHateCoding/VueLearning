<template>
<!-- div标签是固定结构 -->
   <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader :addTodo="addTodo" />
            <TodoList :todos="todos" :deleteTodo="deleteTodo" />
            <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
        </div>
    </div>

</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'
    
    import './base.css'

    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
        data(){
            return{
                todos:[
                    
                ]
            }
        },
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },
        //操作数据在哪个组件，操作该数据的方法就定义在哪个组件
        methods:{
            addTodo(todo){
                this.todos.unshift(todo)
            },
            deleteTodo(index){
                this.todos.splice(index, 1)
            },
            //删除所有选中的item
            deleteCompleteTodos(){
                // 过滤，留下属性值为true的item
                if(window.confirm("确定删除所有已完成任务吗?")){
                this.todos = this.todos.filter(todo => !todo.complete) // 需要刷新数组this.todos = ...
                }
            },
            // 全选/反选
            selectAllTodos(isCheck){
                this.todos.forEach(todo => todo.complete = isCheck)
            }

        },
        
  }

</script>

<style>

</style>