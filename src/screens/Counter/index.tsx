import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'

export const Counter = () => {
  return (
    <MainContainer>
      <HeaderBack title="Counter" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Counter Screen</Text>
      </Box>
    </MainContainer>
  )
}
