const fs = require('fs');
const path = require('path');

async function deleteTodo(req , res){

    try{

        let reqData = null;
        
        // get request data
        req.on("data" , chunk => {
            reqData = chunk.toString();
        })


        // delete data
        req.on("end" , async () => {

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

                // filter new data and remove requested data
                let newData = previousData.filter( d => d.id !== JSON.parse(reqData).id );

                // write new data to file
                fs.writeFileSync(path.join(__dirname, '../todo.json'), JSON.stringify(newData , null , 4), 'utf-8'); 

                res.end(JSON.stringify({success : true , message: "todo deleted successfully" , data : newData}));
                 
            }
            catch(e){
                previousData = []
            }
        })

    }catch(e){
        console.log(e);
    }

}


module.exports = deleteTodo;