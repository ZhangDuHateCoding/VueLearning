<template>
<!-- div标签是固定结构 -->
   <li class="list-group-item">
        <div class="handle">
            <a @click="deleteItem">删除</a>
        </div>
        <p class="user"><span>{{comment.name}}</span><span>说：</span></p>
        <p class="sentence">{{comment.content}}</p>
    </li>

</template>

<script>
    export default {//固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
    //声明要读取的属性
    //props: ['comment'] //此种方式只指定了属性名
    props:{ // 此种方式指定了属性名和属性值的类型
        comment: Object,
        deleteComment: Function,
        index:Number
    },// 此时组件对象上已有comment属性，动态显示即可

    methods:{
        deleteItem(){
            const {comment, index, deleteComment} = this
            if(window.confirm(`确定删除${comment.name}的评论码？`)){
                deleteComment(index)//此时index没有传过来，需要List组件传递index，且在本组件中声明
            }
         }
    }
  }

</script>

<style>
    .reply{
        margin-top: 0px;
    }
    li{
        transition: 0.5s;
        overflow: hidden;
    }
    .handle{
        width:40px;
        border:1px solid #ccc;
        background: #fff;
        position: absolute;
        right: 10px;
        top: 1px;
        text-align: center;
    }
    .handle a{
        display: block;
        text-decoration: none;
    }
    .list-group-item .sentence{
        padding: 0px 50px;
    }

    .user{
        font-size: 22px;
    }
</style>