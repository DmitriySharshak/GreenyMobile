import images from "../../constants/images";
import { ICategoryItem } from "./category.interface";

export const categoryItems:Array<ICategoryItem> = [
    {   id: 1, 
        name:'Мясо', 
        iconName: images.meat
    },
    {   id: 2, 
        name:'Молоко +', 
        iconName: images.cheese
    },
    {   id: 3, 
        name:'Птица', 
        iconName: images.chicken
    },
    {   id: 4, 
        name:'Яйцо', 
        iconName: images.eggs
    },
    { 
        id: 5, 
        name:'Овощи', 
        iconName: images.vegetables
    },  
    {   id: 6, 
        name:'Фрукты', 
        iconName: images.fruits
    },
    {   id: 7, 
        name:'Ягоды', 
        iconName: images.berries
    },
    {   id: 8, 
        name:'Грибы', 
        iconName: images.mushroom
    },
    {   id: 9, 
        name:'Мед +', 
        iconName: images.honey
    },
    {   id: 10, 
        name:'Масла', 
        iconName: images.oil
    },
]; 