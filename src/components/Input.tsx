import theme from '@root/theme'
import { scale } from '@root/utils/commons'
import React, { FC } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text'
import { Box } from './Box'

export const Input: FC<TextInputProps> = ({ ...props }) => {
  return <TextInput style={styles.input} {...props} />
}

interface InputMaskProps extends TextInputMaskProps {
  value: string
  onChangeText: (text: string) => void
  style?: any
}

export const InputMask: React.FC<InputMaskProps> = ({
  value,
  onChangeText,
  type = 'datetime',
  ...props
}) => {
  return (
    <TextInputMask
      style={styles.input}
      type={type}
      options={{
        ...props.options,
      }}
      value={value}
      onChangeText={text => {
        onChangeText(text)
      }}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.primaryForeground,
    borderRadius: scale(8),
    padding: scale(20),
    color: theme.colors.secondaryText,
    fontSize: scale(18),
    fontWeight: '700',
  },
})
