let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');
function fetchTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')//it will return a promise so below then used
    .then(function(response){ //here the response identifier is object returned from the api call we have to convert to json for to get exat data
        return response.json();// here we converting object to json  it also returns a promise with exat data
    }).then(function(data){
        tasks=data.slice(0,10);
        renderList();
    })
    .catch(function(error){
        console.log('error',error);
    })
    return;
}
function addTaskToDom(task) {
    let li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
        <label for="${task.id}">${task.title}</label>
        <img src="trash-solid.svg" class="delete" data-id="${task.id}" alt="delete">
    `;
    taskList.append(li);
}

function renderList () {
    console.log('renderList func called');
    taskList.innerHTML='';
    tasks.forEach(addTaskToDom);
    tasksCounter.innerHTML=tasks.length;
    return;
}

function markTaskAsComplete (taskId) {
    console.log('mark task as completed func is called')
    for( var task of tasks){
        if(taskId.toString()===task.id.toString()){
            task.completed=!task.completed;
            if(task.completed)
                showNotification('task completed sucessfully');
            else
                showNotification('task not completed');
            renderList();
            return;
        }
    }
    showNotification('task failed  to mark as completed');
}

function deleteTask (taskId) {
    console.log('delete func called');
    for( var task of tasks){
        if(task.id.toString()===taskId.toString()){
            tasks.splice(tasks.indexOf(task),1);
            renderList();
            showNotification('task deleted sucessfully');
            return;
        }
    }
    showNotification('deletion of task failed');
}

function addTask (task) {
    console.log('addtask called')
    if(task){
        tasks.push(task);
        renderList();
        showNotification('task added sucessfully');
        return;
    }
    showNotification('task not added');
}

function showNotification(text) {
    console.log('shownotfication func called');
    window.alert(text);
}
function intializeApp(){
    fetchTodos();
    addTaskInput.addEventListener('keypress',function(event){
        if(event.key==='Enter'){
            var text=event.target.value;
            if(!text){
                showNotification('enter the text before pressing enter button');
                return;
            }
            console.log(text);
            event.target.value='';
            const task={
                title:text,
                id:Date.now().toString(),
                completed:false
            }
            addTask(task);
            return;
        }
    });
    document.addEventListener('click',function(event){
        const target=event.target;
        if(target.className==='delete'){
            deleteTask(target.dataset.id); //doubt discus why this not worked this.getAttribute('data-id') which is worked in calculator js
            return;
        }
        if(target.className==='custom-checkbox'){
            markTaskAsComplete(target.id);
            return;
        }
    });
}
intializeApp()