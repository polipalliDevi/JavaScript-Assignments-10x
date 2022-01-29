var input=document.querySelector("input[name='todo_input']")
var addBtn=document.querySelector("button")
var todoList=document.querySelector(".todos")
var count=0
addBtn.addEventListener('click',function(){
    var todoValue=document.createElement('p')
    todoValue.setAttribute("key",count)
    count+=1
    todoValue.innerHTML=input.value
    todoList.appendChild(todoValue)
    input.value=" "
    todoValue.addEventListener('click',function(){
        todoList.removeChild(todoValue)
    })
})