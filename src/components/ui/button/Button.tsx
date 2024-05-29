import React, { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'


export interface IButton extends PressableProps {
	className?: string
	//icon?: TypeFeatherIconNames
}

const Button: FC<PropsWithChildren<IButton>> = ({className,	children, ...rest}) => {
	return (
		<Pressable {...rest}>
				<Text style={styles.text}>
					{children}
				</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
    text: {
        alignItems: 'center',
	    justifyContent: 'center',
        color: 'red'
    }
  });

export default Button