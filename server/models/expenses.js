import mongoose, { Schema } from 'mongoose'

const expenseSchema = new Schema({

    currency :String,
    category: 
            {
                type: Schema.Types.ObjectId,
                ref: 'category'
            },
    summ: Number,
    description:String,
    spender:   {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    budget: 
    {
        type: Schema.Types.ObjectId,
        ref: 'budget'
    },   
    

    
}, {
        timestamps: true
    })





const Expenses = mongoose.model('expenses', expenseSchema)

export default Expenses