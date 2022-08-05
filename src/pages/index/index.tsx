import React from 'react';
import { AtButton } from 'taro-ui';

import { View, Text } from '@tarojs/components';

import './index.less';

function Index () {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary'>I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type='primary' circle>
        支持
      </AtButton>
      <Text>共建？</Text>
      <AtButton type='secondary' circle>
        来
      </AtButton>
    </View>
  );
}
export default Index;
