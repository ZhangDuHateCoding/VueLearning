<template>
<!-- div标签是固定结构 -->
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background:bgColor}">
        <!-- 注意onmouseenter, onmouseleave, onmouseover, onmouseout -->
        <label>
            <input type="checkbox" v-model="todo.complete">
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>

</template>

<script>
    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)

    props:{
        todo:Object,
        index:Number,
        deleteTodo: Function
    },

    data(){
        return {
            bgColor: "white", // Item默认背景白色
            isShow: false // 按钮默认不显示
            // onmouseenter和onmouseleave的方法去操作以上两个属性

        }
    },

    methods:{
        handleEnter(isEnter){
            console.log(isEnter)
            if(isEnter){
                this.bgColor = "pink"
                this.isShow = true
            }else{
                this.bgColor = "white"
                this.isShow = false
            }
        },

        deleteItem(){
            const {todo, index, deleteTodo} = this
            if(window.confirm(`确认删除${todo.title}吗?`)){
                deleteTodo(index)
            }
        }
    }


  }

</script>

<style>

</style>