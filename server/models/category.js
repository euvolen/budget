import mongoose, {
    Schema
} from 'mongoose'

const categorySchema = new Schema({

    name: String,
    description: String,
    budget: {

        type: Schema.Types.ObjectId,
        ref: 'budget'
    }


}, {
    timestamps: true
})


const Category = mongoose.model('category', categorySchema)

export default Category