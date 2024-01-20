
import React, { useState } from "react"
import {Alert, View } from "react-native"
import appTheme from "../constants/themas"
import Header from "../components/Header"
import CategoryList from "../components/CategoryList"
import { Button } from "react-native"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import { ICategoryItem, ISubCategoryItem } from "../types/categoryItem.interface"
import images from "../constants/images"
import { Text } from "react-native"
import ProductIcon, { IProductIcon } from "../components/ProductIcon"

const categoryItems:Array<ICategoryItem> = [
    {   id: 1, 
        name:'Мясо', 
        iconName: images.meat,
    },
    {   id: 2, 
        name:'Молоко+', 
        iconName: images.milkCheese
    },
    {   id: 3, 
        name:'Птица+', 
        iconName: images.chicken
    },
    { 
        id: 4, 
        name:'Овощи', 
        iconName: images.vegetables
    },  
    {   id: 5, 
        name:'Фрукты', 
        iconName: images.fruits
    },
    {   id: 6, 
        name:'Ягоды', 
        iconName: images.berries
    },
    {   id: 7, 
        name:'Грибы', 
        iconName: images.mushroom
    },
    {   id: 8, 
        name:'Мед+', 
        iconName: images.honey
    },
    {   id: 9, 
        name:'Масла', 
        iconName: images.oil
    }
]; 

const subCategoryItems: Array<ISubCategoryItem> = [
    // мясо
    {   id: 1, 
        categoryId: 1,
        name:'Говядина', 
        iconName:images.cow,
    },
    {   id: 2, 
        categoryId: 1,
        name:'Свинина', 
        iconName:images.pig,
    },
    {   id: 3, 
        categoryId: 1,
        name:'Баранина', 
        iconName:images.sheep,
    },
    {   id: 4, 
        categoryId: 1,
        name:'Телятина', 
        iconName:images.youngCow,
    },
     //Молоко+
    {   id: 5, 
        categoryId: 2, 
        name:'Молоко', 
        iconName:images.milk,
    },
    {   id: 6, 
        categoryId: 2,
        name:'Сыр', 
        iconName:images.cheese,
    },
    {   id: 7, 
        categoryId: 2,
        name:'Творог', 
        iconName:images.cottageCheese,
    },
    {   id: 8, 
        categoryId: 2,
        name:'Масло', 
        iconName:images.spread,
    },
    {   id: 9, 
        categoryId: 2,
        name:'Сметана', 
        iconName:images.soupCream,
    },
    // Птица+
    {   id: 10, 
        categoryId: 3,
        name:'Курица', 
        iconName:images.subChicken,
    },
    {   id: 11, 
        categoryId: 3,
        name:'Цыпленок', 
        iconName:images.chick,
    },
    {   id: 12, 
        categoryId: 3,
        name:'Гусь', 
        iconName:images.goose,
    },
    {   id: 13, 
        categoryId: 3,
        name:'Утка', 
        iconName:images.duck,
    },
    {   id: 14, 
        categoryId: 3,
        name:'Индейка', 
        iconName:images.turkey,
    },
    {   id: 15, 
        categoryId: 3,
        name:'Яйцо', 
        iconName:images.eggs,
    },
    // Овощи
    {   id: 16, 
        categoryId: 4,
        name:'Картофель', 
        iconName:images.potato,
    },
    {   id: 17, 
        categoryId: 4,
        name:'Помидоры', 
        iconName:images.tomato,
    },
    {   id: 18, 
        categoryId: 4,
        name:'Огурцы', 
        iconName:images.cucumber,
    },
    {   id: 19, 
        categoryId: 4,
        name:'Капуста', 
        iconName:images.cabbage,
    },
    {   id: 20, 
        categoryId: 4,
        name:'Морковь', 
        iconName:images.carrot,
    },
    {   id: 21, 
        categoryId: 4,
        name:'Картофель', 
        iconName:images.potato,
    },
    {   id: 22, 
        categoryId: 4,
        name:'Лук', 
        iconName:images.onion,
    },
    {   id: 23, 
        categoryId: 4,
        name:'Чеснок', 
        iconName:images.garlic,
    },
    {   id: 24, 
        categoryId: 4,
        name:'Свекла', 
        iconName:images.beetroot,
    },
    {   id: 25, 
        categoryId: 4,
        name:'Зелень', 
        iconName:images.greens,
    },
    // Фрукты
    {   id: 26, 
        categoryId: 5,
        name:'Яблоки', 
        iconName:images.apple,
    },
    {   id: 27, 
        categoryId: 5,
        name:'Слива', 
        iconName:images.plum,
    },
    {   id: 28, 
        categoryId: 5,
        name:'Вишня', 
        iconName:images.cherries,
    },
    {   id: 29, 
        categoryId: 5,
        name:'Груша', 
        iconName:images.pear,
    },
    // Ягоды
    {   id: 30, 
        categoryId: 6,
        name:'Земляника', 
        iconName:images.strawberry_2,
    },
    {   id: 31, 
        categoryId: 6,
        name:'Черника', 
        iconName:images.blueberry,
    },
    {   id: 32, 
        categoryId: 6,
        name:'Брусника', 
        iconName:images.cowberry,
    },
    {   id: 33, 
        categoryId: 6,
        name:'Клюква', 
        iconName:images.cranberry,
    },
    {   id: 34, 
        categoryId: 6,
        name:'Клубника', 
        iconName:images.strawberry_1,
    },
    {   id: 35, 
        categoryId: 6,
        name:'Смородина', 
        iconName:images.currant,
    },
    {   id: 36, 
        categoryId: 6,
        name:'Малина', 
        iconName:images.raspberries,
    },
    {   id: 37, 
        categoryId: 6,
        name:'Крыжовник', 
        iconName:images.gooseberry,
    },
    // Грибы
    {   id: 38, 
        categoryId: 7,
        name:'Белые', 
        iconName:images.mushroomWhite,
    },
    {   id: 39, 
        categoryId: 7,
        name:'Лисички', 
        iconName:images.chanterelle,
    },
    // Мед+
    {   id: 40, 
        categoryId: 8,
        name:'Мед', 
        iconName:images.subHoney,
    },
    {   id: 41, 
        categoryId: 8,
        name:'Соты', 
        iconName:images.apitherapy,
    },
    {   id: 42, 
        categoryId: 8,
        name:'Перга', 
        iconName:images.honeycomb,
    },
    {   id: 43, 
        categoryId: 8,
        name:'Воск', 
        iconName:images.wax,
    },
]

