import React from 'react'
import { MainContainer } from '@components/Containers/Main'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { Box } from '@components/Box'
import { AddPokemonNavigation } from '@components/Buttons/AddPokemonNavigation'
import { useUserActions, useUserState } from '@root/hooks/user'
import { scale } from '@root/utils/commons'
import { Camera } from 'phosphor-react-native'
import { useTheme } from '@root/theme/ThemeProvider'
import { Pressable } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { Avatar } from './auxiliars/Avatar'

const Profile = () => {
  const user = useUserState()

  const actions = useUserActions()

  const theme = useTheme()

  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        maxHeight: 350,
        maxWidth: 350,
        cameraType: 'back',
        quality: 1,
      })

      if (result.didCancel) {
        console.log('User cancelled image picker')
      } else if (result.errorCode) {
        console.log('Error code: ', result.errorCode)
      } else if (result.errorMessage) {
        console.log('Error message ', result.errorMessage)
      } else {
        actions.setAvatar({ avatar: result?.assets?.[0] as Asset })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MainContainer>
      <HeaderBack title="Profile" showBackButton={false}>
        <AddPokemonNavigation />
      </HeaderBack>
      <Box flex={1} padding={'m'} alignItems={'center'}>
        <Avatar uri={user.avatar.uri as string} openCamera={openCamera} />
      </Box>
    </MainContainer>
  )
}

export default Profile
