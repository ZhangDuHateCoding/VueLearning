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
        <Add :addComment='addComment'/>
        <List :comments='comments' :deleteComment='deleteComment'/>
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
                    content:"Vue comment1"
                },
                {
                    name:"Alice",
                    content:"Vue comment2"
                },
                {
                    name:"Coco",
                    content:"Vue comment3"
                },
            ]
        }
    },

  components: {
    Add,
    List
  },
  // 数据在哪个组件，操作数据的行为(方法)就应该定义在哪个组件
  // 添加评论
  methods:{
      // 添加评论
      addComment(comment){ //接收参数comment,且该方法App.vue组件自己不调用，需要传递给子组件Add使用 :addComment='addComment'
      // 并在Add.vue组件中用props属性接收该方法
        this.comments.unshift(comment)
      },
      // 删除指定下标的评论
      deleteComment(index){
          this.comments.splice(index, 1)
      }

  },
 

}

</script>

<style>

</style>
