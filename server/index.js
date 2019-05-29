import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import typeDefs from './apollo/typeDefs'
import resolvers from './apollo/resolvers'
import * as database from './connections/db-connect'
import session from './connections/session-connect'
import schemaDirectives from './apollo/directives'
import {APP_PORT,IS_PROD} from './configs'

database.connect().then(()=>{

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
  app.listen({ port: APP_PORT }, () => {
      console.log(`Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`)
  })
  }).catch(err =>{
      console.error(err)
  })