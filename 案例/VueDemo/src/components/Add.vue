<template>
<!-- div标签是固定结构 -->
   <div style="display:inline-block" class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label>用户名</label>
                <input type="text" class="form-control" placeholder="用户名" v-model="name"/>
            </div>
            <div class="form-group">
                <label>评论内容</label>
                <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default" pull-right @click="add">提交</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
export default {// 固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)
    props:{ // props属性声明后，在this中都可以访问
        addComment:{ // 指定了属性名，属性值和必要性
            type:Function,
            required:true,
        },
    },
    data(){
        return {
            name:'',
            content:''
        }
    },
    methods:{
        // 添加评论
        add(){
        //1. 检查输入的合法性
            const name = this.name.trim()
            const content = this.content.trim()
            if(!name || !content){
                alert("姓名或内容不能为空")
                return
            }
        //2. 根据收集的数据，最终封装成一个comment对象
            //注意取名一致
            const comment = {
                name,
                content
            }

        //3. 将comment对象添加到comments中
            // comments在App.vue组件中
            // 数据在哪个组件，操作数据的行为(方法)就应该定义在哪个组件
            this.addComment(comment)

        //4. 清除输入
            this.name = ''
            this.content = ''

        },
        
    },

    
}

</script>

<style>

</style>
