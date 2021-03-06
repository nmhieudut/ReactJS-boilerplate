import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from 'core/layout'
import i18n from 'plugins/i18n'
import { I18nextProvider, withTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import store from 'store'

const App: React.FC = () => {
  console.log(
    '======> App is on',
    process.env.NODE_ENV,
    process.env.REACT_APP_SERVER_URL
  )
  return (
    <ChakraProvider>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Layout />
        </Provider>
      </I18nextProvider>
    </ChakraProvider>
  )
}

export default withTranslation()(App)
