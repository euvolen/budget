import Joi from 'joi'
import { budgetVariable } from "../../validations"
import { Income } from "../../models"
import { UserInputError} from "apollo-server-core"
import mongoose from "mongoose";


export default {
    Query:{
        income: (root, args, {req}, info)=>{
            if(!mongoose.Types.ObjectId.isValid(args.id)){
                throw new UserInputError(`Income ID is not a valid ObjectID`)
        }
        return Income.findById(args.id)
        }
    },
    Mutation:{
        addNewIncome: async (root, args, {req}, info)=>{
            await Joi.validate(args, budgetVariable, {abortEarly:false})
            const newIncome = {
                description:args.description,
                category:args.category,
                recipient: args.recipient,
                summ: args.summ,
                budget: args.budget,

                
            }
            const inc =  await Income.create(newIncome)
            return inc
        
    },
    editIncome: async(root, args, {req}, info)=>{
        await Joi.validate(args, budgetVariable, {abortEarly:false})
        return (await Income.findByIdAndUpdate(args.id,{$set:{args}}, {new:true}))
    },
    deleteIncome: async(root, args, {req}, info)=>{
        //todo validation
        return (await Income.findByIdAndDelete(args.id))
    },
},
    Income:{
        category:async (root, args, {req,res}, info)=>{
                  
            return (await root.populate('category').execPopulate()).category
        },
        budget:async (root, args, {req,res}, info)=>{
                  
            return (await root.populate('budget').execPopulate()).budget
        },
        recipient:async (root, args, {req,res}, info)=>{
                  
            return (await root.populate('recipient').execPopulate()).recipient
        },
    }
}