import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        income(id:ID!):Income! @private
   }
    extend type Mutation{
        addNewIncome(budget:ID!, recipient:ID!, category:ID!, summ:Int! , description: String!): Income! @private
        editIncome(id:ID!, category:ID, summ:Int , description: String): Income! @private
        deleteIncome(id:ID!): Income! @private
    }
    type Income {
        id: ID!
        category: Category!
        summ:Int!
        description:String
        recipient:User!
        budget:Budget
        createdAt: String!
        updatedAt:String!
    }
   
  
`