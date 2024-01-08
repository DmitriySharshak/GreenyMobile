import { ComponentType } from "react"

export type TypeRootStackParamList = {
    Auth: undefined,
    Home: undefined,
    Cart: undefined,
    Profile: undefined,
    Settings: undefined,
    TeamWork: undefined, 
    Soil: undefined,   
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
    Admin: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList
    isAdmin?: boolean,
    component: ComponentType 
}



