import { opacity } from '@shopify/restyle'
import React, { useCallback, useMemo } from 'react'
import {
  Animated,
  ImageResizeMode,
  Image,
  ImageSourcePropType,
  StyleSheet,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from 'react-native'
import { Box } from './Box'
import FastImage, {
  Source,
  ResizeMode,
  FastImageProps,
} from 'react-native-fast-image'

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage)

interface ProgressiveImageProps {
  source: Source
  resizeMode?: ResizeMode
  containerStyle?: StyleProp<ViewStyle>
  style?: Animated.WithAnimatedValue<StyleProp<ImageStyle>>
}

export const ProgressiveImage: React.FC<
  ProgressiveImageProps & FastImageProps
> = ({ source, resizeMode = 'cover', style, ...props }) => {
  const { sourceUriAnimated, sourceUri } = useMemo(
    () => ({
      sourceUriAnimated: new Animated.Value(0),
      sourceUri: source.uri,
    }),
    []
  )

  const onImageLoad = useCallback(() => {
    Animated.timing(sourceUriAnimated, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start()
  }, [sourceUriAnimated])

  return (
    <Box flex={1} alignItems={'center'} justifyContent={'center'}>
      <AnimatedFastImage
        resizeMode={resizeMode}
        source={{ uri: sourceUri }}
        /* @ts-ignore */
        style={[style, StyleSheet.absoluteFill, { opacity: sourceUriAnimated }]}
        onLoad={() => onImageLoad()}
        {...props}
      />
    </Box>
  )
}
