const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addContainer = document.querySelector(".add");
function addTask() {
  if (inputBox.value === "") {
    alert("Bạn phải nhập vào 1 Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

addContainer.addEventListener("click", () => {
  addTask();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
