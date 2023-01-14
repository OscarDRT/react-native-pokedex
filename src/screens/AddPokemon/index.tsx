import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'

export const AddPokemon = () => {
  return (
    <MainContainer>
      <HeaderBack title="Agregrar Pokémon" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>AddPokemon Screen</Text>
      </Box>
    </MainContainer>
  )
}
