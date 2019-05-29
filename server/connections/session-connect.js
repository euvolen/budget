import session from 'express-session'
import connectMongo from 'connect-mongo'
import { DBLINK, S_LT,S_NAME, S_SECRET , IS_PROD} from '../configs'

const MongoStore = connectMongo(session)

const store = new MongoStore({
    url:DBLINK
})

const newSession = session({
    store,
    name:S_NAME,
    secret: S_SECRET,
    resave:false,
    rolling:false,
    saveUninitialized:false,
    cookie:{
        maxAge: parseInt(S_LT),
        sameSite:true,
        secure:IS_PROD
    }
})

export default newSession