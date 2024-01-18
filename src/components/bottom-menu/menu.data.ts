import icons from "../../constants/icons";
import images from "../../constants/images";
import { IMenuItem } from "./menu.interface";

export const menuItems: IMenuItem[] = [
	{
		name: "Главная",
		iconName: images.homeGrey,
		iconNameActive: images.homeGreen,
		path: 'Home'
	},
	{
		name: "Корзина",
		iconName: images.cartGrey,
		iconNameActive: images.cartGreen,
		path: 'Cart'
	},
	{
		name: "Совместно",
		iconName: images.networkGrey,
		iconNameActive: images.networkGreen,
		path: 'TeamWork'
	},
	{
		name: "Вырастить",
		iconName: images.gardenGrey,
		iconNameActive: images.gardenGreen,
		path: 'Soil'
	},
	{
		name: "Профиль",
		iconName: images.profileGrey,
		iconNameActive: images.profileGreen,
		path: 'Profile'
	}
]