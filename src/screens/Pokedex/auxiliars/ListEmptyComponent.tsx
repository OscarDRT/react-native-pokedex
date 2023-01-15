import { Box } from '@components/Box'
import { ProgressiveImage } from '@components/ProgressiveImage'
import { Text } from '@components/Text'
import { scale } from '@root/utils/commons'
import React from 'react'
import FastImage from 'react-native-fast-image'

export const ListEmptyComponent = () => {
  return (
    <Box justifyContent={'center'} alignItems={'center'}>
      <Box
        height={scale(300)}
        width={scale(300)}
        borderRadius={scale(300)}
        overflow={'hidden'}
      >
        <ProgressiveImage
          source={{
            uri: 'https://media0.giphy.com/media/0PlJKb6nt4C6713fiS/giphy.gif?cid=ecf05e4776vst0cl4cml9in3upnwst1rilmp5bsk0jxot4gb&rid=giphy.gif',
            priority: 'high',
          }}
        />
      </Box>
      <Text padding={'xl'} variant={'subtitle'}>
        You do not have any Pokémon
      </Text>
    </Box>
  )
}
