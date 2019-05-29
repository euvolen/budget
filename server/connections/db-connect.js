import mongoose from 'mongoose'
import {DBLINK} from '../configs.js'


//connects to dbs (dev and prod)
export const connect = (dbName)=>{
    switch (dbName) {
        case 'budget':
            return new Promise ((resolve, reject) =>{
                mongoose.connect(DBLINK, {useFindAndModify:false, useNewUrlParser:true}).then(res =>{
                    console.log(`DB ${dbName} is connected successfully`)
                    resolve()
                }).catch(err=> {
                    console.error(err)
                    reject(err)})

            }) 
  
        default:
            console.log(`DB ${dbName} doesn't exist`)
    }
   
}
//disconnects
export const disconnect = ()=> mongoose.disconnect()
   