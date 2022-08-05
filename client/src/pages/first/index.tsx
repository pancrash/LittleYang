/**
 * @description: 首页
 * @author pancras He
 * @LastEditors pancras He
 * @LastEditTime 2022-08-05 17:01:04
 **/

import React, {useEffect, useState} from 'react';

import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.less';

const preFix = 'cloud://pancras-cloud-6gfnmjr4d7deac0b.7061-pancras-cloud-6gfnmjr4d7deac0b-1304635511/marryPicture/'
function Index () {
  // 图片链接
  const [imgUrl, setImgUrl] = useState<Record<string, any>[]>([]);
  // getUrlList
  const getUrlList = () => {
    const list:string[] = []
    for (let i = 1; i <= 2; i++) {
      list.push(preFix + i + '.png')
    }
    return list
  }
  useEffect(() => {
    Taro.cloud.getTempFileURL({
      fileList: getUrlList(),
      success: res => {
        setImgUrl(res.fileList)
      },
      fail: err => {
        console.log(err)
      }
    })
  }, []);
  
  return (
    <View className='container'>
      <Text>小杨同学</Text>
      {
        imgUrl.map((item, index) => {
          return (
            <Image key={index} src={item.tempFileURL} mode='aspectFit' />
          )
        })
      }
    </View>
  );
}
export default Index;
