import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'

export const Profile = () => {
  return (
    <MainContainer>
      <HeaderBack title="Inbox" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Profile Screen</Text>
      </Box>
    </MainContainer>
  )
}
