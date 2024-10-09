const elForm = document.querySelector(".form");
const todoList = document.querySelector(".todoList");
const elInput = document.querySelector(".input");
const delList = document.querySelector(".delImg");
const elListNumber = document.querySelector(".listNumber");
const elClear = document.querySelector(".clearBtn");
const DATA = JSON.parse(localStorage.getItem("data")) || [];
console.log(JSON.parse(localStorage.getItem("data")));
function createList(arr) {
  while (todoList.firstChild) {
    todoList.firstChild.remove();
    console.log(123);
  }
  arr.forEach((item) => {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML = `<p>${item.title}</p>
      <img class="delImg" src="./images/download.jpeg" alt="delete" />`;

    todoList.appendChild(todo);
  });
}
createList(DATA);
// add list
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let date = new Date();
  let val = elInput.value;
  while (!val) {
    return null;
  }
  let newTodo = {
    id: date.getTime(),
    title: val,
  };
  DATA.push(newTodo);
  localStorage.setItem("data", JSON.stringify(DATA));

  createList(DATA);

  elInput.value = "";
});
elClear.addEventListener("click", () => {
  localStorage.clear();

  console.log(`sallom`);
});
