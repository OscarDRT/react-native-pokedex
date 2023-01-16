import React, { FC, useCallback, useEffect } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { AddPokemonNavigation } from '@components/Buttons/AddPokemonNavigation'
import { usePokedexActions, usePokemonsState } from '@root/hooks/pokemons'
import { useState } from '@root/hooks/useState'
import { scale, StackNavigationProps } from '@root/utils/commons'
import { ActivityIndicator, LayoutChangeEvent } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import { PokemonsList } from './auxiliars/PokemonsList'

const Pokedex: FC<StackNavigationProps<'TabNavigator'>> = ({ navigation }) => {
  const [state, setState] = useState<{
    pageIndex: number
    pageSize: number
    isLoading: boolean
    layout: { width: number; height: number }
    currentPageIds: string[]
  }>({
    pageIndex: 0,
    pageSize: 2,
    isLoading: true,
    layout: { width: 0, height: 0 },
    currentPageIds: [],
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

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setState({ layout: { width, height }, isLoading: false })
  }

  const onRemove = useCallback(({ pokemonId }: { pokemonId: string }) => {
    actions.removePokemon({ pokemonId })
  }, [])

  const onShow = useCallback(
    ({ pokemonId, name }: { pokemonId: string; name: string }) => {
      navigation.navigate('PokemonDetail', { pokemonId, name, url: '' })
    },
    []
  )

  const gesture = Gesture.Pan().onFinalize(event => {
    if (event.translationY < 0) {
      if (state.pageIndex > 0) {
        setState({ pageIndex: state.pageIndex - 1 })
      }
    } else {
      if (state.pageIndex < pokemons.length / state.pageSize - 1) {
        setState({ pageIndex: state.pageIndex + 1 })
      }
    }
  })

  useEffect(() => {
    const currentPageIds = pokemons.slice(
      state.pageIndex * state.pageSize,
      state.pageIndex * state.pageSize + state.pageSize
    )
    setState({ currentPageIds })
  }, [pokemons, state.pageIndex, state.pageSize])

  return (
    <MainContainer>
      <HeaderBack title="Pokédex" showBackButton={false}>
        <AddPokemonNavigation />
      </HeaderBack>

      <GestureDetector gesture={gesture}>
        <Box flex={1} onLayout={handleOnLayout}>
          {!state.isLoading ? (
            <PokemonsList
              currentPageIds={state.currentPageIds}
              heightPokemonCard={heightPokemonCard}
              onRemove={pokemonId => onRemove({ pokemonId })}
              onShow={(pokemonId, name) => onShow({ pokemonId, name })}
            />
          ) : (
            <Box>
              <ActivityIndicator />
            </Box>
          )}
        </Box>
      </GestureDetector>
    </MainContainer>
  )
}

export default Pokedex
