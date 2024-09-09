import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "完美横屏应用计划",
  description: "Hyper OS For Pad/Fold 完美横屏应用计划（Magisk模块）",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/module-download' },
      { text: '打赏', link: '/donation'},
      { text: '精选应用', link: '/excellent-application' },
      { text: '自定义规则(Beta)', link: '/custom-config' },
      { text: '游戏显示布局', link: '/game-mode' }, 
      { text: '问题合集(FAQ)', link: '/FAQ' },
      { text: '许可协议', link: '/license-agreement' },
      { text: '感谢', link: '/thanks' },
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sothx/mipad-magic-window' }
    ]
  }
})
