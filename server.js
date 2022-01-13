const { request, response } = require('express');
const express = require('express');
const app =express();
//importing mongoose
const mongoose=require('mongoose');

// const { require } = require('nodemon/lib/config');
//importing todoController
const todoController = require('./controllers/todoController');


app.use(express.json());

app.post('/todo',todoController.addTodo);
app.get('/todo',todoController.getAllTodo);
app.put('/todo',todoController.updateById);
app.delete('/todo',todoController.deleteById);




// //importing todoModel
// // const todoModels = require('../models/todoModels');

// app.get('/', todoController.getAllTodo);
// //(request,response)=> {
//     //response.send('Hello this is a get methd)
// //});

// app.post('/',(request,response)=>{
//     response.send('Hello this is a post method');
// });

// app.put('/,',(request,response)=>{
//     response.send('Hello this is a put method');
// });


// app.put('/todos',(request,response)=>{
//     response.send([{
//         'title':'Plan trip to Finland',
//         'description':'I will be going to Finland next year',
//         'time':'Today',
//         'isCompleted' :false
//     }]);
// });
 

// app.put('/todos',(request,response)=>{
//     response.send([{
//         'username':'Kevin Ammy',
//         'password':'Kevin360',
           
//     }]);
// });
// listening to request on localhost por 3002
app.listen(5000,() => {

    console.log("My server is up and running om port 3002");
    // connecting to the database
    mongoose.connect('mongodb+srv://todo_db:Scilla1809@cluster0.9wnpl.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){ 
        console.log("DataBase is connected");
    })
    .catch(function(error){
         console.log(`DataBase not connected, ${error}`);
        //  console.log("DataBase not connected",$,{error})

    });
});
 