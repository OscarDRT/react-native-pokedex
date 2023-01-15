import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { AnimatedBox, Box } from '@components/Box'
import { SimplePokemon } from '@components/Cards/SimplePokemon'
import { useGetPokemons } from '@root/hooks/pokemons'
import { FlashList } from '@shopify/flash-list'
import { SIMPLE_CARD_WIDTH } from '@root/utils/commons'
import { ArrowCircleUp } from 'phosphor-react-native'

import { useTheme } from '@root/theme/ThemeProvider'
import { ActivityIndicator, Animated, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export const AddPokemon = () => {
  const { state, handleLoadMore } = useGetPokemons()

  const [currentOffset, setCurrentOffset] = useState<number>(0)

  const ref = useRef<FlashList<Result>>(null)

  const animation = useRef(new Animated.Value(0)).current

  const theme = useTheme()

  const scrollToStart = () => {
    ref.current?.scrollToOffset({ animated: true, offset: 0 })
    setCurrentOffset(0)
  }

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'AddPokemon'>>()

  const onNavigate = useCallback(
    ({ url, name }: { url: string; name: string }) => {
      const pokemonId = url?.match(/\/(\d+)\/$/)?.[1]
      navigation.navigate('PokemonDetail', { url, pokemonId, name })
    },
    []
  )

  useEffect(() => {
    console.log(currentOffset)
    if (currentOffset <= 0) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }).start()
    }
  }, [currentOffset])

  return (
    <MainContainer>
      <HeaderBack title="Add Pokémon">
        <Pressable onPress={scrollToStart} disabled={!currentOffset}>
          <AnimatedBox
            opacity={animation}
            style={{ transform: [{ scale: animation }] }}
          >
            <ArrowCircleUp
              size={24}
              weight="fill"
              color={theme.colors.primary}
            />
          </AnimatedBox>
        </Pressable>
      </HeaderBack>
      <Box flex={1} paddingHorizontal={'m'}>
        <FlashList
          ref={ref}
          keyExtractor={item => item.url}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ItemSeparatorComponent={() => <Box height={theme.spacing.m} />}
          data={state.pokemonList}
          estimatedItemSize={SIMPLE_CARD_WIDTH}
          renderItem={({ item }) => (
            <SimplePokemon
              {...item}
              key={item.url}
              onPress={(url, name) => onNavigate({ url, name })}
            />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.9}
          onScrollEndDrag={event => {
            setCurrentOffset(event.nativeEvent.contentOffset.y)
          }}
          ListFooterComponent={() => {
            if (state.isLoading) {
              return (
                <Box justifyContent={'center'} alignItems={'center'}>
                  <ActivityIndicator color={theme.colors.primary} />
                </Box>
              )
            }
            return null
          }}
        />
      </Box>
    </MainContainer>
  )
}
