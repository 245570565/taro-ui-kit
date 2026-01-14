import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loa2de2d.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
