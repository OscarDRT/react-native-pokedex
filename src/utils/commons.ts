import { Dimensions } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { Export } from 'phosphor-react-native'
import { AppDispatch, RootState } from '@root/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const { width, height } = Dimensions.get('window')

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const screenSize = Math.sqrt(width * height) / 100

const scale = (size: number) => (width / guidelineBaseWidth) * size
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor

export const SIMPLE_CARD_WIDTH = width / 2 - scale(16) * 2

const getSprite = (name: string) => {
  return `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const removeDuplicates = (
  currentList: Array<Result>,
  newList: Array<Result>
) => {
  return [...new Set([...currentList, ...newList])]
}

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {
  width,
  height,
  scale,
  verticalScale,
  moderateScale,
  screenSize,
  getSprite,
  capitalize,
  useAppDispatch,
  useAppSelector,
  removeDuplicates,
}

export interface StackNavigationProps<
  RouteName extends keyof RootStackParamList
> {
  navigation: StackNavigationProp<RootStackParamList, RouteName>
  route: RouteProp<RootStackParamList, RouteName>
}
