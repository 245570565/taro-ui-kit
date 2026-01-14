import { CSSProperties } from 'react'

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'warn'
  /** 按钮尺寸 */
  size?: 'small' | 'medium' | 'large'
  /** 是否禁用 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 点击事件 */
  onClick?: (e: any) => void
  /** 按钮内容 */
  children?: React.ReactNode
}