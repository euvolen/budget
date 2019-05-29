import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({

    name :String,
    description:String,
    initiator:{
 
        type: Schema.Types.ObjectId,
        ref: 'users'
    } 
    
    
}, {
        timestamps: true
    })





const Category = mongoose.model('category', categorySchema)

export default Category