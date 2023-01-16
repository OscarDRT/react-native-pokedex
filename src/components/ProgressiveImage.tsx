import React, { useCallback, useMemo } from 'react'
import {
  View,
  Animated,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ImageStyle,
} from 'react-native'
import FastImage, {
  Source,
  ResizeMode,
  FastImageProps,
} from 'react-native-fast-image'

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

interface ProgressiveImageProps {
  blurRadius?: number
  resizeMode?: ResizeMode
  source: Source
  containerStyle?: StyleProp<ViewStyle>
  style?: Animated.WithAnimatedValue<StyleProp<ImageStyle>>
  fastImageProps?: FastImageProps
}

export const ProgressiveImage = ({
  style,
  source,
  containerStyle,
  resizeMode,
  fastImageProps,
  ...props
}: ProgressiveImageProps) => {
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
    <View style={[styles.container, containerStyle]}>
      <AnimatedFastImage
        resizeMode={resizeMode}
        source={{ uri: sourceUri }}
        onLoad={() => onImageLoad()}
        style={[
          /* @ts-ignore */
          style,
          StyleSheet.absoluteFill,
          { opacity: sourceUriAnimated, zIndex: 2 },
        ]}
        {...fastImageProps}
        {...props}
      />
    </View>
  )
}
