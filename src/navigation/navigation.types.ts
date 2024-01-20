import { ComponentType } from "react"

export type TypeRootStackParamList = {
    /**
     * Страница аутентификации
     */
    AuthScreen: undefined,
    
    /**
     * Домашнаяя страница
     */
    HomeScreen: undefined,

    /**
     * Корзина 
     */
    CartScreen: undefined,

    /**
     * Профиль пользователя
     */
    ProfileScreen: undefined,

    /**
     * Настройки 
     */
    SettingsScreen: undefined,

    /**
     * Страница совместных закупок
     */
    TeamWorkScreen: undefined, 

    /**
     * Страница контрактного фермерства
     */
    SoilScreen: undefined,

    /**
     * Страница продукта
     */
    ProductScreen: undefined   
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
    Admin: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList
    isAdmin?: boolean,
    component: ComponentType 
}



