import { FC } from 'react'
import { Alert, Image, Pressable } from 'react-native'

import type { IMenuItem, TypeNavigate } from './menu.interface'
import { View } from 'react-native'
import { useTypedNavigation } from '../../hooks/useTypedNavigation'
import { Text } from 'react-native'
import themas from '../../constants/themas'

interface IMenuItemProps {
	item: IMenuItem
	navigate: TypeNavigate
	currentRoute: string | undefined
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, navigate }) => {
	const isActive = currentRoute === item.path
	
	return (
		<Pressable onPress={() => navigate(item.path)}>
			<View
				style={{
					alignItems: "center",
                	justifyContent: "center",
				}}>
				<Image
				source={isActive ? item.iconNameActive : item.iconName}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35
                }} >
					
				</Image>
				<Text style={{
					color: isActive ? themas.COLORS.primary: themas.COLORS.secondary	

				}}>
            		{item.name}
        		</Text>
			</View>
		</Pressable>
	)
}

export default MenuItem