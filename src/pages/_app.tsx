import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React, { useEffect } from 'react'
import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router'
import AOS from 'aos'

const progress = new ProgressBar({
  size: 2,
  color: '#22D3EE',
  className: 'bar-of-progress',
  delay: 100,
})

if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', () => {
  progress.finish()

  // Will not work if scroll is not on <html>
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      // once: true,
      // disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  const Layout = (Component as any).layoutProps?.Layout || React.Fragment
  const layoutProps = (Component as any).layoutProps?.Layout
    ? { layoutProps: (Component as any).layoutProps }
    : {}

  return (
    <>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
