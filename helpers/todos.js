var db = require("../models");

exports.getTodos = function(req, res){
    db.Todo.find()
        .then(function(todos){
            res.status(200).json(todos);
        })
        .catch(function(err){
            res.status(400).send(err);
        })
}

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
        .then(function(newTodo){
            res.status(201).json(newTodo);
        })
        .catch(function(err){
            res.status(400).send(err);
        })
}

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
        .then(function(foundTodo){
            if(!response[0]._id){
                res.status(404).json({message: "Could not find that todo"});
            }
            else{
                res.status(200).json(foundTodo);
            }
        })
        .catch(function(err){
            res.status(400).send(err);
        })
}

exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //new: true makes the response be the updated version of the data
        .then(function(todo){
            if(!response[0]._id){
                res.status(404).json({message: "Could not find that todo"});
            }
            else{
                res.json(todo);
            }
        })
        .catch(function(err){
            res.send(err);
        });
}

exports.deleteTodo = function(req, res){
    db.Todo.deleteOne({_id: req.params.todoId})
        .then(function(){
            if(!response[0]._id){
                res.status(404).json({message: "Could not find that todo"});
            }
            else{
                res.status(200).json({message: "We deleted it"});
            }
        })
        .catch(function(err){
            res.status(400).send(err);
        })
}

module.exports = exports;