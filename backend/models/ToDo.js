import mongoose from "mongoose"

const Todo = mongoose.Schema({
        "id":{
            type:Number,
            require:true
        },
        "task":{
            type: String,
            require:true,
            maxLength:50,
            trim:true
        }
});

module.exports = mongoose.model("Todo",Todo);