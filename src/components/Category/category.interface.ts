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
     * Иконка
     */
    iconName: any
}

export interface ISubCategoryItem extends ICategory {
    categoryId: number
}