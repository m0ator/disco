# 企业官网项目

一个现代化的企业官网项目，采用 React 构建，具有优雅的设计和丰富的交互效果。

## 🌟 特点

- 🎨 现代化UI设计与精美动画
- 📱 完全响应式布局（移动端优先）
- ⚡ 优化的性能与代码分割
- 🎭 流畅的过渡动画效果
- 🛠️ 模块化组件开发
- 🌐 多页面路由导航
- 🔄 状态管理与错误处理
- 💫 优雅的加载状态展示

## 🚀 主要功能

- **首页展示**
  - 企业介绍
  - 产品展示
  - 技术优势
  - 解决方案
  - 新闻动态
  - 合作伙伴
  - 成功案例
  - 荣誉资质

- **组件特性**
  - 智能加载状态
  - 错误处理机制
  - 空状态展示
  - 动画过渡效果
  - 响应式适配
  - 性能优化

- **数据统计**
  - 项目数量
  - 服务用户
  - 技术专利
  - 服务范围

## 🛠️ 技术栈

- React 18
- React Router 6
- CSS3
  - CSS变量
  - Flexbox布局
  - Grid网格
  - 动画效果
- 现代化特性
  - React.memo
  - Hooks
  - 异步加载
  - 错误边界

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/m0ator/fuzzy-winner.git

# 进入项目目录
cd fuzzy-winner

# 安装依赖
npm install

# 启动开发服务器
npm start
```

## 🔧 开发

```bash
# 运行开发环境
npm run dev

# 构建生产版本
npm run build

# 运行测试
npm test
```

## 📱 响应式设计

- 桌面端 (1200px+)
  - 多列网格布局
  - 完整功能展示
  - 优化的悬停效果

- 平板端 (768px - 1199px)
  - 适应性布局
  - 优化的交互设计
  - 合理的内容展示

- 移动端 (< 768px)
  - 单列布局
  - 触摸优化
  - 简化的界面
  - 自适应按钮

## 🎨 设计系统

- 颜色系统
  - 主色：#4285f4
  - 成功：#34a853
  - 警告：#fbbc04
  - 错误：#ea4335
  - 背景：var(--background-white)
  - 文本：var(--text-primary)

- 间距系统
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 32px

- 字体系统
  - 小号：14px (0.875rem)
  - 正文：16px (1rem)
  - 大号：18px (1.125rem)
  - 标题：24px-56px (1.5rem-3.5rem)

- 动画系统
  - 过渡：0.3s cubic-bezier(0.4, 0, 0.2, 1)
  - 淡入：fadeIn 0.5s ease
  - 旋转：rotate 1.5s linear infinite

## 📂 项目结构

```
src/
├── components/          # 通用组件
│   ├── common/         # 基础组件
│   │   ├── JobList/    # 职位列表组件
│   │   ├── Header/     # 页头组件
│   │   └── Footer/     # 页脚组件
│   └── pages/          # 页面组件
├── styles/             # 样式文件
├── assets/             # 静态资源
└── utils/              # 工具函数
```

## 🤝 贡献

欢迎提交问题和改进建议！

1. Fork 项目
2. 创建新分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情
