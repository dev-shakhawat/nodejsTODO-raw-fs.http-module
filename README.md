This is a raw node.js Todo project using two (fs and http) module.

==== USAGE ====
1. Open this on code editor and add a terminal
2. Run the command "node index.js"
3. Open postman .
4. The base url for postman is ---> localhost:8080


==== ADD TODO ====
MATHOD  : POST
URL     : localhost:8080/addTodo
Body    : {"title" : "Add as you want"}    ===> JSON format



==== GET TODO ====
MATHOD  : GET
URL     : localhost:8080/readTodo



==== UPDATE TODO ====
MATHOD  : PATCH
URL     : localhost:8080/updateTodo
Body    : {"title" : "Change as you want" , "isCompleted": true/false -- as your wish}    ===> JSON format



==== DELETE TODO ====
MATHOD  : DELETE
URL     : localhost:8080/deleteTodo
Body    : {"id" : "Enter a id from todo.json file"}    ===> JSON format
