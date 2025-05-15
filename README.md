# Vite Auto Router

一个基于 Vue 3 + Vite 的自动路由项目，实现了基于文件系统的自动路由配置。

## 项目特点

- 🚀 基于 Vue 3 + Vite 构建
- 📁 文件系统自动路由
- 🎨 页面元数据配置
- 🔄 自动生成导航菜单

## 项目结构

```
src/
  views/              # 页面目录
    index/            # 首页
      index.vue       # 页面组件
      page.js         # 页面配置
    about/            # 关于页面
      index.vue
      page.js
    contact/          # 联系我们页面
      index.vue
      page.js
```

## 路由配置

每个页面目录下的 `page.js` 文件用于配置页面元数据：

```javascript
export default {
  title: "页面标题",    // 用于导航菜单显示
  menuOrder: 1        // 用于菜单排序
}
```

## 开发指南

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建项目：
```bash
npm run build
```

4. 预览构建结果：
```bash
npm run preview
```

## 技术栈

- Vue 3
- Vue Router 4
- Vite
- JavaScript