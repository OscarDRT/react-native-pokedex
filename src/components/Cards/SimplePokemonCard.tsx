import { Box } from '@components/Box'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { Text } from '@components/Text'
import { getSprite, scale, SIMPLE_CARD_WIDTH } from '@root/utils/commons'
import React, { FC, useMemo } from 'react'
import { TouchableOpacity } from 'react-native'

interface SimplePokemonProps extends Result {
  onPress?: (url: string, name: string) => void
  disabled?: boolean
}

export const SimplePokemon: FC<SimplePokemonProps> = ({
  name,
  url,
  onPress,
  disabled,
}) => {
  const pokemonImageUrl = useMemo(() => getSprite(name), [name])

  return (
    <TouchableOpacity
      onPress={() => (onPress ? onPress(url, name) : null)}
      disabled={disabled}
    >
      <Box
        width={SIMPLE_CARD_WIDTH}
        height={SIMPLE_CARD_WIDTH}
        backgroundColor={'primaryForeground'}
        borderRadius={scale(18)}
        borderColor={'primaryForeground'}
        borderWidth={1}
        overflow={'hidden'}
      >
        <Box
          height={SIMPLE_CARD_WIDTH / 1.4}
          width={SIMPLE_CARD_WIDTH}
          backgroundColor={'primary'}
          justifyContent={'center'}
          alignContent={'center'}
          borderColor={'primaryBackground'}
          borderWidth={10}
          borderRadius={scale(18)}
        >
          <ProgressiveImage
            style={{ height: '100%', width: '100%' }}
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
    </TouchableOpacity>
  )
}
