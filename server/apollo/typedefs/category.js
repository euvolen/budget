import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        category(id:ID!):Category! @private
   }
    extend type Mutation{
        addNewCategory(budget:ID!, name:String! , description: String!): Category! @private
        editCategory(id:ID!, name:String! , description: String!): Category! @private
        deleteCategory(id:ID!): Category! @private
    }
    type Category {
        id: ID!
        name: String!
        description:String
        budget:Budget!
        createdAt: String!
        updatedAt:String!
    }
   
  
`