import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        expense(id:ID!):Expense! @private
   }
    extend type Mutation{
        addNewExpense(budget:ID!, spender:ID!, category:ID!, summ:Int! , description: String!): Expense! @private
        editExpense(id:ID!, category:ID, summ:Int , description: String): Expense! @private
        deleteExpense(id:ID!): Expense! @private
    }
    type Expense {
        id: ID!
        category: Category!
        summ:Int!
        description:String
        spender:User!
        budget:Budget
        createdAt: String!
        updatedAt:String!
    }
   
  
`