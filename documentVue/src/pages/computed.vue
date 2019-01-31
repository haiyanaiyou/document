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

         <!-- 计算属性computed和侦听属性watch的区别
                侦听属性：用来观察和响应Vue实例上的数据变动
                当需要在数据变化时执行异步或者开销较大额操作时，使用watch

                计算属性默认只有getter 
          -->

          <ul>
              <li v-for = "n in even(numbers)">{{ n }}</li>
          </ul>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
               message: 'hello  world',
               numbers: [1,2,3,4,5,6]
            }
        },
        computed:{
            reverseMessage: function(){
                return this.message.split('').reverse().join('')
            }
            
        },
        methods: {
            even: function(numbers){
                return this.numbers.filter(function(number){
                        return number%2 === 1
                })
            }
        }
    }
</script>