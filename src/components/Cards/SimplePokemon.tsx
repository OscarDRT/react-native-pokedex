import { Box } from '@components/Box'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { Text } from '@components/Text'
import { scale, SIMPLE_CARD_WIDTH } from '@root/utils/commons'
import React, { FC, useMemo } from 'react'

export const SimplePokemon: FC<Result> = ({ name, url }) => {
  const pokemonImageUrl = useMemo(
    () =>
      `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`,
    [name]
  )

  return (
    <Box
      width={SIMPLE_CARD_WIDTH}
      height={SIMPLE_CARD_WIDTH}
      backgroundColor={'primaryForeground'}
      borderRadius={scale(18)}
      overflow={'hidden'}
    >
      <Box
        height={SIMPLE_CARD_WIDTH / 1.5}
        width={SIMPLE_CARD_WIDTH}
        backgroundColor={'primary'}
        justifyContent={'center'}
        alignContent={'center'}
      >
        <ProgressiveImage
          style={{ flex: 1, height: '100%', width: '100%' }}
          source={{ uri: pokemonImageUrl }}
        />
      </Box>
      <Box flex={1} justifyContent={'center'} alignItems={'center'}>
        <Text
          textAlign={'center'}
          textTransform={'capitalize'}
          variant={'body'}
          color={'primary'}
          fontWeight={'bold'}
        >
          {name}
        </Text>
      </Box>
    </Box>
  )
}
