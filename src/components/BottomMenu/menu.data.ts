import icons from "../../constants/icons";

import { IMenuItem } from "./menu.interface";

export const menuItems: IMenuItem[] = [
	{
		name: "Совместно",
		iconName: icons.networkGrey,
		iconNameActive: icons.networkGreen,
		path: 'TeamWork'
	},
	{
		name: "Вырастить",
		iconName: icons.gardenGrey,
		iconNameActive: icons.gardenGreen,
		path: 'Soil'
	},
	{
		name: "Корзина",
		iconName: icons.cartGrey,
		iconNameActive: icons.cartGreen,
		path: 'Cart'
	},
	{
		name: "Профиль",
		iconName: icons.profileGrey,
		iconNameActive: icons.profileGreen,
		path: 'Profile'
	}
]