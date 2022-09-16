import React, { useEffect } from 'react'

import Taro from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'
import './app.less'

export default function App ({ children }: React.PropsWithChildren<{ children: any }>) {
  useEffect(() => {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }, [])

  return children
}
