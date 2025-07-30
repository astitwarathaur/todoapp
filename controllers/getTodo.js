//  import the Todo model
const Todo = require("../models/Todo");


//  define todo handler
exports.getTodo = async (req, res) => {
    try {
        // fetch all todo item from database
        const todos = await Todo.find({});

        // response
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: "Entire data is fetched",
            });
    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "server error",
            });
    }
}


//  define getTodoById handler
exports.getTodoById = async (req, res) => {
    try {
        // fetch todo item by id from database
        const id = req.params.id;
        const todo = await Todo.findById({ _id: id });

        // if todo not found
        if (!todo) {
            return res.status(404)
                .json({
                    success: false,
                    message: "Todo not found",
                });
        }

        // response
        res.status(200)
            .json({
                success: true,
                data: todo,
                message: "Todo fetched successfully",
            });
    }
    catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                error: err.message,
                message: "server error",
            });
    }
}

