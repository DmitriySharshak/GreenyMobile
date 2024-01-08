import { FC } from 'react'
import { Image, Pressable } from 'react-native'

import type { IMenuItem, TypeNavigate } from './menu.interface'
import { View } from 'react-native'
import { useTypedNavigation } from '../../hooks/useTypedNavigation'
import appTheme from '../../constants/themas'
import { Text } from 'react-native'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path
	
	return (
		<Pressable onPress={() => nav(item.path)}>
			<View
				style={{
					alignItems: "center",
                	justifyContent: "center",
				}}>
				<Image
				source={item.iconName}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35
                }} >
					
				</Image>
				<Text>
            		{item.name}
        		</Text>
			</View>
		</Pressable>
	)
}

export default MenuItem