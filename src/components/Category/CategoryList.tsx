import React, {FC, useState} from "react";
import Item from "../Item";
import HorizontalList from "../HorizontalList";
import { CategoryModel } from "../../services/api/models/CategoryModel";

interface ICategoryProps {
    caption: string
    items: CategoryModel[] | undefined
    onSelectedHandler: (selected: CategoryModel) => void
}

const CategoryList: FC<ICategoryProps> = ({caption, items, onSelectedHandler}) => {
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

    return <HorizontalList 
            snapToInterval={100}
            data={items} 
            // @ts-ignore
            renderItem={renderItem}
            //getItemCount={data=>data.length}
            initialScrollIndex={index} />
}

export default CategoryList 