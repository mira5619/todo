var input = document.querySelector("input");
var btn = document.querySelector("button");
var list = document.querySelector("ul");
var badge = document.querySelector(".badge");
var items = document.querySelectorAll("li");
console.log(items);

var tasks = 0;
document.querySelector('p>span').textContent =new Date().toLocaleString();
//document.querySelector('p').style.textDecoration ='underline';

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
  //e.target.style.listStyleType ="none";
  //list.removeChild(e.target);
  items.forEach(function(item, index){
    console.log(index);
  });
  tasks -= 1;
   badge.innerHTML = tasks;
});

// list.addEventListener("dblclick", function(e) {
//   list.removeChild(e.target);
//   tasks -= 1;
//   badge.innerHTML = tasks;
// });

var resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset);

function reset() {
  location.reload();
}
