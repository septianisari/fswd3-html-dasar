const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const apiUrl = "https://crudcrud.com/api/cf789e6f78b04d3da4dc60729cf3349d/todo";

inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}

showTasks(); 
addBtn.onclick = ()=>{
  let userEnteredValue = inputBox.value;
  let listObject = { task: userEnteredValue };
  
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(listObject)
  })
  .then(response => response.json())
  .then(data => {
    showTasks(); 
    addBtn.classList.remove("active");
  })
  .catch(error => console.error('Error:', error));
}

function showTasks(){
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let listArray = data;
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length;
    if(listArray.length > 0){ 
      deleteAllBtn.classList.add("active"); 
    }else{
      deleteAllBtn.classList.remove("active"); 
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
      newLiTag += `<li>${element.task}<span class="icon" onclick="deleteTask('${element._id}')"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; 
    inputBox.value = ""; 
  })
  .catch(error => console.error('Error:', error));
}

function deleteTask(taskId){
  fetch(`${apiUrl}/${taskId}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => {
    showTasks(); 
  })
  .catch(error => console.error('Error:', error));
}

deleteAllBtn.onclick = ()=>{
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    let taskIds = data.map(element => element._id);
    return Promise.all(taskIds.map(taskId => {
      return fetch(`${apiUrl}/${taskId}`, {
        method: 'DELETE'
      })
    }))
  })
  .then(responses => {
    showTasks();
  })
  .catch(error => console.error('Error:', error));
}
