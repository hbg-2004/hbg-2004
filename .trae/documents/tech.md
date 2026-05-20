
# 家具装修攻略网站 - 技术架构文档

## 1. 技术选型

| 分类 | 技术 | 版本 | 说明 |
|------|------|------|------|
| 框架 | Vue | 3.5.x | 前端框架 |
| 语言 | TypeScript | 6.0.x | 类型安全 |
| 构建 | Vite | 8.0.x | 构建工具 |
| 样式 | Tailwind CSS | 3.x | CSS框架 |
| 路由 | Vue Router | 5.0.x | 路由管理 |
| 状态 | Pinia | 3.0.x | 状态管理 |
| 图标 | Lucide Vue | -next | 图标库 |

## 2. 项目结构

```
src/
├── components/          # 通用组件
│   ├── Header.vue       # 头部导航
│   ├── Footer.vue       # 页脚
│   ├── Card.vue         # 攻略卡片
│   └── Hero.vue         # 首页横幅
├── views/               # 页面视图
│   ├── Home.vue         # 首页
│   ├── Category.vue     # 分类页
│   ├── Detail.vue       # 攻略详情页
│   └── Style.vue        # 风格展示页
├── router/              # 路由配置
│   └── index.ts
├── stores/              # 状态管理
│   └── guide.ts
├── data/                # 模拟数据
│   └── guides.ts
├── App.vue
└── main.ts
```

## 3. 页面路由

| 路径 | 组件 | 说明 |
|------|------|------|
| / | Home.vue | 首页 |
| /category/:type | Category.vue | 分类页 |
| /detail/:id | Detail.vue | 攻略详情 |
| /style | Style.vue | 风格展示 |

## 4. 数据模型

### Guide（攻略）
```typescript
interface Guide {
  id: number
  title: string
  cover: string
  category: string
  style: string
  summary: string
  content: string
  tags: string[]
  views: number
}
```

### Category（分类）
```typescript
interface Category {
  id: string
  name: string
  icon: string
  description: string
}
```

## 5. 部署配置

### Vercel 配置
- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js 版本：20.x

### vite.config.ts
```typescript
export default {
  base: '/',
  build: {
    outDir: 'dist'
  }
}
```
