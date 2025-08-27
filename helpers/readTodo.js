const fs = require('fs');
const path = require('path'); 

function readTodo(res) {
    try{ 
        const data =  fs.readFileSync(path.join( __dirname  , '../todo.json'), 'utf-8');

        if(data){
            res.end(JSON.stringify({success : true , message : "get all todo success" , data: JSON.parse(data) })); 
            return;
        }
        res.end(JSON.stringify({success : true , message : "get all todo success" , data: [] }));

    }catch(e){
        console.log(e);
    }
}

module.exports = readTodo;