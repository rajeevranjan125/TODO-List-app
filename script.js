
const toDoInput = document.getElementById('todoinput');
const addTodoBtn = document.getElementById('addTodoBtn');
const toDoList = document.getElementById('todolist');
addTodoBtn.addEventListener('click', addTodo);
toDoInput.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        addTodo();
    }
})
function addTodo() {
    const todoText = toDoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${todoText}`;
        toDoList.appendChild(li);
        toDoInput.value = "";
    }
}
