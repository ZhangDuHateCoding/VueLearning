/*
    Vue的插件库
    
*/ 

//语法规范：用匿名函数包裹起来
(function(){
    //定义一个需要向外暴露的插件对象
    const MyPlugin = {

    };
    //且该插件对象必须有一个install()方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log("Vue函数对象的方法myGlobalMethod()")
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', function(el, binding){
          //eg
          el.textContent = binding.value.toUpperCase()
          //...
        })
      
        // 3. 注入组件
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
          //...
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log("Vue实例对象的方法myMethod()")
        }
      }

      //向外暴露插件：
      window.MyPlugin = MyPlugin;//此时外界可以看到该插件
})()