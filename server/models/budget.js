import mongoose, {
    Schema
} from 'mongoose'


const budgetSchema = new Schema({
    family: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }],
    income: [{
        type: Schema.Types.ObjectId,
        ref: 'income'
    }],
    expences: [{
        type: Schema.Types.ObjectId,
        ref: 'expences'
    }],

}, {
    timestamps: true
})


const Budget = mongoose.model('budget', budgetSchema)

export default Budget