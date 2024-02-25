
import React, { useEffect, useState } from "react"
import {Alert, View } from "react-native"
import appTheme from "../constants/themas"
import Header from "../components/Header"
import CategoryList from "../components/Category/CategoryList"
import { Button } from "react-native"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import images from "../constants/images"
import { Text } from "react-native"
import Product from "../components/Product/Product"
import { productItems } from "../components/Product/product.data"
import { IProduct } from "../components/Product/product.interface"
import { categoryLevel0, categoryLevel1 } from "../components/Category/category.data"
import { ICategory } from "../components/Category/category.interface"


const HomeScreen = () => {
    const subCategoriesCache = categoryLevel1.map(q=>q);  
    const { navigate } = useTypedNavigation();
    const [categories, setCategories] = useState<ICategory[]>(categoryLevel0);
    const [subCategories, setSubCategories] = useState(categoryLevel1);
    const [productList, setProductList] = useState<IProduct[] | null>(null);
    const [categorySelected, setCategorySelected] = useState<ICategory|undefined>(undefined);
    const [subCategorySelected, setSubCategorySelected] = useState<ICategory|undefined>(undefined);

    function onSelectedCategory(id: number) {
        const model = categories.find(q=>q.id==id)
        let items = subCategoriesCache.filter((item)=> item.parentId == id);
        setSubCategories(items);

        setCategorySelected(model);
        
        // показать все карточки продуктов 
        setSubCategorySelected(items[0]);
    }

    function onSelectedSubCategory(id: number) {
        const item = subCategories.find((item)=> item.id == id)   
        if(item) {
            setSubCategorySelected(item);
            setProductList(productItems)
        } 
    }

    function GetPath() {
        let path = "";
        
        if(!categorySelected) {
            return "";
        }

        path += categorySelected.name;

        if(subCategorySelected) {
            path += " / " + subCategorySelected.name;
        }

        return path;
    }

    // useEffect(() => {
    //     // CategoryService.getVersion().then((version)=>{
    //     //     console.log(version);    
    //     // });
    //     // CategoryService.getList().then((data) => {
    //     //     data.map(i=>{
    //     //         console.log(i.name);    
    //     //     })
    //     // })
    //   }, []);

    return (<>
            <View style={{ 
                paddingLeft: appTheme.SIZES.padding, 
                paddingRight: appTheme.SIZES.padding  
            }}>
             {Header()}

             <CategoryList key={1} caption="Категории" items={categories} onSelectedHandler={onSelectedCategory}></CategoryList>
             <CategoryList key={2} caption="Подкатегории" items={subCategories} onSelectedHandler={onSelectedSubCategory}></CategoryList> 
             <Text style={{fontWeight:"bold", fontSize:12}}>{GetPath()}</Text>
             <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent:"flex-start"
             }}>
                {productList?.map(item => (
                    <Product key={item.id} {...item}/>
                ))}
             </View>
            </View>
            </>
    )
}


export default HomeScreen;