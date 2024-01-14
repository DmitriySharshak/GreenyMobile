export interface ICategoryItem {
    id: number
    name: string
    iconName: any
}

export interface ISubCategoryItem extends ICategoryItem {
    categoryId: number
}