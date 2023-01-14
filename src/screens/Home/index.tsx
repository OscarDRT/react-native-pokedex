import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'

export const Home = () => {
  return (
    <MainContainer>
      <HeaderBack title="Home" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Home Screen</Text>
      </Box>
    </MainContainer>
  )
}
