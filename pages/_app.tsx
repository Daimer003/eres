
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import CartProvider from "@/src/contexts/cartContext";
import { LocaleProvider } from '@/src/contexts/internatiolizationContext';
import ERESProvider from '@/src/contexts/eresContext';
import "../styles/swiper.css";
import Layaut from '@/src/components/layout/Layaut';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string

export default function App({ Component, pageProps }: AppProps) {

  return (

    <ChakraProvider>
      <PayPalScriptProvider options={{ clientId: clientId }} >
        <ERESProvider>
          < CartProvider >
            <LocaleProvider >
              <Layaut >
                <Component {...pageProps} />
              </Layaut>
            </LocaleProvider>
          </CartProvider>
        </ERESProvider>
      </PayPalScriptProvider>
    </ChakraProvider>
  )
}
