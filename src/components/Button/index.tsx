import { View, Text } from '@tarojs/components'
import { ButtonProps } from './types'
import './index.scss'

export default function Button(props: ButtonProps) {
  const {
    type = 'default',
    size = 'medium',
    disabled = false,
    loading = false,
    className = '',
    style,
    onClick,
    children
  } = props

/**
 * 处理点击事件的函数
 * @param e - 点击事件对象
 */
  const handleClick = (e: any) => {
  // 如果组件被禁用或正在加载中，则直接返回，不执行任何操作
    if (disabled || loading) return
  // 调用传入的onClick回调函数，并将事件对象传递给它
  // 使用可选链操作符(?.)确保onClick存在时才调用
    onClick?.(e)
  }

  const buttonClasses = [
    'ui-button',
    `ui-button--${type}`,
    `ui-button--${size}`,
    disabled ? 'ui-button--disabled' : '',
    loading ? 'ui-button--loading' : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <View
      className={buttonClasses}
      style={style}
      onClick={handleClick}
      hoverClass={disabled ? '' : 'ui-button--hover'}
      hoverStyle={{ opacity: 0.8 }}
      hoverStartTime={20}
      hoverStayTime={70}
    >
      {loading && (
        <View className='ui-button__loading' />
      )}
      <Text className='ui-button__text'>{children}</Text>
    </View>
  )
}