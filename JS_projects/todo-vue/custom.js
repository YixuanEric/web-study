new Vue({
 el: '#app',
 data: {
   todos: [],
   userInput: ''
 },
 methods: {
   addTodo: function() {
     if (this.userInput.trim() == '') {
       return;
     }
     var newTodo = {
       value: this.userInput
     };
     this.todos.push(newTodo);
     console.log(this.todos);
   },
   removeTodo(todo) {
     var value = todo.value;
     for (var i = 0; i < this.todos.length; i++) {
       if (this.todos[i].value == value) {
         this.todos.splice(i, 1);
         break;
       }
     }
   }
 }
});
