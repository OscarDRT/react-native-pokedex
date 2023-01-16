import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { AddPokemonNavigation } from '@components/Buttons/AddPokemonNavigation'
import { useSelector } from 'react-redux'
import { countSelector } from '@root/store/Pokedex/selector'
import { scale } from '@root/utils/commons'

const Counter = () => {
  const numberOfPokemon = useSelector(countSelector)

  return (
    <MainContainer>
      <HeaderBack title="Counter" showBackButton={false}>
        <AddPokemonNavigation />
      </HeaderBack>
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text variant={'title'} color={'secondaryText'}>{`You have`}</Text>
        <Text fontSize={scale(100)} color={'secondaryText'}>
          {numberOfPokemon}
        </Text>
        <Text variant={'subtitle'} color={'secondaryText'}>
          {numberOfPokemon === 1 ? 'pokemon' : 'pokemons'}
        </Text>
      </Box>
    </MainContainer>
  )
}

export default Counter
