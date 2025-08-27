const fs = require('fs');
const path = require('path');


async function addTodo(req , res) {
    try{ 
         
        let datatext = "" ;

        // get chunk datat from request
        req.on("data", chunk => {
            datatext += chunk.toString();
        });

        // write chunk data to file
        req.on("end", async () => {
  
            // get previous data
            let previousData ;
            try{
                const data = fs.readFileSync(path.join(__dirname, '../todo.json'), 'utf-8');  // check previous data
                
                if(data){
                    previousData = JSON.parse(data);
                }
                else{
                    previousData = []
                }

            }
            catch(e){
                previousData = []
            }
            
            const newData = { "id": `${Date.now() * Math.random()   }`, "title": JSON.parse(datatext).title, "isCompleted": false, }  // set new data
            
            const newTodo = previousData.length > 0 ?  
            [...previousData, newData ] // add new data if previous
            : 
            [newData]  // add new data if no previous

            res.end(JSON.stringify({success : true ,  message : "Todo added successfully" , data : newTodo ,}));

            fs.writeFileSync(path.join( __dirname  , '../todo.json'), JSON.stringify(newTodo , null , 4));  // write new data on file

        }
    )
         
    }catch(e){
        console.log(e);
    }
}

module.exports = addTodo;