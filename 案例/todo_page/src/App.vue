<template>
<!-- div标签是固定结构 -->
   <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader :addTodo="addTodo" />
            <TodoList :todos="todos" />
            <TodoFooter/>
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
                    {title:"睡觉", complete:false},
                    {title:"吃饭", complete:true},
                    {title:"睡觉", complete:false},
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
            }
        }
  }

</script>

<style>

</style>