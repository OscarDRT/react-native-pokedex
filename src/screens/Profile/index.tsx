import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { AddPokemonNavigation } from '@components/Buttons/AddPokemonNavigation'

export const Profile = () => {
  return (
    <MainContainer>
      <HeaderBack title="Profile" showBackButton={false}>
        <AddPokemonNavigation />
      </HeaderBack>
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
