const todoModel = require('../models/todoModels');

async function addTodo(request,response){
    try{
        const newTodo = await todoModel.create(request.body);
        response.status(200).json(newTodo);

    }catch (error) {
        console.log("something went wrong",error.message);
    }

}
function getAllTodo(request,response){
    response.send("Hello this is getAllTodo controller");
}
function updateById(request,response){

}
function deleteById(request,response){

}

module.exports = {
    addTodo,
    getAllTodo,
    updateById,
    deleteById,
}