<template>
<!-- div标签是固定结构 -->
    <li>
        <label>
            <input type="checkbox" v-model="todo.complete">
            <span>{{todo.title}}</span>
        </label>
    </li>

</template>

<script>
    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
    props:{
        todo:Object,
        index:Number
    }
  }

</script>

<style>

</style>