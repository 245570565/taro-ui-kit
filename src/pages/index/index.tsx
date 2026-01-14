import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Pagesssddds测222试')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
