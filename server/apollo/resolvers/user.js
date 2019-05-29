import mongoose from "mongoose"
import { User } from "../../models"
import { UserInputError } from "apollo-server-express";
import {signOut, attemtSignIn} from '../../auth'

export default {
    Query:{
        current: (root, args, {req}, info)=>{
            return User.findById(req.session.userId)
        },
        users:(root, args, context, info)=>{
             return User.find()
        },
        user:(root, args, context, info)=>{

            if(!mongoose.Types.ObjectId.isValid(args.id)){
                    throw new UserInputError(`User ID is not a valid ObjectID`)
            }
            return User.findById(args.id)
        }
    },
    Mutation:{
        signUp: async(root, args, {req}, info)=>{
             //TODO: validation
             const user =  await User.create(args)
             req.session.userId = user.id
             req.session.role = user.role
             return user
            
        },
        signIn: async (root, {email, password}, {req}, info)=>{
             //TODO: validation
            // await Joi.validate({email, password}, signIn, {abortEarly:false})
            const user = await attemtSignIn(email,password)
            req.session.userId= user.id
            req.session.role = user.role
            return user    

        },
        signOut: (root, args, {req, res}, info)=>{

              return signOut(req,res)
        }
    },
    User:{
        budget:async (root, args, {req,res}, info)=>{
            return (await root.populate('budget').execPopulate()).budget
        }
    }
}