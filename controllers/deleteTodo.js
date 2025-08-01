//  import the Todo model
const Todo = require("../models/Todo");

//  define deleteTodo handler
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "deleted successfully",
        })
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
