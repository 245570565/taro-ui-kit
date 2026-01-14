export type ChatRole = 'user' | 'doctor' | 'ai' | 'system'

export type ChatStatus =
  | 'thinking'
  | 'streaming'
  | 'done'
  | 'error'

export interface ChatMessageProps {
  /** 消息唯一 id */
  id?: string

  /** 角色 */
  role: ChatRole

  /** 消息内容（支持 markdown） */
  content?: string

  /** 流式输出中 */
  streaming?: boolean

  /** 当前状态 */
  status?: ChatStatus

  /** 时间戳 */
  timestamp?: number

  /** 风险等级 */
  riskLevel?: 'low' | 'medium' | 'high'

  /** 是否展示头像 */
  showAvatar?: boolean

  /** 自定义头像 */
  avatarUrl?: string

  /** 是否可复制 */
  copyable?: boolean

  /** 错误信息 */
  errorMessage?: string

  /** 自定义 footer（操作区） */
  footer?: React.ReactNode
}
