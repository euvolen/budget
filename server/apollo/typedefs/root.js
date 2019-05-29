import {gql} from 'apollo-server-express'

const root = gql`
    directive @public on FIELD_DEFINITION
    directive @private on FIELD_DEFINITION
    directive @authorized on FIELD_DEFINITION
    type Query{
        _:String
    }
    type Mutation {
        _:String
    }
    type Subscription{
        _:String
    }
`
export default root