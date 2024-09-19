let button = document.getElementById('add');
let todoList= document.getElementById('todo');
let input = document.getElementById('input');

let todos=[];

button.addEventListener('click',()=>{
    if (input.value.trim()) {
        todos.push(input.value.trim());
        console.log(todos);
        addtodo(input.value.trim());
        input.value = ''; 
    } else {
        alert("Please enter a valid task.");
    }
}) 


function addtodo(todo){
    
    let para=document.createElement('p');
    para.innerText=todo;
        todoList.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
    
       
    
}  
function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
    }
}