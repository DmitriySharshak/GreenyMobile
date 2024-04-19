import { ComponentType } from "react"

export type TypeRootStackParamList = {
    /**
     * Страница аутентификации
     */
    Login: undefined,

    /**
     * Страница Регистрации
     */
    Register: undefined,
    
    /**
     * Домашнаяя страница
     */
    Home: undefined,

    /**
     * Корзина 
     */
    Cart: undefined,

    /**
     * Профиль пользователя
     */
    Profile: undefined,

    /**
     * Настройки 
     */
    Settings: undefined,

    /**
     * Страница совместных закупок
     */
    TeamWork: undefined, 

    /**
     * Страница контрактного фермерства
     */
    Soil: undefined,

    /**
     * Страница продукта
     */
    Product: undefined   
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
    Admin: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList
    isAdmin?: boolean,
    component: ComponentType 
}



