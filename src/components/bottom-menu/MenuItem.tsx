import { FC } from 'react'
import { Pressable } from 'react-native'

import type { IMenuItem, TypeNavigate } from './menu.interface'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable onPress={() => nav(item.path)}>
			
		</Pressable>
	)
}

export default MenuItem