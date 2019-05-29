import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import typeDefs from './apollo/typeDefs'
import resolvers from './apollo/resolvers'
import * as database from './connections/db-connect'
import session from './connections/session-connect'
import schemaDirectives from './apollo/directives'
import {PORT,IS_PROD} from './configs'

database.connect('budget').then(()=>{

    const app = express()
  
    app.disable('x-powered-by')
    app.use(session)
    
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      schemaDirectives,
      playground: IS_PROD ? false: {
          settings:{
              "request.credentials":'include'
          }
      },
      context: ({req, res})=>({req,res})
  })
     
  server.applyMiddleware({ app , cors:false})
  app.listen({ port: PORT }, () => {
      console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  })
  }).catch(err =>{
      console.error(err)
  })