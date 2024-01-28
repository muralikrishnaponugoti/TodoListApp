# TodoListApp
link 1:- https://jsonplaceholder.typicode.com/todos
features:- 
  - user can add any task todo by giving any name or purpose of that todo.when user clicks enter after enter the purpose then the todo will create with displaying a alert meassage
  - user can delete the todo if the user wish to do.
  - user can check or uncheck the task
  - user will get that how many tasks are ther there todo 
in the js file i used the above mention link for to fetch few todos and i displayed 10 todos from the fetched data
when the task is going to creat then
const task={
                title:text,
                id:Date.now().toString(),
                completed:false
            }
the above object will represent that task
in the the following methods handle the all process
intializeApp() this method will intialize the app
fetchTodos() this method will handle the fetching some tasks from the api (the api link is given above)
showNotification(text) this method will need a parameter which is a message that displayed in alert box
addTask (task) this method will take a parameter which is a object and add that object to todo list
deleteTask (taskId) this method will take a parameter which is a id of the task and it will remove the task for the todo list
markTaskAsComplete (taskId) this method will take a parameter which is a id of the task and it will mark task as complete if it is not completed or it will mark task as incomplete if task is completed
renderList () this method will handle the display of the tasks


