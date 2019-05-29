import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        budget(id:ID!):Budget! @private
   }
    extend type Mutation{
        createNewBudget: Budget! @private
    }
    type Budget {
        id: ID!
        family: [User!]!
        income:[Income!]!
        expenses:[Expense!]!
        createdAt: String!
        updatedAt:String!
    }
   
  
`