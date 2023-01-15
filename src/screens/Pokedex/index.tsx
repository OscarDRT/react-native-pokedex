import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { AddPokemonNavigation } from '@components/Buttons/AddPokemonNavigation'

const Pokedex = () => {
  return (
    <MainContainer>
      <HeaderBack title="Pokédex" showBackButton={false}>
        <AddPokemonNavigation />
      </HeaderBack>
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Pokedex Screen</Text>
      </Box>
    </MainContainer>
  )
}

export default Pokedex
