import icons from "../../constants/icons";
import { IMenuItem } from "./menu.interface";

export const menuItems: IMenuItem[] = [
	{
		name: "Главная",
		iconName: icons.house,
		path: 'Home'
	},
	{
		name: "Корзина",
		iconName: icons.shopingCart,
		path: 'Cart'
	},
	{
		name: "Совместно",
		iconName: icons.teamwork,
		path: 'TeamWork'
	},
	{
		name: "Вырастить",
		iconName: icons.soil,
		path: 'Soil'
	},
	{
		name: "Профиль",
		iconName: icons.profile,
		path: 'Profile'
	}
]