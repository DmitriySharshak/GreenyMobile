import { IProduct } from "./product.interface";
import images from "../../constants/images"
export const productItems: IProduct[] = [
    {
        id: 1,
        name: 'Творог из коровьего молока 10%',
        priceMin: 120,
        priceMax: 150,
        unitOfMeasurement:"кг",
        minCount: 1,
        step:0.5,
        iconName: images.cottageCheese,
    },
    {
        id: 2,
        name: 'Творог из коровьего молока 5%',
        priceMin: 90,
        priceMax: 120,
        unitOfMeasurement:"кг",
        minCount: 1,
        step:0.5,
        iconName: images.cottageCheese,
    },
    {
        id: 3,
        name: 'Творог из коровьего молока 15%',
        priceMin: 90,
        priceMax: 120,
        unitOfMeasurement:"кг",
        minCount: 1,
        step:0.5,
        iconName: images.cottageCheese,      
    }
]