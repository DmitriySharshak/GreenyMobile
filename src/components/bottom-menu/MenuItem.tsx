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
			<Icon.Button
				name={item.iconName}
				size={24}
				//color={isActive ? '#BF3335' : '#626262'}
			/>
		</Pressable>
	)
}

export default MenuItem