let app = new Vue({
    el: "#app",
    data: {
        newItem: "",
        todos: [],
    },
    methods: {
        addItem: function() {
            if (this.newItem == "") return
            let todo = {
                id: this.todos.length,
                item: this.newItem,
                isDone: false,
                selected: "",
                deadLine: "",
                date: false,
                rewrite: false,
                sort: 0
            }
            this.todos.push(todo)
            this.newItem = ""
        },
        deleteItem: function(index) {
            this.todos.splice(index, 1)
            this.todos.filter((todo, index) => {
                todo.id = index
            })
        },
        changeStatus: function(index) {
            if (this.todos[index].selected === "完了") {
                this.todos[index].isDone = true
            } else {
                this.todos[index].isDone = false
            }
        },
        deadLineSet: function(index) {
            this.todos[index].date = true
        },
        rewriteTodo: function(index) {
            this.todos[index].rewrite = !this.todos[index].rewrite
        },
        sortTodo: function() {
            this.todos.forEach(todo => {
                if (todo.selected == "完了") {
                    todo.sort = 1
                } else if (todo.selected == "進行中") {
                    todo.sort = 2
                } else {
                    todo.sort = 3
                }
            });

            this.todos.sort(function(a, b) {
                return a.sort - b.sort
            })
        }
    },
})