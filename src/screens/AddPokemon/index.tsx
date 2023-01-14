import React, { useEffect, useRef } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { SimplePokemon } from '@components/Cards/SimplePokemon'
import { useGetPokemons } from '@root/hooks/pokemons'
import { FlashList } from '@shopify/flash-list'
import { SIMPLE_CARD_WIDTH } from '@root/utils/commons'

import { useTheme } from '@root/theme/ThemeProvider'
import { ActivityIndicator, FlatList } from 'react-native'

export const AddPokemon = () => {
  const { state, handleLoadMore } = useGetPokemons()

  const ref = useRef(null)

  const theme = useTheme()

  /* useEffect(() => {
    setTimeout(() => {
      ref.current.scrollToEnd({ animated: true })
    }, 2000)
  }, [])
 */
  return (
    <MainContainer>
      <HeaderBack title="Agregrar Pokémon" />
      <Box flex={1} paddingHorizontal={'m'}>
        <FlashList
          ref={ref}
          keyExtractor={item => item.url}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ItemSeparatorComponent={() => <Box height={theme.spacing.m} />}
          data={state.pokemonList}
          estimatedItemSize={SIMPLE_CARD_WIDTH}
          renderItem={({ item }) => <SimplePokemon {...item} key={item.url} />}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.9}
          drawDistance={1}
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
