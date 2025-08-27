const http = require('http');
const addTodo = require('./helpers/addTodo');
const readTodo = require('./helpers/readTodo'); 
const updateTodo = require('./helpers/updateTodo');
const deleteTodo = require('./helpers/deleteTodo');


// create server
http.createServer((req, res) => {

    (async function hudai(){

        if(req.url === "/addTodo" && req.method === "POST") await addTodo(req , res);    // add todo

        if(req.url === "/readTodo" && req.method === "GET") readTodo(res);    // read todo

        if(req.url === "/updateTodo" && req.method === "PATCH" ) updateTodo(req , res);    // update todo

        if(req.url === "/deleteTodo" && req.method === "DELETE" ) await deleteTodo(req , res);    // delete todo

    }())
    

}).listen(8080, () => console.log('Server running on port => 8080'));