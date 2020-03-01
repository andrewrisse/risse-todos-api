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
            res.status(200).json(foundTodo);
        })
        .catch(function(err){
            res.status(404).send("Could not find that todo, error: " + err);
        })
}

exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //new: true makes the response be the updated version of the data
        .then(function(todo){
            res.json(todo);
        })
        .catch(function(err){
            res.status(404).send("Could not find that todo, error: " + err);
        });
}

exports.deleteTodo = function(req, res){
    db.Todo.deleteOne({_id: req.params.todoId})
        .then(function(){
            res.status(200).json({message: "We deleted it"});

        })
        .catch(function(err){
            res.status(404).send("Could not find that todo, error: " + err);
        })
}

module.exports = exports;