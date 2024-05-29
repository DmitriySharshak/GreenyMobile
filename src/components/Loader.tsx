import { FC } from 'react'
import { ActivityIndicator } from 'react-native'
import { COLORS } from '../constants'


const Loader: FC = () => {
	return <ActivityIndicator size='large' color={COLORS.primary} />
}

export default Loader
