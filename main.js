var input = document.querySelector("input");
var btn = document.querySelector("button");
var list = document.querySelector("ul");
var badge = document.querySelector(".badge");

var tasks = 2;

btn.addEventListener("click", function(e) {
  if (input.value === "") {
    console.log("empty");
  } else {
    list.innerHTML +=
      "<li><img class='hide' src='check.png'>" + input.value + "</li>";
    input.value = "";
    tasks += 1;
    badge.innerHTML = tasks;
  }
});

list.addEventListener("click", function(e) {
  e.target.classList.toggle("done");
  e.target.firstElementChild.classList.toggle("hide");
});

list.addEventListener("dblclick", function(e) {
  list.removeChild(e.target);
  tasks -= 1;
  badge.innerHTML = tasks;
});
