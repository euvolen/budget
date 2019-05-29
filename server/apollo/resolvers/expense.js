
import { Expense } from "../../models"
import { UserInputError} from "apollo-server-core"
import mongoose from "mongoose"


export default {
    Query:{
        expense: (root, args, {req}, info)=>{
            if(!mongoose.Types.ObjectId.isValid(args.id)){
                throw new UserInputError(`Expense ID is not a valid ObjectID`)
        }
        return Expense.findById(args.id)
        }
    },
    Mutation:{
        addNewExpense: async (root, args, {req}, info)=>{
       //TODO validation
            const newExpense = {
                description:args.description,
                category:args.category,
                spender: args.spender,
                summ: args.summ,
                budget: args.budget,

                
            }
            const exp =  await Expense.create(newExpense)
            return exp
        
    }
        
    },
    Expense:{
        category:async (root, args, {req,res}, info)=>{
                  
            return (await root.populate('category').execPopulate()).category
        },
        budget:async (root, args, {req,res}, info)=>{
                  
            return (await root.populate('budget').execPopulate()).budget
        },
        spender:async (root, args, {req,res}, info)=>{
                  
            return (await root.populate('spender').execPopulate()).spender
        },
    }
}