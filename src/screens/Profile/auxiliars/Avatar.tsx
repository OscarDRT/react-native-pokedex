import { Box } from '@components/Box'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { useTheme } from '@root/theme/ThemeProvider'
import { scale } from '@root/utils/commons'
import { Camera } from 'phosphor-react-native'
import React, { FC, useEffect, useState } from 'react'
import { Pressable } from 'react-native'

interface AvatarProps {
  uri: string
  openCamera?: () => void
  disabled?: boolean
}

export const Avatar: FC<AvatarProps> = ({ uri, openCamera, disabled }) => {
  const theme = useTheme()

  const avatar =
    uri ??
    'https://improveyourdrawings.com/wp-content/uploads/2019/02/Step-12-Shadows.jpg'

  return (
    <Pressable onPress={openCamera} disabled={disabled}>
      <Box
        height={scale(150)}
        width={scale(150)}
        borderRadius={scale(150)}
        backgroundColor={'primaryForeground'}
        justifyContent={'center'}
        alignItems={'center'}
        overflow={'hidden'}
      >
        {avatar ? (
          <Box
            borderRadius={scale(140)}
            height={scale(140)}
            width={scale(140)}
            overflow={'hidden'}
          >
            <ProgressiveImage
              key={uri}
              resizeMode={'cover'}
              source={{ uri: avatar }}
            />
          </Box>
        ) : (
          <Camera
            weight={'duotone'}
            size={scale(50)}
            color={theme.colors.primary}
          />
        )}
      </Box>
    </Pressable>
  )
}
