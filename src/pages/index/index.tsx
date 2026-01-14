import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Button from '../../components/Button'
import './index.scss'

export default function Index () {
  const [loading, setLoading] = useState(false)

  useLoad(() => {
    console.log('Pagesssddds测ss222试')
  })

  const handleClick = () => {
    console.log('Button clicked')
  }

  const handleLoadingClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <View className='index'>
      <View className='header'>
        <Text className='logo'>Lark UI</Text>
        <Text className='subtitle'>Taro 组件库演示</Text>
      </View>
      
      <View className='demo-section'>
        <Text className='section-title'>按钮组件演示</Text>
        
        <View className='demo-card'>
          <Text className='card-title'>按钮类型</Text>
          <View className='button-grid'>
            <Button type='primary' onClick={handleClick}>主要按钮</Button>
            <Button type='default' onClick={handleClick}>默认按钮</Button>
            <Button type='warn' onClick={handleClick}>警告按钮</Button>
            <Button type='outline' onClick={handleClick}>轮廓按钮</Button>
            <Button type='text' onClick={handleClick}>文本按钮</Button>
          </View>
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>按钮尺寸</Text>
          <View className='button-grid'>
            <Button size='small' onClick={handleClick}>小按钮</Button>
            <Button size='medium' onClick={handleClick}>中按钮</Button>
            <Button size='large' onClick={handleClick}>大按钮</Button>
          </View>
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>状态演示</Text>
          <View className='button-grid'>
            <Button disabled onClick={handleClick}>禁用按钮</Button>
            <Button loading onClick={handleClick}>加载中</Button>
            <Button type='primary' loading onClick={handleClick}>主要加载</Button>
            <Button type='primary' loading={loading} onClick={handleLoadingClick}>
              {loading ? '加载中' : '点击加载'}
            </Button>
          </View>
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>特殊样式</Text>
          <View className='button-grid'>
            <Button circle onClick={handleClick}>+</Button>
            <Button type='primary' circle size='large' onClick={handleClick}>✓</Button>
            <Button type='warn' circle size='small' onClick={handleClick}>!</Button>
          </View>
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>块级按钮</Text>
          <View className='block-buttons'>
            <Button type='primary' block onClick={handleClick}>主要块级按钮</Button>
            <Button type='outline' block onClick={handleClick}>轮廓块级按钮</Button>
          </View>
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>自定义样式</Text>
          <View className='button-grid'>
            <Button onClick={handleClick} style={{ backgroundColor: '#ff6b35', color: '#fff' }}>
              橙色按钮
            </Button>
            <Button onClick={handleClick} style={{ backgroundColor: '#1890ff', color: '#fff' }}>
              蓝色按钮
            </Button>
            <Button onClick={handleClick} style={{ backgroundColor: '#722ed1', color: '#fff' }}>
              紫色按钮
            </Button>
          </View>
        </View>
      </View>
    </View>
  )
}
