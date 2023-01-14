import { Box, BoxProps } from '@components/Box'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

interface MainContainerProps {
  children: React.ReactNode
  edges?: React.ComponentProps<typeof SafeAreaView>['edges']
  margins?: boolean
}

export const MainContainer: React.FC<MainContainerProps & BoxProps> = ({
  children,
  edges = ['top', 'bottom'],
  margins,
  ...props
}) => {
  const insets = useSafeAreaInsets()

  return (
    <Box
      flex={1}
      backgroundColor={'primaryBackground'}
      style={{
        paddingTop: edges.find(item => item === 'top') ? insets.top : 0,
        paddingBottom: edges.find(item => item === 'bottom')
          ? insets.bottom
          : 0,
      }}
      {...props}
    >
      <StatusBar animated />
      <Box flex={1} paddingHorizontal={margins ? 'm' : 'none'} {...props}>
        {children}
      </Box>
    </Box>
  )
}
