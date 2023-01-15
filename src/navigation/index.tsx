import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@root/theme/ThemeProvider'
import { Hash, House, User } from 'phosphor-react-native'
import { scale } from '@root/utils/commons'

import {
  AddPokemon,
  Counter,
  Pokedex,
  PokemonDetail,
  Profile,
} from '@root/screens'

export const navigationRef = createNavigationContainerRef()

const RootStack = createNativeStackNavigator<RootStackParamList>()
const AppTabs = createBottomTabNavigator<AppTabParamList>()

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={'TabNavigator'}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name={'TabNavigator'} component={TabContainer} />

        <RootStack.Screen name={'AddPokemon'} component={AddPokemon} />

        <RootStack.Screen name={'PokemonDetail'} component={PokemonDetail} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const TabContainer = () => {
  const theme = useTheme()

  return (
    <AppTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          backgroundColor: theme.colors.primaryForeground,
          paddingTop: scale(10),
          borderTopLeftRadius: scale(54),
          borderTopRightRadius: scale(54),
          borderTopWidth: 0,
          position: 'absolute',
          overflow: 'hidden',
        },
      }}
    >
      <AppTabs.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <User
              size={scale(size)}
              color={color}
              weight={focused ? 'fill' : 'thin'}
            />
          ),
        }}
      />

      <AppTabs.Screen
        name={'Pokedex'}
        component={Pokedex}
        options={{
          tabBarLabel: 'Pokédex',
          tabBarIcon: ({ color, size, focused }) => (
            <House
              size={scale(size)}
              color={color}
              weight={focused ? 'fill' : 'thin'}
            />
          ),
        }}
      />

      <AppTabs.Screen
        name={'Counter'}
        component={Counter}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Hash
              size={scale(size)}
              color={color}
              weight={focused ? 'fill' : 'thin'}
            />
          ),
        }}
      />
    </AppTabs.Navigator>
  )
}
