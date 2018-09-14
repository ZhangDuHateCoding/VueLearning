<template>
<!-- div标签是固定结构 -->
   <ul class="todo-main">
        <TodoItem v-for="(todo, index) in todos"  :key="index" :todo="todo" :index="index" />
    </ul>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
    
    props:{
        todos: Array
    },

    components:{
        TodoItem,
    }
  }

</script>

<style>

</style>