This is a raw node.js Todo project using two (fs and http) module.

==== USAGE ====
1. Open this on code editor and add a terminal
2. Run the command "node index.js"
3. Open postman .
4. The base url for postman is ---> localhost:8080



==== ADD TODO ====  <br>
MATHOD  : POST  <br>
URL     : localhost:8080/addTodo  <br>
Body    : {"title" : "Add as you want"}    ===> JSON format  <br>




==== GET TODO ====  <br>
MATHOD  : GET  <br>
URL     : localhost:8080/readTodo  <br>



==== UPDATE TODO ====  <br>
MATHOD  : PATCH  <br>
URL     : localhost:8080/updateTodo  <br>
Body    : {"title" : "Change as you want" , "isCompleted": true/false -- as your wish}    ===> JSON format  <br>



==== DELETE TODO ====  <br>
MATHOD  : DELETE   <br>
URL     : localhost:8080/deleteTodo  <br>
Body    : {"id" : "Enter a id from todo.json file"}    ===> JSON format  <br>
