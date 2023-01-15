import React, { FC, useCallback } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { AddPokemonNavigation } from '@components/Buttons/AddPokemonNavigation'
import { usePokedexActions, usePokemonsState } from '@root/hooks/pokemons'
import { useState } from '@root/hooks/useState'
import { FlashList } from '@shopify/flash-list'
import { height, scale, StackNavigationProps } from '@root/utils/commons'
import { ItemPokemonCard } from '@components/Cards/PokemonCard'
import { ActivityIndicator, LayoutChangeEvent } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { ListEmptyComponent } from './auxiliars/ListEmptyComponent'

const Pokedex: FC<StackNavigationProps<'TabNavigator'>> = ({ navigation }) => {
  const [state, setState] = useState<{
    pageIndex: number
    pageSize: number
    isLoading: boolean
    layout: { width: number; height: number }
  }>({
    pageIndex: 0,
    pageSize: 2,
    isLoading: true,
    layout: { width: 0, height: 0 },
  })

  const pokemons = usePokemonsState()

  const bottomTabBarHeight = useBottomTabBarHeight()

  const actions = usePokedexActions()

  const heightPokemonCard =
    (state.layout.height - bottomTabBarHeight - scale(50)) / 2

  const currentPageIds = pokemons.slice(
    state.pageIndex * state.pageSize,
    state.pageIndex * state.pageSize + state.pageSize
  )

  const loadNextPage = () => {
    setState({ pageIndex: state.pageIndex + 1 })
    console.log('entre')
  }

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setState({ layout: { width, height }, isLoading: false })
  }

  const onRemove = useCallback(({ pokemonId }: { pokemonId: string }) => {
    console.log(pokemonId)
    actions.removePokemon({ pokemonId })
  }, [])

  const onShow = useCallback(
    ({ pokemonId, name }: { pokemonId: string; name: string }) => {
      navigation.navigate('PokemonDetail', { pokemonId, name })
    },
    []
  )

  return (
    <MainContainer>
      <HeaderBack title="Pokédex" showBackButton={false}>
        <AddPokemonNavigation />
      </HeaderBack>
      <Box flex={1} onLayout={handleOnLayout}>
        {!state.isLoading ? (
          <FlashList
            showsVerticalScrollIndicator={false}
            data={currentPageIds}
            renderItem={({ item, index }) => (
              <ItemPokemonCard
                id={item}
                height={heightPokemonCard}
                key={`${item}-${index}`}
                onRemove={pokemonId => onRemove({ pokemonId })}
                onShow={(pokemonId, name) => onShow({ pokemonId, name })}
              />
            )}
            estimatedItemSize={heightPokemonCard}
            ListEmptyComponent={ListEmptyComponent}
            //onEndReached={loadNextPage}
            //onEndReachedThreshold={0.1}
          />
        ) : (
          <Box>
            <ActivityIndicator />
          </Box>
        )}
      </Box>
    </MainContainer>
  )
}

export default Pokedex
