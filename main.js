var input = document.querySelector("input");
var btn = document.querySelector("button");
var list = document.querySelector("ul");
var badge = document.querySelector(".badge");

var tasks = 0;
document.querySelector("p>span").textContent = new Date().toLocaleString();

btn.addEventListener("click", function(e) {
  if (input.value === "") {
    console.log("empty");
  } else {
    list.innerHTML +=
      "<li><img class='hide' src='check.png'>" + input.value + "</li>";
    input.value = "";
    tasks += 1;
    badge.innerHTML = tasks;
    var items = document.querySelectorAll("li");
    console.log(items);
  }
});

list.addEventListener("click", function(e) {
  e.target.classList.toggle("done");
  e.target.firstElementChild.classList.toggle("hide");
  //e.target.style.listStyleType ="none";
  //list.removeChild(e.target);

  var items = document.querySelectorAll(".hide");
  tasks = items.length;
  badge.innerHTML = tasks;
});

var resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);

function reset() {
  location.reload();
}
