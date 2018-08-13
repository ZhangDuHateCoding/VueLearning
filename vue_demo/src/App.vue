<template>
    <!-- div标签是固定结构 -->
    <div>
        <img class="logo" src="./assets/logo.png" alt="logo">
        <!-- 第三步：使用组件标签 -->
        <HelloVue/>
    </div>
</template>

<script>
    //第一步：进入组件
    import HelloVue from './components/HelloVue.vue'
    export default{ //固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组件中必须写函数)
    //第二步：映射组件标签
    components: {
        HelloVue,
    }
}
</script>                                                                                   

<style>
    .logo{
        width: 12.5rem;
        height: 12.5rem;
    }
</style>


