import React, { FC, useCallback } from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { AddPokemonNavigation } from '@components/Buttons/AddPokemonNavigation'
import { useUserActions, useUserState } from '@root/hooks/user'
import { StackNavigationProps } from '@root/utils/commons'
import { useTheme } from '@root/theme/ThemeProvider'
import { launchCamera } from 'react-native-image-picker'
import { Avatar } from './auxiliars/Avatar'
import { Button } from '@components/Buttons/Button'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

const Profile = () => {
  const user = useUserState()

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'root'>>()

  const theme = useTheme()

  const tabBarHeight = useBottomTabBarHeight()

  const onNavigate = useCallback(() => {
    return navigation.navigate('EditProfile')
  }, [])

  return (
    <MainContainer>
      <HeaderBack title="Profile" showBackButton={false}>
        <AddPokemonNavigation />
      </HeaderBack>
      <Box flex={1} padding={'m'} alignItems={'center'}>
        <Avatar uri={user.avatar.uri as string} disabled={true} />
        <Text
          margin={'l'}
          variant={'title'}
          color={'secondaryText'}
        >{`Name`}</Text>
        <Text margin={'l'} variant={'subtitle'}>{`${user.name}`}</Text>
        <Text
          margin={'l'}
          variant={'title'}
          color={'secondaryText'}
        >{`Birthdate`}</Text>
        <Text margin={'l'} variant={'subtitle'}>{`${user.birthdate}`}</Text>
      </Box>
      <Box style={{ padding: tabBarHeight + theme.spacing.s }}>
        <Button title={'Edit profile'} onPress={onNavigate} />
      </Box>
    </MainContainer>
  )
}

export default Profile
