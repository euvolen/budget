import mongoose, { Schema } from 'mongoose'

const expenceSchema = new Schema({

    currency :String,
    category: 
            {
                type: Schema.Types.ObjectId,
                ref: 'categories'
            },
    summ: Number,
    description:String,
    spender:   {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },   
    

    
}, {
        timestamps: true
    })





const Expences = mongoose.model('expences', expenceSchema)

export default Expences