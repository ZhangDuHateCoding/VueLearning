<template>
<!-- div标签是固定结构 -->
   <div class="todo-header">
        <input type="text" placeholder="请输入任务，按回车键或确定添加" @keyup.enter="addItem" v-model="title" />
        <button type="button" @click="addItem">确定</button>
    </div>

</template>

<script>
    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
    props:{
        addTodo:Function
    },
    data(){
        return {
            title:''
        }
    },
    methods:{
        addItem(){
            //1. 检查输入合法性
            const title = this.title.trim()
            if(title == ''){
                alert("必须有输入")
                return
            }
            //2. 根据输入生成一个todo对象
            const todo = {
                title,
                complete: false
            }
            //3. 将todo对象添加到todos列表
            this.addTodo(todo) 
            //4. 清除输入
            this.title = ''
        }
    }
  }

</script>

<style>

</style>