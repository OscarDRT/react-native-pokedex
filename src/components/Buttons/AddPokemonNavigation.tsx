import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { scale } from '@root/utils/commons'
import React, { useCallback } from 'react'
import { Pressable } from 'react-native'

export const AddPokemonNavigation = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'root'>>()

  const onNavigate = useCallback(() => {
    navigation.navigate('AddPokemon')
  }, [])

  return (
    <Pressable onPress={onNavigate}>
      <Box
        backgroundColor={'primary'}
        px={'m'}
        py={'s'}
        borderRadius={scale(24)}
      >
        <Text variant={'body'} color={'primaryText'} fontWeight={'bold'}>
          Add Pokémon
        </Text>
      </Box>
    </Pressable>
  )
}
