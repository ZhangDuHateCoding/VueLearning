<template>
<!-- div标签是固定结构 -->
   <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isAllCheck" v-show="todos.length>0">
        </label>
        <span>
            <span>已完成{{completeSize}}个任务,</span><span>全部{{todos.length}}个</span>
        </span>
        <button class="btn btn-danger" v-show="completeSize>0" @click="deleteCompleteTodos()">清除已完成任务</button>
    </div>

</template>

<script>
    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
    props:{
        todos:Array,
        deleteCompleteTodos:Function,
        selectAllTodos:Function
    },
    computed:{
        completeSize(){
            return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1:0), 0)
        },
        isAllCheck:{
            get(){
                return this.completeSize === this.todos.length && this.completeSize > 0//满足条件则勾选
            },
            set(value){ //这个value是当前checkbox最新的值
                this.selectAllTodos(value)
            }
        }
    }
  }

</script>

<style>

</style>