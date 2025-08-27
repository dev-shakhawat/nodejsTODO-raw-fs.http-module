const fs = require('fs');
const path = require('path');


function updateTodo(req , res){
    let body = null;

    req.on("data", chunk => { 
        
        body = chunk.toString();
    });
  
    req.on("end", () => {
        try {

            const requestData = JSON.parse(body); 

            // read data
            const oldData = JSON.parse(fs.readFileSync(path.join( __dirname  , '../todo.json'), 'utf-8'));

            // update data
            let newData = [];
            
            for( d = 0 ; d < oldData.length ; d++){
                if(oldData[d].id === requestData.id){

                    if(requestData.title) oldData[d].title = requestData.title;

                    if(requestData.isCompleted) oldData[d].isCompleted = requestData.isCompleted;

                     newData.push(oldData[d]);
                     
                }
                else{
                    newData.push(oldData[d]);
                }
            }

            // write data
            fs.writeFileSync(path.join( __dirname  , '../todo.json'), JSON.stringify(newData , null, 4));
            
            res.end(JSON.stringify({ success: true, message: "Todo updated successfully" , data: newData }));
 
        } catch (err) {
            res.end(JSON.stringify({ success: false, message: "Invalid JSON" }));
        }
    });
    
}



module.exports = updateTodo;