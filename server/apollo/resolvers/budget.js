
import { User, Expense, Income, Budget } from "../../models"
import { ForbiddenError } from "apollo-server-core"


export default {
    Query:{
        budget: (root, args, {req}, info)=>{
            return Budget.findById(args.id)
        }
    },
    Mutation:{
        createNewBudget: (root, args, {req}, info)=>{
           
            return Budget.findOne({family:[req.session.userId]}).then(async budget =>{
                if(budget){
                    throw new ForbiddenError(`Budget for this user is already created`)
                }
                else{
                    const newBudget = {
                        family:[req.session.userId],
                        expenses:[],
                        income:[]
                    }
                    const bg = await Budget.create(newBudget)
                    return bg
                }

           })
        }
    },
    Budget:{
        family:(root, args, {req,res}, info)=>{
            const family = User.find({budget:root._id})            
            return family
        },
        expenses:(root, args, {req,res}, info)=>{
            const expenses = Expense.find({budget:root._id})            
            return expenses
        },
        income:(root, args, {req,res}, info)=>{
            const income = Income.find({budget:root._id})            
            return income
        },
    }
}