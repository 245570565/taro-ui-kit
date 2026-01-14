import React, { useEffect, useRef } from 'react'
import { View, Text } from '@tarojs/components'
import { DrawerProps } from './types'
import './index.scss'

export default function Drawer(props: DrawerProps) {
  const {
    visible,
    placement = 'right',
    size = 320,
    title,
    children,
    closable = true,
    maskClosable = true,
    maskOpacity = 0.5,
    maskStyle,
    drawerStyle,
    bodyStyle,
    onClose,
    afterOpen,
    afterClose
  } = props

  const drawerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  // 处理动画结束回调
  useEffect(() => {
    if (visible) {
      // 抽屉打开后触发回调
      animationRef.current = setTimeout(() => {
        afterOpen?.()
      }, 300) // 与动画持续时间一致
    } else if (!visible) {
      // 抽屉关闭后触发回调
      animationRef.current = setTimeout(() => {
        afterClose?.()
      }, 300) // 与动画持续时间一致
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [visible, afterOpen, afterClose])

  const handleMaskClick = () => {
    if (maskClosable) {
      onClose()
    }
  }

  const handleCloseClick = () => {
    onClose()
  }

  // 根据方向计算抽屉样式
  const getDrawerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      ...drawerStyle
    }

    switch (placement) {
      case 'left':
      case 'right':
        baseStyle.width = size
        break
      case 'top':
      case 'bottom':
        baseStyle.height = size
        break
    }

    return baseStyle
  }

  // 计算遮罩样式
  const getMaskStyle = (): React.CSSProperties => {
    return {
      opacity: visible ? maskOpacity : 0,
      ...maskStyle
    }
  }

  console.log('Drawer render:', { visible, placement, className: `ui-drawer ui-drawer--${placement} ${visible ? 'ui-drawer--visible' : ''}` })

  return (
    <>
      {visible && (
        <View
          className='ui-drawer-mask'
          style={getMaskStyle()}
          onClick={handleMaskClick}
        />
      )}
      <View
        ref={drawerRef}
        className={`ui-drawer ui-drawer--${placement} ${visible ? 'ui-drawer--visible' : ''}`}
        style={getDrawerStyle()}
      >
        {title && (
          <View className='ui-drawer-header'>
            <Text className='ui-drawer-title'>{title}</Text>
            {closable && (
              <View
                className='ui-drawer-close'
                onClick={handleCloseClick}
              >
                <Text className='ui-drawer-close-icon'>×</Text>
              </View>
            )}
          </View>
        )}
        <View className='ui-drawer-body' style={bodyStyle}>
          {children}
        </View>
      </View>
    </>
  )
}