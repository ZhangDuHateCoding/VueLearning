<template>
<!-- div标签是固定结构 -->
   <div class="todo-footer">
        <label>
            <input type="checkbox" >
        </label>
        <span>
            <span>已完成0/2</span>/全部2
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
    </div>

</template>

<script>
    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)

  }

</script>

<style>

</style>