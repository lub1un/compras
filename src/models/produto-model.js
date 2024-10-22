import { Schema, model } from "mongoose";

const produtoSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },

});

export default model('Produto', produtoSchema);