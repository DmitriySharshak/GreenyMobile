import React, {FC, useEffect, useState} from "react";
import Item from "./Item";
import { CategoryModel } from "../../Models/Category/CategoryModel";
import HorizontalList from "../HorizontalList";
import {ScrollView, StyleSheet, Text, View } from "react-native"
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

    const numberOfItems = items?.length ?? 1;
    const itemsPerInterval = 4;

    const [totalIntervals, setTotalIntervals] = useState(0);

    const adjustContent = w => {
        //setWidth(w);
        let t = Math.ceil(numberOfItems / itemsPerInterval);
        console.log(t)
        setTotalIntervals(t);
      };

    return <View style={styles.category}>
                <View style={styles.caption}>
                    <Text style={styles.caption__text}>{caption}</Text>
                </View>

                {
                    items?.length==0 ?
                    <View style={styles.caption}>
                        <Text style={styles.caption__text}>В данной категории нет товаров</Text>
                    </View>

                    :
                    <View style={styles.body}>
                        <ScrollView 
                         horizontal={true}
                         showsHorizontalScrollIndicator={false}
                         pagingEnabled={true}
                         contentContainerStyle={[ {width: `${45 * totalIntervals}%`, justifyContent: 'space-around'}]}
                         onContentSizeChange={(w, h) => adjustContent(w)}
                         scrollEventThrottle={200}
                         alwaysBounceHorizontal={true}
                         bounces={true}
                         decelerationRate="fast"
                         >
                            {items?.map((q, i)=> <Item {...q} selected={selected?.id === q.id} onSelected={onSelect} key={caption+"_"+i.toString()}  />)}
                        </ScrollView>
                        {/* <HorizontalList 
                            snapToInterval={100}
                            data={items} 
                            // @ts-ignore
                            renderItem={renderItem}
                            //getItemCount={data=>data.length}
                            initialScrollIndex={index} /> */}
                    </View>
                }
        </View>
}

const styles = StyleSheet.create({
    category: {
        display:"flex"
    },
    caption:{
        alignItems:"center",     
    },
    caption__text:{
        color:"black"
    },
    body:{
        padding:5,
        backgroundColor: "#D3D4D3",
        borderRadius: appTheme.SIZES.radius,
        alignItems: "flex-start",
    },

  })


export default List 