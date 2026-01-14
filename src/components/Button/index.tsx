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
    children,
    circle = false,
    block = false
  } = props

  const handleClick = (e: any) => {
    if (disabled || loading) return
    onClick?.(e)
  }

  const buttonClasses = [
    'ui-button',
    `ui-button--${type}`,
    `ui-button--${size}`,
    disabled ? 'ui-button--disabled' : '',
    loading ? 'ui-button--loading' : '',
    circle ? 'ui-button--circle' : '',
    block ? 'ui-button--block' : '',
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