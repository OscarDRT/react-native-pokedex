import React from 'react'
import { Theme } from '@root/theme'
import { createBox } from '@shopify/restyle'
import { Animated } from 'react-native'

export const Box = createBox<Theme>()

export const AnimatedBox = Animated.createAnimatedComponent(Box)

export type BoxProps = React.ComponentProps<typeof Box>
