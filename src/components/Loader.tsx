import { FC } from 'react'
import { ActivityIndicator } from 'react-native'
import appTheme from '../constants/themas'


const Loader: FC = () => {
	return <ActivityIndicator size='large' color={appTheme.COLORS.primary} />
}

export default Loader
