export const {
    PORT = 5000,
    DBLINK = `mongodb://user:passwort@host:port/name`,
    NODE_ENV = 'development',
    S_NAME = 'sid',
    S_SECRET = 'secret',
    S_LT = 1000 * 60 * 60 * 24 * 2
}  = process.env
export const IS_PROD = NODE_ENV === 'production' 