import Joi from 'joi'
import { Category } from "../../models"
import { category } from "../../validations"
import { UserInputError } from "apollo-server-core"
import mongoose from "mongoose";


export default {
    Query:{
        category: (root, args, {req}, info)=>{
            if(!mongoose.Types.ObjectId.isValid(args.id)){
                throw new UserInputError(`Category ID is not a valid ObjectID`)
               }
            return Category.findById(args.id)
        }
    },
    Mutation:{
        addNewCategory: async (root, args, {req}, info)=>{
       //TODO validation
            await Joi.validate(args, category, {abortEarly:false})
            const newCategory = {
                name:args.name,
                description:args.description,
                budget:args.budget,
                
            }
            const cat =  await Category.create(newCategory)
            return cat
        
    }, 
     editCategory: async(root, args, {req}, info)=>{
         //todo validation
         await Joi.validate(args, category, {abortEarly:false})
         return (await Expense.findByIdAndUpdate(args.id,{$set:{args}}, {new:true}))
    },
     deleteCategory: async (root, args, {req}, info)=>{
        //todo validation
        return (await Expense.findByIdAndDelete(args.id))
     },
    },
    Category:{
        budget:async (root, args, {req,res}, info)=>{   
            return (await root.populate('budget').execPopulate()).budget
        }
    }
}