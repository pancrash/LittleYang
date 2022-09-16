/**
 * @description: 首页
 * @author pancras He
 * @LastEditors pancras He
 * @LastEditTime 2022-08-05 17:01:04
 **/

import {useEffect, useState} from 'react';

import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.less'

const preFix = 'cloud://pancras-cloud-6gfnmjr4d7deac0b.7061-pancras-cloud-6gfnmjr4d7deac0b-1304635511/marryPicture/'
function Index () {
  // 图片链接
  const [imgUrl, setImgUrl] = useState<Record<string, any>[]>([]);
  // getUrlList
  const getUrlList = () => {
    const list:string[] = []
    for (let i = 1; i <= 7; i++) {
      list.push(preFix + i + '.jpg')
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
  const preView = (url:string) => {
    Taro.previewImage({
      current:url,
      urls:imgUrl.map((item) => item.tempFileURL)
    })
  }
  return (
    <View className='container'>
      <Text>小杨同学</Text>
      <Swiper
        className='swiper'
        indicatorColor='#999'
        indicatorActiveColor='#fff'
        circular
        indicatorDots
        autoplay
      >
        {
          imgUrl.map((item, index) => {
            return (
              <SwiperItem key={index} className='swiper-item'>
                <Image src={item.tempFileURL} onClick={() => preView(item.tempFileURL)} mode='aspectFit' className='image'></Image>
              </SwiperItem>
            )
          })
        }</Swiper>
    </View>
  );
}
export default Index;
