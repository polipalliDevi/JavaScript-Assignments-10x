var input=document.querySelector("input[name='todo_input']")
var addBtn=document.querySelector("button")
var todoDiv=document.querySelector(".todos")
var count=0
addBtn.addEventListener('click',function(){
    var todoValue=document.createElement('p')
     todoValue.setAttribute("key",count)
     count+=1
     todoValue.innerHTML=input.value
     todoDiv.appendChild(todoValue)
     input.value=" "
     todoValue.addEventListener('click',function(){
        todoDiv.removeChild(todoValue)
    })
})
let selectTag = document.querySelector("#dropDown");
selectTag.addEventListener("change", getTodoApi);
function getTodoApi() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (selectTag.value == "Completed") {
        todoDiv.innerText=" "
        let heading = document.createElement("h1");
        heading.innerText="Completed Todo list";
        todoDiv.appendChild(heading);
        let todoList = data.filter((item) => item.completed==true);
        todoList.forEach((item, index) => {
          let para = document.createElement("p");
          para.setAttribute("key", index);
          para.innerText=item.title;
          todoDiv.appendChild(para);
        });
      } else if (selectTag.value === "Pending") {
        todoDiv.innerText=" "
        let heading = document.createElement("h1");
        heading.innerText="Pending Todo List";
        todoDiv.appendChild(heading);
        let todoList = data.filter((item) => !item.completed);
        console.log(todoList);
        todoList.forEach((element, index) => {
          let para = document.createElement("p");
          para.setAttribute("key", index);
          para.innerText=element.title;
          todoDiv.appendChild(para);
        });
      }
    });
}