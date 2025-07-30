//  import the Todo model
const Todo = require("../models/Todo");

//  define todo handler
exports.createTodo = async (req, res) => {
    try {
        // extract title and description from request body
        const { title, description } = req.body;
        //  create new todo obj nd insertin db
        const response = await Todo.create({ title, description });
        // send a json response with success flag
        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry created Successfully',
        }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}
