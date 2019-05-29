import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator: async email => User.doesntExist({ email }),
            message: () => `Email has been already taken`
        }

    },
    name: String,
    password: String,
    budget: 
        {
            type: Schema.Types.ObjectId,
            ref: 'budget'
        },
    role: {
        type: String,
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    }

}, {
        timestamps: true
    })


//Creates static methods for all collection
userSchema.statics.doesntExist = async function (opts) {
    return await this.where(opts).countDocuments() === 0
}
//Creates methods for entity of a collection
userSchema.methods.matchesPassword = function (password) {
    return bcrypt.compare(password, this.password)
}


userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
})

const User = mongoose.model('users', userSchema)

export default User