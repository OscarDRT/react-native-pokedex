import React, { FC } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { capitalize, scale, StackNavigationProps } from '@root/utils/commons'
import { Box } from '@components/Box'
import { useGetPokemonById } from '@root/hooks/pokemons'
import { ActivityIndicator, Alert } from 'react-native'
import { Text } from '@components/Text'
import { SimplePokemon } from '@components/Cards/SimplePokemon'
import { Button } from '@components/Buttons/Button'

export const PokemonDetail: FC<StackNavigationProps<'PokemonDetail'>> = ({
  navigation,
  route,
}) => {
  const { name, url, pokemonId } = route.params

  const { state } = useGetPokemonById({ pokemonId: pokemonId as string })

  const {
    pokemon: { types, moves },
  } = state ?? {}

  return (
    <MainContainer>
      <HeaderBack title={capitalize(name)} />
      <Box flex={1}>
        {!state.isLoading ? (
          <Box flex={1}>
            <Box flex={1}>
              <Box flex={0.3} justifyContent={'center'} alignItems={'center'}>
                <SimplePokemon name={name} url={url} disabled />
              </Box>

              <Box
                flex={0.7}
                margin={'s'}
                borderColor={'primary'}
                backgroundColor={'primaryForeground'}
                borderWidth={scale(0.15)}
                borderRadius={scale(18)}
                padding={'l'}
              >
                <Box flex={0.5} alignItems={'center'}>
                  <Text variant={'subtitle'}>Types</Text>
                  <Box
                    flexDirection={'row'}
                    justifyContent={'center'}
                    flexWrap={'wrap'}
                  >
                    {types?.map(type => {
                      return (
                        <Box
                          key={type.slot}
                          margin={'s'}
                          paddingVertical={'xs'}
                          paddingHorizontal={'m'}
                          backgroundColor={'primary'}
                          borderRadius={scale(8)}
                        >
                          <Text
                            variant={'subtitle'}
                            color={'primaryText'}
                            fontWeight={'bold'}
                          >
                            {capitalize(type.type.name)}
                          </Text>
                        </Box>
                      )
                    })}
                  </Box>
                </Box>

                <Box flex={0.5} justifyContent={'center'} alignItems={'center'}>
                  <Text variant={'subtitle'}>Moves</Text>
                  <Box
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                  >
                    {moves?.slice(-5)?.map(move => {
                      return (
                        <Box
                          key={move.move.name}
                          margin={'s'}
                          paddingVertical={'xs'}
                          paddingHorizontal={'m'}
                          backgroundColor={'primaryBackground'}
                          borderRadius={scale(8)}
                        >
                          <Text variant={'subtitle'} fontWeight={'bold'}>
                            {capitalize(move.move.name)}
                          </Text>
                        </Box>
                      )
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box padding={'l'} justifyContent={'flex-end'}>
              <Button
                title={'Add'}
                variant={'primary'}
                onPress={() => Alert.alert('Hola')}
              />
            </Box>
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
