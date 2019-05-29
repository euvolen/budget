import mongoose, { Schema } from 'mongoose'

const incomeSchema = new Schema({

    currency :String,
    category: 
            {
                type: Schema.Types.ObjectId,
                ref: 'categories'
            },
    summ: Number,
    description:String,
    recipient:   {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },   
    
    
}, {
        timestamps: true
    })





const Income = mongoose.model('income', incomeSchema)

export default Income