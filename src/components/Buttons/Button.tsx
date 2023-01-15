import React, { FC } from 'react'
import theme, { Theme } from '@root/theme'
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle'
import { Alert, Pressable, TouchableOpacity } from 'react-native'
import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { scale } from '@root/utils/commons'

const colorText: {
  [key in keyof typeof theme.buttonVariants]: keyof typeof theme.colors
} = {
  primary: 'primaryText',
  disabled: 'secondaryText',
}

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
  let textColor: keyof typeof theme.colors = 'primaryText'

  if (typeof variant !== 'object' && variant) {
    textColor = colorText[disabled ? 'disabled' : variant]
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={disabled}>
      <ButtonContainer
        variant={disabled ? 'disabled' : variant}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={scale(8)}
        {...props}
      >
        <Text variant={'subtitle'} color={textColor} fontWeight={'600'}>
          {title}
        </Text>
      </ButtonContainer>
    </TouchableOpacity>
  )
}
