
import { Category } from "../../models"
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
            const newCategory = {
                name:args.name,
                description:args.description,
                budget:args.budget,
                
            }
            const cat =  await Category.create(newCategory)
            return cat
        
    }
        
    },
    Category:{
        budget:async (root, args, {req,res}, info)=>{   
            return (await root.populate('budget').execPopulate()).budget
        }
    }
}