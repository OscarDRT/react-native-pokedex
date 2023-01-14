import React from 'react'
import { Text } from './Text'
import { Box, BoxProps } from './Box'
import { scale } from '@root/utils/commons'
import { Pressable } from 'react-native'
import { useTheme } from '@root/theme/ThemeProvider'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { CaretLeft } from 'phosphor-react-native'

interface IHeaderProps extends BoxProps {
  children: React.ReactNode
}

export const Header: React.FC<IHeaderProps> = ({ children, ...props }) => {
  return (
    <Box backgroundColor={'primaryBackground'}>
      <Box
        minHeight={scale(50)}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        paddingHorizontal={'m'}
        backgroundColor={'primaryBackground'}
        {...props}
      >
        {children}
      </Box>
    </Box>
  )
}

export const HeaderRight: React.FC<IChildren> = ({ children }) => {
  return (
    <Box
      flex={1}
      flexDirection={'row'}
      justifyContent={'flex-end'}
      alignItems={'center'}
      height={'100%'}
    >
      {children}
    </Box>
  )
}

export const HeaderLeft: React.FC<IChildren> = ({ children }) => {
  return (
    <Box
      flex={1}
      flexDirection={'row'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      height={'100%'}
    >
      {children}
    </Box>
  )
}

interface IHeaderBack extends BoxProps {
  title?: string
  subtitle?: string
  children?: React.ReactNode
  showBackButton?: boolean
}

export const HeaderBack: React.FC<IHeaderBack> = ({
  title,
  subtitle,
  children,
  showBackButton = true,
  ...props
}) => {
  const theme = useTheme()

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'root'>>()

  return (
    <Header {...props}>
      <HeaderLeft>
        {showBackButton && (
          <Pressable
            style={{ marginRight: theme.spacing.m }}
            onPress={() => navigation.canGoBack() && navigation.goBack()}
          >
            <CaretLeft
              weight={'bold'}
              size={scale(24)}
              color={theme.colors.secondaryText}
            />
          </Pressable>
        )}
        <Box justifyContent={'center'}>
          {!!title && (
            <Text variant={'title'} color={'secondaryText'}>
              {title}
            </Text>
          )}
        </Box>
      </HeaderLeft>
      {children}
    </Header>
  )
}
