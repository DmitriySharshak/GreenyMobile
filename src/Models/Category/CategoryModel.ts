export interface CategoryModel {
    id: number,
    descendants: CategoryModel[],
    name: string,
    imageBase64: string,
}