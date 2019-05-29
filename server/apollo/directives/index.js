import AuthDirective from './auth'
import PrivateDirective from './private'
import PublicDirective from './public'

export default  {
    public: PublicDirective,
    authorized: AuthDirective,
    private: PrivateDirective
}