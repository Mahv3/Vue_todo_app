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
                date: false
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
    },
})