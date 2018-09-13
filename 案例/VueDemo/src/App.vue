<template>
<!-- div标签是固定结构 -->
   <div>
    <header class="site-header jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1>请发表对Vue的评论</h1>
                </div>
            </div>
        </div>
    </header>
    <div class="container">
        <Add/>
        <List :comments='comments'/>
    </div>
   </div>

</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {// 固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组件中必须写函数)
    data(){
        return {
            // Item中的用户名和评论内容封装成对象，以数组来封装对象
            comments:[
                {
                    name:"Bob",
                    content:"Vue还不错1"
                },
                {
                    name:"Alice",
                    content:"Vue还不错2"
                },
                {
                    name:"Coco",
                    content:"Vue还不错3"
                },
            ]
        }
    },

  components: {
    Add,
    List
  }
}

</script>

<style>

</style>
