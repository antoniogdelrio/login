import { createContext, Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import useSessionStorage from '../hooks/useSessionStorage'
import { GeneralContext } from './GeneralContext'

interface IUser {
    username: string,
    password: string
}

interface ILoginContext {
    user: IUser,
    setUser: Dispatch<SetStateAction<IUser>>,
    token: string,
    doLogin: () => void
}

interface ILoginContextProps {
    children: JSX.Element
}

export const LoginContext = createContext({} as ILoginContext)

function LoginContextProvider ({ children } : ILoginContextProps) {
    const [user, setUser] = useState<IUser>({} as IUser)
    const [token, setToken] = useSessionStorage('token', '')
    const { setLoading } = useContext(GeneralContext)

    const doLogin = () => {
        setLoading(true)
        setTimeout(() => {            
            setToken('k3k2j323j23dadfj')
            setLoading(false)
        }, 5000);
    }

    return <LoginContext.Provider value={{user, setUser, token, doLogin}}>
        { children }
    </LoginContext.Provider>
}

export default LoginContextProvider