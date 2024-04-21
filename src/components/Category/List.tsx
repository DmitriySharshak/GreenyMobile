import React, {FC, useEffect, useState} from "react";
import Item from "./Item";
import { CategoryModel } from "../../Models/Category/CategoryModel";
import HorizontalList from "../HorizontalList";
import {Text, View } from "react-native"
import appTheme from "../../constants/themas";

interface ICategoryProps {
    caption: string
    items: CategoryModel[] | undefined
    onSelectedHandler: (selected: CategoryModel) => void
}

const List: FC<ICategoryProps> = ({caption, items, onSelectedHandler}) => {
    const [selected, setSelected] = useState<CategoryModel | null>(null);
    const [index, setIndex] = useState<number>(0);

    function onSelect(id: number) {
    
        let item = items?.find((item)=> item.id == id);
        
        if(item) {
            
            onSelectedHandler(item);
            setSelected(item);
            
            let index = items?.indexOf(item);

            if(index) 
                setIndex(index);
        }
    }

    //97 - надо подбирать цифры
    // const getItemLayout = (data:any, index:number) => ({
    //     length: 35,
    //     offset: 35 * index,
    //     index,
    //   })

    const renderItem = ({item}: {item: CategoryModel}) => {
        return <Item {...item} selected={selected?.id === item.id} onSelected={onSelect}  />
    }

    return <View>
            <Text style={{color:"black"}}>{caption}</Text> 
            <View 
            style={{
            padding:4,
            backgroundColor: appTheme.COLORS.lightGray4,
            borderRadius: appTheme.SIZES.radius,
            alignItems: "flex-start",
            justifyContent: "center",
            }}>
                {items?.length==0 ?
                <View>
                    <Text>В данной категории нет товаров </Text>
                </View>
                :
                <HorizontalList style={{margin:0}}
                    snapToInterval={100}
                    data={items} 
                    // @ts-ignore
                    renderItem={renderItem}
                    //getItemCount={data=>data.length}
                    initialScrollIndex={index} />
                }

                
            </View>
            
            
        </View>
        
            
    
}

export default List 