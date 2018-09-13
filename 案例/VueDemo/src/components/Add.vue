<template>
<!-- div标签是固定结构 -->
   <div style="display:inline-block" class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label>用户名</label>
                <input type="text" class="form-control" placeholder="用户名" />
            </div>
            <div class="form-group">
                <label>评论内容</label>
                <textarea class="form-control" rows="6" placeholder="评论内容"></textarea>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default" pull-right>提交</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script>
export default {// 固定写法，向外暴露一个配置对象(与Vue一致，可以写对象也可以写函数，而在组建中必须写函数)

}

</script>

<style>

</style>
