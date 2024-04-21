import { TypeNavigate } from "../BottomMenu/menu.interface"

export interface IProduct {
    
    /**
     * Идентификатор
     */
    id: number,

    /**
     * Иконка продуктовой карточки
     */
    iconName: any

    /**
     * Название
     */
    name: string

    /**
     * Минимальная цена
     */
    priceMin: number

    /**
     * Максимальная цена
     */
    priceMax: number

    /**
     * Единица измерения
     */
    unitOfMeasurement: string 

    /**
     *  Шаг изменения количества товара при добавлении в корзину
     */
    step: number,

    /**
     * Минимальное количество товара, которое можно заказать
     */
    minCount: number,
}