import { ItemPokemonCard } from '@components/Cards/PokemonCard'
import { FlashList } from '@shopify/flash-list'
import React, { FC } from 'react'
import { ListEmptyComponent } from './ListEmptyComponent'

interface PokemonsListProps {
  currentPageIds: string[]
  heightPokemonCard: number
  onRemove: (pokemonId: string) => void
  onShow: (pokemonId: string, name: string) => void
}

export const PokemonsList: FC<PokemonsListProps> = ({
  currentPageIds,
  heightPokemonCard,
  onRemove,
  onShow,
}) => {
  return (
    <FlashList
      bounces={false}
      showsVerticalScrollIndicator={false}
      data={currentPageIds}
      renderItem={({ item, index }) => (
        <ItemPokemonCard
          id={item}
          height={heightPokemonCard}
          key={`${item}-${index}`}
          onRemove={pokemonId => onRemove(pokemonId)}
          onShow={(pokemonId, name) => onShow(pokemonId, name)}
        />
      )}
      estimatedItemSize={heightPokemonCard}
      ListEmptyComponent={ListEmptyComponent}
      //onEndReached={loadNextPage}
      //onEndReachedThreshold={0.1}
    />
  )
}
