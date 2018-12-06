<template>
    <div>
        <!-- 计算属性和监听器 -->
        <p>original: {{message}}</p>
        <p>reverseMessage: {{reverseMessage}}</p>
        <!-- 计算属性computed和method方法的区别 -->
        <!-- 
            区别在于：
            计算属性是基于他们的依赖进行缓存的；
            也就是说，只要message值没有发生变化，reverseMessage就会立即返回之前的计算结果，不需要再次执行函数
            而method方法会在触发重新渲染时，再次执行函数
         -->
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
               message: 'hello  world'
            }
        },
        computed:{
            reverseMessage: function(){
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>