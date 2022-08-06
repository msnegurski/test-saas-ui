import '../styles/globals.css'
import { SaasProvider } from '@saas-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <SaasProvider>
      <Component {...pageProps} />
    </SaasProvider>
  )
}

export default MyApp
