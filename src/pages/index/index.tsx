import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Button from '../../components/Button'
import Drawer from '../../components/Drawer'
import ChatMessage from '../../components/ChatMessage'
import './index.scss'

export default function Index () {
  const [loading, setLoading] = useState(false)
  const [leftDrawerVisible, setLeftDrawerVisible] = useState(false)
  const [rightDrawerVisible, setRightDrawerVisible] = useState(false)
  const [topDrawerVisible, setTopDrawerVisible] = useState(false)
  const [bottomDrawerVisible, setBottomDrawerVisible] = useState(false)

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

  const handleLeftDrawerOpen = () => {
    setLeftDrawerVisible(true)
  }

  const handleRightDrawerOpen = () => {
    setRightDrawerVisible(true)
  }

  const handleTopDrawerOpen = () => {
    setTopDrawerVisible(true)
  }

  const handleBottomDrawerOpen = () => {
    setBottomDrawerVisible(true)
  }

  const handleLeftDrawerClose = () => {
    setLeftDrawerVisible(false)
  }

  const handleRightDrawerClose = () => {
    setRightDrawerVisible(false)
  }

  const handleTopDrawerClose = () => {
    setTopDrawerVisible(false)
  }

  const handleBottomDrawerClose = () => {
    setBottomDrawerVisible(false)
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
      
      <View className='demo-section'>
        <Text className='section-title'>抽屉组件演示</Text>
        
        <View className='demo-card'>
          <Text className='card-title'>抽屉方向</Text>
          <View className='button-grid'>
            <Button type='primary' onClick={handleLeftDrawerOpen}>左侧抽屉</Button>
            <Button type='primary' onClick={handleRightDrawerOpen}>右侧抽屉</Button>
            <Button type='primary' onClick={handleTopDrawerOpen}>顶部抽屉</Button>
            <Button type='primary' onClick={handleBottomDrawerOpen}>底部抽屉</Button>
          </View>
        </View>
      </View>
      
      {/* 左侧抽屉 */}
      <Drawer
        visible={leftDrawerVisible}
        placement='left'
        title='左侧抽屉'
        onClose={handleLeftDrawerClose}
        afterOpen={() => console.log('Left drawer opened')}
        afterClose={() => console.log('Left drawer closed')}
      >
        <View className='drawer-content'>
          <Text className='drawer-text'>这是一个左侧方向的抽屉</Text>
          <Text className='drawer-description'>
            抽屉组件可以从四个方向弹出，具有平滑的过渡动画效果。
            您可以通过点击遮罩或关闭按钮来关闭抽屉。
          </Text>
          <View className='drawer-actions'>
            <Button type='primary' onClick={handleLeftDrawerClose}>关闭抽屉</Button>
          </View>
        </View>
      </Drawer>

      {/* 右侧抽屉 */}
      <Drawer
        visible={rightDrawerVisible}
        placement='right'
        title='右侧抽屉'
        onClose={handleRightDrawerClose}
        afterOpen={() => console.log('Right drawer opened')}
        afterClose={() => console.log('Right drawer closed')}
      >
        <View className='drawer-content'>
          <Text className='drawer-text'>这是一个右侧方向的抽屉</Text>
          <Text className='drawer-description'>
            抽屉组件可以从四个方向弹出，具有平滑的过渡动画效果。
            您可以通过点击遮罩或关闭按钮来关闭抽屉。
          </Text>
          <View className='drawer-actions'>
            <Button type='primary' onClick={handleRightDrawerClose}>关闭抽屉</Button>
          </View>
        </View>
      </Drawer>

      {/* 顶部抽屉 */}
      <Drawer
        visible={topDrawerVisible}
        placement='top'
        title='顶部抽屉'
        size={200}
        onClose={handleTopDrawerClose}
        afterOpen={() => console.log('Top drawer opened')}
        afterClose={() => console.log('Top drawer closed')}
      >
        <View className='drawer-content'>
          <Text className='drawer-text'>这是一个顶部方向的抽屉</Text>
          <Text className='drawer-description'>
            抽屉组件可以从四个方向弹出，具有平滑的过渡动画效果。
            您可以通过点击遮罩或关闭按钮来关闭抽屉。
          </Text>
          <View className='drawer-actions'>
            <Button type='primary' onClick={handleTopDrawerClose}>关闭抽屉</Button>
          </View>
        </View>
      </Drawer>
      {/* 底部抽屉 */}
      <Drawer
        visible={bottomDrawerVisible}
        placement='bottom'
        title='底部抽屉'
        size={200}
        onClose={handleBottomDrawerClose}
        afterOpen={() => console.log('Bottom drawer opened')}
        afterClose={() => console.log('Bottom drawer closed')}
      >
        <View className='drawer-content'>
          <Text className='drawer-text'>这是一个底部方向的抽屉</Text>
          <Text className='drawer-description'>
            抽屉组件可以从四个方向弹出，具有平滑的过渡动画效果。
            您可以通过点击遮罩或关闭按钮来关闭抽屉。
          </Text>
          <View className='drawer-actions'>
            <Button type='primary' onClick={handleBottomDrawerClose}>关闭抽屉</Button>
          </View>
        </View>
      </Drawer>
      
      <View className='demo-section'>
        <Text className='section-title'>聊天消息组件演示</Text>
        
        <View className='demo-card'>
          <Text className='card-title'>不同角色消息</Text>
          <ChatMessage
            role='user'
            content='你好，我有一个健康问题想咨询'
            timestamp={Date.now() - 3600000}
          />
          <ChatMessage
            role='doctor'
            content='您好，请问有什么可以帮助您的？'
            timestamp={Date.now() - 3540000}
          />
          <ChatMessage
            role='ai'
            content='我是AI助手，可以为您提供初步的健康建议'
            timestamp={Date.now() - 3480000}
          />
          <ChatMessage
            role='system'
            content='系统消息：请注意保护个人隐私'
            timestamp={Date.now() - 3420000}
          />
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>流式输出演示</Text>
          <ChatMessage
            role='ai'
            content='正在为您生成健康建议...'
            streaming
            status='streaming'
            timestamp={Date.now() - 1800000}
          />
          <ChatMessage
            role='ai'
            content='思考中，请稍候...'
            status='thinking'
            timestamp={Date.now() - 1200000}
          />
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>Markdown 支持</Text>
          <ChatMessage
            role='ai'
            content={`# 健康建议\n\n## 饮食建议\n- 多吃蔬菜水果\n- 少吃油腻食物\n- 保持适量饮水\n\n## 运动建议\n- 每天坚持30分钟运动\n- 选择适合自己的运动方式\n- 避免过度运动\n\n> 注意：以上建议仅供参考，具体请咨询专业医生。`}
            timestamp={Date.now() - 600000}
          />
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>风险提示演示</Text>
          <ChatMessage
            role='doctor'
            content='您的症状需要进一步检查，建议尽快就医'
            riskLevel='high'
            timestamp={Date.now() - 300000}
          />
          <ChatMessage
            role='ai'
            content='您的健康状况基本正常，但需要注意休息'
            riskLevel='medium'
            timestamp={Date.now() - 150000}
          />
          <ChatMessage
            role='ai'
            content='您的健康状况良好，继续保持健康的生活方式'
            riskLevel='low'
            timestamp={Date.now()}
          />
        </View>
        
        <View className='demo-card'>
          <Text className='card-title'>错误状态演示</Text>
          <ChatMessage
            role='ai'
            content=''
            status='error'
            errorMessage='抱歉，我暂时无法回答这个问题，请稍后重试'
            timestamp={Date.now()}
          />
        </View>
      </View>
    </View>
  )
}

