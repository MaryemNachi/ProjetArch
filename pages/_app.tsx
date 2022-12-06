import '../styles/globals.scss'
import PageDetailsProvider from '../contexts/pageContext'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Layout from '../components/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageDetailsProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </PageDetailsProvider>
  )
}
