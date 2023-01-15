import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Profile } from '@screens/Profile'
import { useTheme } from '@root/theme/ThemeProvider'
import { Hash, House, User } from 'phosphor-react-native'
import { scale } from '@root/utils/commons'
import { Pokedex } from '@screens/Pokedex'
import { Counter } from '@screens/Counter'
import { AddPokemon } from '@screens/AddPokemon'
import { PokemonDetail } from '@screens/PokemonDetail'

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
          paddingTop: 7,
          borderTopLeftRadius: scale(24),
          borderTopRightRadius: scale(24),
          /* borderLeftWidth: 0.2,
          borderRightWidth: 0.2, */
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
          tabBarLabel: 'Perfil',
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
          tabBarLabel: 'Contador',
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
