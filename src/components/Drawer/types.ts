import { CSSProperties, ReactNode } from 'react'

export interface DrawerProps {
  /**
   * 是否显示抽屉
   */
  visible: boolean
  /**
   * 抽屉方向：left | right | top | bottom
   * @default right
   */
  placement?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * 抽屉宽度/高度，当placement为left或right时为宽度，top或bottom时为高度
   * @default 320
   */
  size?: number
  /**
   * 抽屉标题
   */
  title?: string
  /**
   * 抽屉内容
   */
  children: ReactNode
  /**
   * 是否显示关闭按钮
   * @default true
   */
  closable?: boolean
  /**
   * 是否点击遮罩关闭抽屉
   * @default true
   */
  maskClosable?: boolean
  /**
   * 遮罩透明度
   * @default 0.5
   */
  maskOpacity?: number
  /**
   * 遮罩背景色
   * @default rgba(0, 0, 0, 0.5)
   */
  maskStyle?: CSSProperties
  /**
   * 抽屉容器样式
   */
  drawerStyle?: CSSProperties
  /**
   * 抽屉内容样式
   */
  bodyStyle?: CSSProperties
  /**
   * 关闭抽屉时的回调
   */
  onClose: () => void
  /**
   * 抽屉完全打开后的回调
   */
  afterOpen?: () => void
  /**
   * 抽屉完全关闭后的回调
   */
  afterClose?: () => void
}