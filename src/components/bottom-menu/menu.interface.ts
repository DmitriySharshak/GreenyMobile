
import { TypeRootStackParamList } from '../../navigation/navigation.types'

export interface IMenuItem {
    name: string
    iconName: any
    path: keyof TypeRootStackParamList
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void