const HomeScreen = () => {
    const subCategoriesCache = subCategoryItems.map(q=>q);  
    const { navigate } = useTypedNavigation();
    const [categories, setCategories] = useState(categoryItems);
    const [subCategories, setSubCategories] = useState(subCategoryItems);
    const [productList, setProductList] = useState<IProductIcon[] | null>(null);

    function onSelectedCategory(id: number) {
        let items = subCategoriesCache.filter((item)=> item.categoryId == id);
        setSubCategories(items);
    }

    function onSelectedSubCategory(id: number) {
        const item = subCategories.find((item)=> item.id == id)   
        if(item) {
            const modal: IProductIcon[] = [
                {
                id: 1,
                name: 'Творог из коровьего молока 10%',
                priceMin: 120,
                priceMax: 150,
                unitOfMeasurement:"кг",
                minCount: 1,
                step:0.5,
                iconName: item.iconName,
                navigate: navigate
                },
                {
                    id: 2,
                    name: 'Творог из коровьего молока 5%',
                    priceMin: 90,
                    priceMax: 120,
                    unitOfMeasurement:"кг",
                    minCount: 1,
                    step:0.1,
                    iconName: item.iconName,
                    navigate: navigate
                    },
                    {
                        id: 3,
                        name: 'Творог из коровьего молока 5%',
                        priceMin: 90,
                        priceMax: 120,
                        unitOfMeasurement:"кг",
                        minCount: 1,
                        step:0.1,
                        iconName: item.iconName,
                        navigate: navigate
                        }
        ];
            
            setProductList(modal)
            
        } 
    }

    return (<>
            <View style={{ 
                paddingLeft: appTheme.SIZES.padding, 
                paddingRight: appTheme.SIZES.padding  
            }}>
             {Header()}

             <CategoryList key={1} caption="Категории" items={categories} onSelectedHandler={onSelectedCategory}></CategoryList>
             <CategoryList key={2} caption="Подкатегории" items={subCategories} onSelectedHandler={onSelectedSubCategory}></CategoryList> 
             
             <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent:"flex-start"
             }}>
                {productList?.map(item => (
                    <ProductIcon key={item.id} {...item}/>
                ))}
             </View>
             

             
                
            </View>
            </>
    )
}


export default HomeScreen;