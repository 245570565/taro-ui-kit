import React, { useState, useEffect } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { ChatMessageProps, ChatRole, ChatStatus } from './types'
import './index.scss'

export default function ChatMessage(props: ChatMessageProps) {
  const {
    id = `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    role,
    content = '',
    streaming = false,
    status = 'done',
    timestamp,
    riskLevel,
    showAvatar = true,
    avatarUrl,
    copyable = true,
    errorMessage,
    footer
  } = props

  const [copied, setCopied] = useState(false)

  // 处理复制功能
  const handleCopy = async () => {
    if (!content) return
    
    try {
      // 在Taro环境中使用原生复制API
      if (typeof document !== 'undefined' && document.execCommand) {
        const textarea = document.createElement('textarea')
        textarea.value = content
        textarea.style.position = 'fixed'
        textarea.style.left = '-999999px'
        textarea.style.top = '-999999px'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  // 获取角色标题
  const getRoleTitle = (): string => {
    switch (role) {
      case 'user': return '用户'
      case 'doctor': return '医生'
      case 'ai': return 'AI助手'
      case 'system': return '系统'
      default: return '未知'
    }
  }

  // 获取默认头像
  const getDefaultAvatar = (): string => {
    // 使用占位符头像，实际项目中可以替换为真实头像
    const avatars: Record<ChatRole, string> = {
      user: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=user%20avatar%20profile%20icon%20simple%20design&size=512x512',
      doctor: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=doctor%20avatar%20profile%20icon%20simple%20design&size=512x512',
      ai: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=ai%20robot%20avatar%20profile%20icon%20simple%20design&size=512x512',
      system: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=system%20settings%20avatar%20profile%20icon%20simple%20design&size=512x512'
    }
    return avatars[role]
  }

  // 格式化时间戳
  const formatTimestamp = (ts?: number): string => {
    if (!ts) return ''
    const date = new Date(ts)
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
  }

  return (
    <View className={`ui-chat-message ui-chat-message--${role}`}>
      {showAvatar && (
        <View className='ui-chat-message-avatar'>
          <Image 
            src={avatarUrl || getDefaultAvatar()} 
            className='avatar-image'
            mode='aspectFill'
          />
        </View>
      )}
      
      <View className={`ui-chat-message-content ${status === 'error' ? 'ui-chat-message-content--error' : ''}`}>
        {/* 消息头部 */}
        <View className='ui-chat-message-header'>
          <Text className={`ui-chat-message-header-title ui-chat-message-header-title--${role}`}>
            {getRoleTitle()}
          </Text>
          
          {timestamp && (
            <Text className='ui-chat-message-header-timestamp'>
              {formatTimestamp(timestamp)}
            </Text>
          )}
          
          {(status === 'thinking' || status === 'streaming' || status === 'error') && (
            <Text className={`ui-chat-message-header-status ui-chat-message-header-status--${status}`}>
              {status === 'thinking' ? '思考中' : 
               status === 'streaming' ? '生成中' : '错误'}
            </Text>
          )}
        </View>
        
        {/* 消息内容 */}
        <View className={`ui-chat-message-body ${content ? 'ui-chat-message-body--markdown' : ''}`}>
          {status === 'error' ? (
            <Text className='ui-chat-message-error'>
              {errorMessage || '发生错误，请稍后重试'}
            </Text>
          ) : (
            <>
              <Text>{content}</Text>
              {(streaming || status === 'streaming') && (
                <Text className='ui-chat-message-streaming'>
                  <Text className='ui-chat-message-streaming-dot'></Text>
                  <Text className='ui-chat-message-streaming-dot'></Text>
                  <Text className='ui-chat-message-streaming-dot'></Text>
                </Text>
              )}
            </>
          )}
        </View>
        
        {/* 风险提示 */}
        {riskLevel && (
          <View className={`ui-chat-message-risk ui-chat-message-risk--${riskLevel}`}>
            <Text className='ui-chat-message-risk-icon'>
              {riskLevel === 'high' ? '⚠️' : riskLevel === 'medium' ? '⚡' : 'ℹ️'}
            </Text>
            <Text>
              {riskLevel === 'high' ? '高风险提示：请谨慎操作' : 
               riskLevel === 'medium' ? '中风险提示：请确认信息' : '低风险提示：仅供参考'}
            </Text>
          </View>
        )}
        
        {/* 消息底部 */}
        <View className='ui-chat-message-footer'>
          {footer}
          
          {copyable && content && (
            <View className='ui-chat-message-actions'>
              <button onClick={handleCopy}>
                {copied ? '已复制' : '复制'}
              </button>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}
