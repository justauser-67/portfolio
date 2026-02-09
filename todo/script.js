const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const btn = document.getElementById("add-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    li.onclick = () => {
      todos.splice(index, 1);
      saveTodos();
    };
    list.appendChild(li);
  });
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

btn.onclick = () => {
  if (input.value.trim()) {
    todos.push(input.value);
    input.value = "";
    saveTodos();
  }
};

renderTodos();