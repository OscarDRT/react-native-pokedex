import React, { FC } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { scale, StackNavigationProps } from '@root/utils/commons'
import { Box } from '@components/Box'
import { useGetPokemonById } from '@root/hooks/pokemons'
import theme from '@root/theme'
import { ActivityIndicator } from 'react-native'
import { Text } from '@components/Text'
import { SimplePokemon } from '@components/Cards/SimplePokemon'

const colorPokemon: {
  [key in keyof typeof theme.pokemonVariants]: keyof typeof theme.colors
} = {
  bug: 'bug',
}

export const PokemonDetail: FC<StackNavigationProps<'PokemonDetail'>> = ({
  navigation,
  route,
}) => {
  const { name, url, pokemonId } = route.params

  const { state } = useGetPokemonById({ pokemonId: pokemonId as string })

  const {
    pokemon: { sprites },
  } = state ?? {}

  let color: keyof typeof theme.colors = 'primaryBackground'

  if (state?.pokemon?.types?.[0]?.type?.name) {
    /* @ts-ignore */
    color = colorPokemon[state?.pokemon?.types?.[0]?.type?.name]
  }

  return (
    <MainContainer>
      <HeaderBack title={name.charAt(0).toUpperCase() + name.slice(1)} />
      <Box flex={1}>
        {!state.isLoading ? (
          <Box flex={1}>
            <Box flex={0.5} justifyContent={'center'} alignItems={'center'}>
              <SimplePokemon name={name} url={url} disabled />
            </Box>
            <Box
              margin={'s'}
              borderColor={'primary'}
              backgroundColor={'primaryForeground'}
              borderWidth={scale(0.15)}
              borderRadius={scale(18)}
              flex={0.3}
            ></Box>
            <Box flex={0.2}></Box>
          </Box>
        ) : (
          <Box flex={1} justifyContent={'center'} alignItems={'center'}>
            <ActivityIndicator />
          </Box>
        )}
      </Box>
    </MainContainer>
  )
}
