<template>
    <div>
        <el-alert title="警告提示的文案" type="warning" center show-icon v-if='isShow' @close='addShow'></el-alert>
        <form v-on:submit.prevent>
            <label for="new-todo">add a todo</label>
            <input type="text"
                id="new-todo"
                v-model="newTodoText"
            >
             <button @click="addTodo">add</button>
        </form>
        <ul>
            <li 
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.title"
                @click="remove(index)"
                v-bind:class="{'textStyle': todo.delText === true}"
            >{{todo.title}}</li>
        </ul>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                newTodoText: '',
                isShow: false,
                todos: [
                    {
                        id: 1,
                        title: 'do the dishes',
                        delText: false
                    },
                    {
                        id: 2,
                        title: 'take out the trash',
                        delText: false
                    },
                    {
                        id: 3,
                        title: 'mow the lawn',
                        delText: false
                    },
                ],
                nextTodoId: 4
            }
        },
        methods: {
            addTodo: function(){
                if(this.newTodoText != ''){
                    this.todos.push({
                        id: this.nextTodoId++,
                        title: this.newTodoText
                    })
                    this.newTodoText = '';
                    this.isShow = false
                    
                }else{
                   //alert('输入内容')
                   this.isShow = true
                }
                
            },
            remove: function(index){
                this.todos[index].delText = true
                //this.todos.splice(index,1)
                
            },
            addShow: function(){
                console.log(this.isShow)
                this.isShow = false
            }
           
        }
    }
</script>

<style lang="scss" scoped="" type="text/css">
    ul{
       margin-top: 60px; 
       li{
            margin-bottom: 20px;
        }
    }
    .textStyle{
        text-decoration:line-through ;
    }
</style>