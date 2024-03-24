export interface ICategory {
    /**
     * Идентификатор
     */
    id: number

    /**
     * Идентификатор родителя
     */
    parentId?: number

    /**
     * Наименование
     */
    name: string

    /**
     * Изображение
     */
    image: any
}
