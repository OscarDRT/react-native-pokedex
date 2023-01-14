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
import { PokemonCatalog } from '@screens/PokemonCatalog'
import { Counter } from '@screens/Counter'

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
        tabBarActiveTintColor: theme.colors.secondaryBackground,
        tabBarInactiveTintColor: theme.colors.secondaryBackground,
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
        name={'PokemonCatalog'}
        component={PokemonCatalog}
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
