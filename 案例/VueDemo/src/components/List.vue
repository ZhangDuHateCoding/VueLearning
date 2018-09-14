<template>
<!-- div标签是固定结构 -->
   <div style="display:block; float:right" class="col-md-8">
        <h3 class="reply">评论回复</h3>
        <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！</h2>
        <ul class="list-group">
            <Item v-for="(comment, index) in comments" :key="index" :comment='comment' :deleteComment="deleteComment" :index="index"/>
            <!-- v-for遍历数组，key绑定下标-->
            <!-- comment要交给Item组件，使用:comment='comment'-->
            <!-- 之后在Item组件中读取comment -->
        </ul>
    </div>

</template>

<script>
    import Item from './Item.vue'
    export default {// 固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
        // 一个组件想要接收父组件传递给其的数据，要声明
        // 声明接收属性：这个属性就会成为组件对象的属性，在模板中可以直接读取(此时从vm变成了组件对象)
        props: ['comments','deleteComment'],
        //映射
        components:{
            Item,
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
