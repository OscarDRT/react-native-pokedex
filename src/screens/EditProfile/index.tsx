import { Box } from '@components/Box'
import { Button } from '@components/Buttons/Button'
import { MainContainer } from '@components/Containers/Main'
import { HeaderBack } from '@components/Header'
import { Input, InputMask } from '@components/Input'
import { Text } from '@components/Text'
import { useUserActions, useUserState } from '@root/hooks/user'
import { useState } from '@root/hooks/useState'

import { Avatar } from '@screens/Profile/auxiliars/Avatar'
import React, { FC, useEffect } from 'react'
import { launchCamera } from 'react-native-image-picker'
import { StackNavigationProps } from '@root/utils/commons'

const EditProfile: FC<StackNavigationProps<'EditProfile'>> = ({
  navigation,
}) => {
  const user = useUserState()

  const actions = useUserActions()

  const [state, setState] = useState<UserState>(user)

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
        setState({ avatar: result?.assets?.[0] as Asset })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeName = (name: string) => {
    setState({ name })
  }

  const onChangeBirthdate = (birthdate: string) => {
    setState({ birthdate })
  }

  const submit = () => {
    actions.setAvatar({ avatar: state.avatar })
    actions.setBirthdate({ birthdate: state.birthdate })
    actions.setName({ name: state.name })
    navigation.canGoBack() && navigation.goBack()
  }

  return (
    <MainContainer>
      <HeaderBack title="Edit profile" />
      <Box flex={1} padding={'m'}>
        <Box alignItems={'center'} margin={'m'}>
          <Avatar uri={state.avatar.uri as string} openCamera={openCamera} />
        </Box>

        <Box marginVertical={'m'}>
          <Text variant={'body'} marginLeft={'xs'} color={'primary'}>
            Name:
          </Text>
          <Input value={state.name} onChangeText={onChangeName} />
        </Box>

        <Box marginVertical={'m'}>
          <Text variant={'body'} marginLeft={'xs'} color={'primary'}>
            Birth Date:
          </Text>
          <InputMask
            value={state.birthdate}
            onChangeText={onChangeBirthdate}
            type={'datetime'}
            options={{ format: 'DD-MM-YYYY' }}
          />
        </Box>
      </Box>
      <Box padding={'m'}>
        <Button title={'Submit'} onPress={submit} />
      </Box>
    </MainContainer>
  )
}

export default EditProfile
