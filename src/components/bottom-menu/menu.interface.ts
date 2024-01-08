
import { TypeRootStackParamList } from '../../navigation/navigation.types'

//export type TypeFeatherIconNames = keyof typeof glyphMap                         

export interface IMenuItem {
    iconName: string
    path: keyof TypeRootStackParamList
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void
