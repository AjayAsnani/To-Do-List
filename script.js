const InputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addtask() {
  if (InputBox.value === "") {
    alert("You must enter something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
  saveData();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "Li") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showList() {
  list.innerHTML = localStorage.getItem("data");
}
showList();
