
import React, { useEffect, useState } from "react"
import {View } from "react-native"
import appTheme from "../constants/themas"
import CategoryList from "../components/Category/CategoryList"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import { Text } from "react-native"
import Product from "../components/Product/Product"
import { IProduct } from "../components/Product/product.interface"

import { CategoryService } from "../services/category.service"
import { CategoryModel } from "../services/api/models/CategoryModel"


const Home = () => {
    const { navigate } = useTypedNavigation();
    const [categories, setCategories] = useState<CategoryModel[] | undefined>(undefined);
    const [childrens, setChildrens] = useState<CategoryModel[] | undefined>(undefined);
    const [productList, setProductList] = useState<IProduct[] | null>(null);
    const [categorySelected, setCategorySelected] = useState<CategoryModel | undefined>(undefined);
    const [childrenSelected, setChildrenSelected] = useState<CategoryModel | undefined>(undefined);

    function onSelectedCategory(selected: CategoryModel) {
        
        setCategorySelected(selected);

        CategoryService.getChildren(selected.id).then((data) => {
                
            setChildrens(data);

            data.forEach(element => {
                console.log(element); 
            });
            
            if(data && data.length > 0) {
                onSelectedChildren(data[0]);
            }
        })
    }

    function onSelectedChildren(selected: CategoryModel) {
        setChildrenSelected(selected);
        //setProductList(selected)
    }

    function GetPath() {
        let path = "";
        
        if(!categorySelected) {
            return "";
        }

        path += categorySelected.name;

        if(childrenSelected) {
            path += " / " + childrenSelected.name;
        }

        return path;
    }

    useEffect(() => {

        CategoryService.getVersion().then((version)=>{
            console.log(version);    
        });

        CategoryService.getRoot().then((data) => {
                
            setCategories(data);

            data.forEach(element => {
                console.log(element); 
            });
            
            if(data && data.length > 0) {
                onSelectedCategory(data[0]);
            }
        })

        }, []);

    return (<>
            <View style={{ 
                paddingLeft: appTheme.SIZES.padding, 
                paddingRight: appTheme.SIZES.padding  
            }}>
             {/* {Header()} */}

             <CategoryList key={1} caption="Категории" items={categories} onSelectedHandler={onSelectedCategory}></CategoryList>
             <CategoryList key={2} caption="Подкатегории" items={childrens} onSelectedHandler={onSelectedChildren}></CategoryList> 
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


export default Home;