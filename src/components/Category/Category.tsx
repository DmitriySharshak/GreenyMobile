
import React, { useEffect, useState } from "react"
import {View } from "react-native"
import { useTypedNavigation } from "../../hooks/useTypedNavigation";
import appTheme from "../../constants/themas";

import { CategoryService } from "../../services/category.service";
import { CategoryModel } from "../../Models/Category/CategoryModel";
import List from "./List";



const Category = () => {
    const { navigate } = useTypedNavigation();
    const [categories, setCategories] = useState<CategoryModel[] | undefined>(undefined);
    const [childrens, setChildrens] = useState<CategoryModel[] | undefined>(undefined);
    //const [productList, setProductList] = useState<IProduct[] | null>(null);
    const [categorySelected, setCategorySelected] = useState<CategoryModel | null>(null);
    const [childrenSelected, setChildrenSelected] = useState<CategoryModel | null>(null);

    function onSelectedCategory(selected: CategoryModel) {
        
        setCategorySelected(selected);

        if(selected.descendants) {
            setChildrens(selected.descendants);
            onSelectedChildren(selected.descendants[0]);
        }else{
            setChildrens([]);
            onSelectedChildren(null);
        }
        
    }

    function onSelectedChildren(selected: CategoryModel | null) {
        setChildrenSelected(selected);
        //setProductList(selected)
    }

    useEffect(() => {

        CategoryService.getList().then((data) => {

            setCategories(data?.list);
            
            if(data?.list?.length > 0) {
                onSelectedCategory(data.list[0]);
            }
        })

        }, []);

    return (<>
            <View style={{ 
                paddingLeft: appTheme.SIZES.padding, 
                paddingRight: appTheme.SIZES.padding  
            }}>

             <List key={1} caption="Категории" items={categories} onSelectedHandler={onSelectedCategory} selected={categorySelected}></List>
             <List key={2} caption="Подкатегории" items={childrens} onSelectedHandler={onSelectedChildren} selected={childrenSelected}></List>
             {/* <Text style={{fontWeight:"bold", fontSize:12}}>{GetPath()}</Text> */}
             {/* <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent:"flex-start"
             }}>
                {productList?.map(item => (
                    <Product key={item.id} {...item}/>
                ))}
             </View> */}
            </View>
            </>
    )
}


export default Category;