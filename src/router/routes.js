// src/router/routes.js

// 1. 扫描所有页面配置
const pages = import.meta.glob("../views/**/page.js", {
  eager: true,
  import: "default",
});

// 2. 预加载所有页面组件
const components = import.meta.glob("../views/**/index.vue");

// 3. 生成路由配置
const routes = Object.entries(pages).map(([pagePath, meta]) => {
  const routePath = generateRoutePath(pagePath);
  const routeName = generateRouteName(routePath);
  const componentPath = pagePath.replace("page.js", "index.vue");
  
  return {
    path: routePath,
    name: routeName,
    component: () => components[componentPath](), // 修改这里，确保是函数调用
    meta,
  };
});

// 辅助函数：根据文件路径生成路由路径
function generateRoutePath(pagePath) {
  // 从文件路径中提取目录名
  const match = pagePath.match(/\.\.\/views\/([^/]+)/);
  if (!match) return "/";
  
  const dirName = match[1];
  // 如果是 index 目录，返回根路径
  if (dirName === "index") return "/";
  // 否则返回目录名作为路径
  return `/${dirName}`;
}

// 辅助函数：根据路由路径生成路由名称
function generateRouteName(routePath) {
  if (routePath === "/") return "index";

  return routePath
    .split("/")
    .filter(Boolean)
    .join("-");
}

export default routes;
