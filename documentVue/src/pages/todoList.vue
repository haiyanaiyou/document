<template>
    <div>
        <form v-on:submit.prevent="addTodo">
            <label for="new-todo">add a todo</label>
            <input type="text"
                id="new-todo"
                v-model="newTodoText"
            >
            <button>add</button>
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
                    this.newTodoText = ''
                    
                }else{
                    alert('要输入任务哦~')

                }
                
            },
            remove: function(index){
                this.todos[index].delText = true
                console.log(this.todos[index].delText)
                //this.todos.splice(index,1)
                
            }
        }
    }
</script>

<style scoped>
    ul{
       margin-top: 60px; 
    }
    li{
        margin-bottom: 20px;
    }
    .textStyle{
        text-decoration:line-through ;
    }
</style>