import { Box } from '@components/Box'
import { Button } from '@components/Buttons/Button'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { Text } from '@components/Text'
import { usePokemonState } from '@root/hooks/pokemons'
import { capitalize, getSprite, scale } from '@root/utils/commons'
import React, { FC } from 'react'

export const PokemonCard: FC<{
  pokemon: Pokemon
  height?: number
  onShow: (pokemonId: string, name: string) => void
  onRemove: (pokemonId: string) => void
}> = ({ pokemon, height = 100, onRemove, onShow }) => {
  return (
    <Box
      height={height}
      backgroundColor={'primaryForeground'}
      margin={'m'}
      borderRadius={scale(8)}
      overflow={'hidden'}
    >
      <Box
        flex={0.2}
        backgroundColor={'primary'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text variant={'title'} color={'secondaryText'}>
          {capitalize(pokemon.name)}
        </Text>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} flexDirection={'row'}>
          <Box flex={0.4}>
            <Box flex={1}>
              <Box flex={0.7}>
                <ProgressiveImage source={{ uri: getSprite(pokemon.name) }} />
              </Box>
              <Box flex={0.3} padding={'s'} justifyContent={'flex-end'}>
                <Box
                  alignItems={'center'}
                  margin={'m'}
                  padding={'xs'}
                  backgroundColor={'primary'}
                  opacity={0.9}
                  borderRadius={scale(8)}
                >
                  <Text
                    variant={'body'}
                    color={'secondaryText'}
                    fontWeight={'bold'}
                  >
                    {capitalize(pokemon?.types?.[0]?.type?.name)}
                  </Text>
                </Box>

                <Button
                  title={'Show'}
                  variant={'primary'}
                  style={{ height: scale(34) }}
                  onPress={() => onShow(pokemon.id.toString(), pokemon.name)}
                />
              </Box>
            </Box>
          </Box>
          <Box flex={0.6}>
            <Box flex={1}>
              <Box flex={0.7} justifyContent={'center'} alignItems={'center'}>
                <Text variant={'subtitle'} fontWeight={'700'}>
                  Moves
                </Text>
                {pokemon?.moves
                  ?.slice(0, 1)
                  .concat(pokemon?.moves?.slice(-1))
                  .map((item, idx) => {
                    return (
                      <Text
                        key={`${item.move.name}-${idx}`}
                        variant={'body'}
                        color={'secondaryText'}
                      >{`${idx % 2 === 0 ? 'First' : 'Last'}: ${capitalize(
                        item.move.name
                      )}`}</Text>
                    )
                  })}
              </Box>
              <Box flex={0.3} padding={'s'} justifyContent={'flex-end'}>
                <Button
                  title={'Remove'}
                  variant={'secondary'}
                  style={{ height: scale(34) }}
                  onPress={() => onRemove(pokemon.id.toString())}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export const ItemPokemonCard: FC<{
  id: string
  height?: number
  onShow: (pokemonId: string, name: string) => void
  onRemove: (pokemonId: string) => void
}> = ({ id, height, onRemove, onShow }) => {
  const pokemon = usePokemonState(id)
  return (
    <PokemonCard
      pokemon={pokemon}
      height={height}
      onShow={onShow}
      onRemove={onRemove}
    />
  )
}
