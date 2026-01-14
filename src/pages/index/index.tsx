import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Button from '../../components/Button'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Pagesssddds测ss222试')
  })

  const handleClick = () => {
    console.log('Button clicked')
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <View className='button-demo'>
        <Text className='demo-title'>按钮组件演示</Text>
        <View className='button-row'>
          <Button type='primary' onClick={handleClick}>主要按钮</Button>
          <Button type='default' onClick={handleClick}>默认按钮</Button>
          <Button type='warn' onClick={handleClick}>警告按钮</Button>
        </View>
        <View className='button-row'>
          <Button size='small' onClick={handleClick}>小按钮</Button>
          <Button size='medium' onClick={handleClick}>中按钮</Button>
          <Button size='large' onClick={handleClick}>大按钮</Button>
        </View>
        <View className='button-row'>
          <Button disabled onClick={handleClick}>禁用按钮</Button>
          <Button loading onClick={handleClick}>加载中</Button>
          <Button type='primary' loading onClick={handleClick}>主要加载</Button>
        </View>
        <View className='button-row'>
          <Button onClick={handleClick} style={{ backgroundColor: '#ff6b35' }}>自定义样式</Button>
        </View>
      </View>
    </View>
  )
}
