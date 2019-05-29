
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
       //TODO validation
            const newIncome = {
                description:args.description,
                category:args.category,
                recipient: args.recipient,
                summ: args.summ,
                budget: args.budget,

                
            }
            const inc =  await Income.create(newIncome)
            return inc
        
    }
        
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