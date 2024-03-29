import { Navigation } from '@root/navigation'

import { ThemeProvider } from '@root/theme/ThemeProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { persistor, store } from '@root/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Navigation />
            </GestureHandlerRootView>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
