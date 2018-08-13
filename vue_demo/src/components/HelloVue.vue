<template>
<!-- div标签是固定结构 -->
 <div>
     <p class="msg">{{msg}}</p>
 </div>

</template>

<script>
  export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
    data(){
        return {
            msg: "Hello Vue Components!"
        }
    }
  }

</script>

<style>
    .msg{
        color:dodgerblue;
        font-size: 40px;
        text-align: center;
    }
</style>