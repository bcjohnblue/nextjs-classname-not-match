import React from 'react'
import App from 'next/app'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <div className="layout">{children}</div>
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    /* Add token in localStorage */
    if (process.browser) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      localStorage.setItem('token', token)
    }

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
