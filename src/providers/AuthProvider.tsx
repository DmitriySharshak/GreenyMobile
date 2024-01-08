import SplashScreen from 'react-native-splash-screen'
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react"
import type { IUser } from "../types/user.interface";

export type TypeUserState = IUser | null;

interface IContext {
    user: TypeUserState,
    setUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext({} as IContext);

SplashScreen.hide();

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const [user, setUser] = useState<TypeUserState>(null);

    useEffect(() => { 
        // Get user from async storage and write to store
    }, [])
    
    return (
         <AuthContext.Provider value={{user, setUser}}>
            {children} 
         </AuthContext.Provider>
    )
}

export default AuthProvider;