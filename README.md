# larkUI - Taro 前端 UI 组件库

larkUI 是基于 Taro 框架开发的跨端前端 UI 组件库，支持微信小程序、支付宝小程序、百度小程序、字节跳动小程序、QQ 小程序、京东小程序、H5 等多个平台。

## 特性

- 跨端兼容：基于 Taro 框架，支持多端运行
- TypeScript 支持：完整的 TypeScript 类型定义
- 组件丰富：提供常用的 UI 组件，满足各种业务场景
- 易于使用：简洁的 API 设计，易于集成和使用
- 自定义主题：支持主题定制，满足不同项目的设计需求
- 响应式设计：适配不同屏幕尺寸的设备

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发命令

```bash
# 启动 H5 开发服务器
npm run dev:h5

# 启动微信小程序开发服务器
npm run dev:weapp
```

### 构建命令

```bash
# 构建 H5 版本
npm run build:h5

# 构建微信小程序版本
npm run build:weapp
```



### 组件示例

```tsx
// src/components/Button/index.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from '@tarojs/components';
import './index.scss';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children
}) => {
  return (
    <TouchableOpacity
      className={`lark-button lark-button--${type} lark-button--${size} ${disabled ? 'lark-button--disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      <Text className="lark-button__text">{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
```

## 项目结构

```
taro-ui-kit/
├── config/             # 项目配置文件
├── src/                # 源代码目录
│   ├── components/     # 组件目录
│   ├── pages/          # 页面目录
│   ├── styles/         # 样式目录
│   └── utils/          # 工具函数目录
├── types/              # TypeScript 类型定义
└── README.md           # 项目说明文档
```

## 组件开发

### 创建新组件

使用 Taro CLI 创建新组件：

```bash
npm run new
```

## 主题定制

larkUI 支持通过 SCSS 变量定制主题，满足不同项目的设计需求。

## 许可证

本项目采用 MIT 许可证。
