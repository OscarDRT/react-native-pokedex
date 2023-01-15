import React, { FC } from 'react'
import { Theme } from '@root/theme'
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle'
import { Alert, Pressable, TouchableOpacity } from 'react-native'
import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { scale } from '@root/utils/commons'

type props = VariantProps<Theme, 'buttonVariants'> &
  React.ComponentProps<typeof Box>

const ButtonContainer = createRestyleComponent<props, Theme>(
  [createVariant({ themeKey: 'buttonVariants' })],
  Box
)

interface ButtonProps extends React.ComponentProps<typeof ButtonContainer> {
  onPress: () => void
  disabled?: boolean
  title: string
}

export const Button: FC<ButtonProps> = ({
  variant,
  onPress,
  disabled,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={disabled}>
      <ButtonContainer
        variant={variant}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={scale(8)}
        {...props}
      >
        <Text variant={'subtitle'} color={'primaryText'} fontWeight={'600'}>
          {title}
        </Text>
      </ButtonContainer>
    </TouchableOpacity>
  )
}
