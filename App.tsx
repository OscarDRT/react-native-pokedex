import { Navigation } from '@root/navigation'

import { ThemeProvider } from '@root/theme/ThemeProvider'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { store } from '@root/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
