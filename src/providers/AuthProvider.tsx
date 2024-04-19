import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react"
import type { IUser } from "../types/user.interface";
import { getUser } from '../store/auth.store';

export type TypeUserState = IUser | null;

// Определяем тип контекста с двумя полями
export interface IAuthContext {
    user: TypeUserState, // объект, показывающий, аутентифицирован ли пользователь
    setUser: Dispatch<SetStateAction<TypeUserState>> // функция для изменения значения user
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const [user, setUser] = useState<TypeUserState>(null);

    useEffect(() => { 
        console.log("AuthProvider useEffect");
        let isMounted = true
        const checkAccessToken = async () => {
			try {
				const user = await getUser()
                if (isMounted) setUser(user)
			} catch {
			} finally {
                // прячем картинку
                // TODO: Надо изучить этот вопрос и настроить когда появиться брендированная
				//SplashScreen.hide()
			}
		}

        // Get user from async storage and write to store
        let r = checkAccessToken();

        return () => {
			isMounted = false
		}

    }, [])
    
    return (
         <AuthContext.Provider value={{user, setUser}}>
            {children} 
         </AuthContext.Provider>
    )
}

export default AuthProvider;