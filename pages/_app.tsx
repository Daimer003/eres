
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import CartProvider from "@/src/contexts/cartContext";
import { LocaleProvider } from '@/src/contexts/internatiolizationContext';
import ERESProvider from '@/src/contexts/eresContext';
import "../styles/swiper.css";
import Layaut from '@/src/components/layout/Layaut';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [route, setRout] = useState('eres');
  const ruta = (r: string) => setRout(r)

  return (

    <ChakraProvider>
      <ERESProvider>
        < CartProvider >
          <LocaleProvider >
            <Layaut ruta={ruta}>
              <Component {...pageProps} router={route} />
            </Layaut>
          </LocaleProvider>
        </CartProvider>
      </ERESProvider>
    </ChakraProvider>
  )
}
