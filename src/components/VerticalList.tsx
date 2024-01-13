import { memo } from 'react'
import { FlatList, FlatListProps, Platform } from 'react-native'

const VerticalList = <T extends any>(props: FlatListProps<T>) => {
	return (
		<FlatList
            horizontal = {false}
            numColumns={4}
			renderToHardwareTextureAndroid
			showsHorizontalScrollIndicator={false}
			scrollEventThrottle={16}
			decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
			{...props}
		/>
	)
}

export default memo(VerticalList)