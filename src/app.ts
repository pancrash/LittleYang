import React from 'react'
import 'taro-ui/dist/style/index.scss'
import './app.less'

export default function App ({children}: React.PropsWithChildren<{children:any}>) {
  return children
}
