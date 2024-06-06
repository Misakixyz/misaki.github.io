import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'Misaki-Blog | Misaki',
  description: '粥里有勺糖的博客主题，基于 vitepress 实现',
  lastUpdated: true,
  // 详见：https://vitepress.dev/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ['link', { rel: 'icon', href: '/2.ico' }]
  ],
  themeConfig: {
    lastUpdatedText: '上次更新于',
    logo: '/logo.ico',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: "Qt",
        items: [
          { text: "Qt6 + vscode + cmake", link: "/qt/Qt(1).md" },
          { text: "Qt6 遇到的一些问题", link: "/qt/Qt(2).md" },
          { text: "Qt6 对控件的一些了解", link: "/qt/Qt(3).md" },
        ],
      },
      {
        text: "C++",
        items: [{ text: "智能指针", link: "/C++/1-智能指针.md" }],
      },
      {
        text: "数据结构",
        items: [{ text: "顺序查找", link: "/数据结构/查找/顺序查找.md" }],
      },
      {
        text: "设计模式",
        items: [
          { text: "1-设计模式原则", link: "/设计模式/1-原则.md" },
          { text: "2-单例模式", link: "/设计模式/2-单例模式.md" },
          { text: "3-简单工厂模式", link: "/设计模式/3-简单工厂模式.md" },
        ],
      },
      { text: '关于作者', link: 'https://sugarat.top/aboutme.html' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      }
    ]
  }
})
