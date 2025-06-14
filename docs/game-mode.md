---
outline: deep
---

# 游戏显示布局

## 使用方式

模块 2.05.31+ 版本起，Web UI 支持配置游戏显示布局，可以改变游戏比例，获得更大的游戏视野。

Hyper OS 2.0+ 需要搭配修改版的手机管家/平板管家才会生效：

-  [移动云盘下载](https://caiyun.139.com/m/i?135Cm3g2XOMGs)

## 如何使用

通过模块 Web UI 即可配置任意游戏的显示布局，游戏应用必须添加到游戏工具箱才可以进行配置。

## 移植包主动兼容

### 适用移植包类型

小米平板 Android 15 Hyper OS 2

模块 2.12.29+ 版本起，支持移植包主动兼容配置

### 有什么用？

由于小米仅适配了大折叠的游戏显示布局，如果不反编译修改MiuiEmbeddingWindow相关服务，使用游戏显示布局会导致小米平板应用横屏适配异常。

移植包可以主动声明已做该兼容，从而可以直接使用安卓15的通用版模块而无需使用机型专版模块，避免版本不兼容导致的卡米问题。

### 声明服务修复prop
在/product/etc/build.prop添加以下prop：

```bash
 # 移植包标记模块可兼容应用横屏布局服务异常修复
ro.config.sothx_project_treble_support_magic_window_fix=true
```

### 反编译MiuiEmbeddingWindow

找到system_ext/framework/miui-embedding-window.jar，通过MT管理器反编译classes.edx，搜索：

```bash
    invoke-static {}, Landroid/sizecompat/MiuiSizeCompatManager;->getMiuiSizeCompatEnabledApps()Ljava/util/Map;

    move-result-object v2
```

替换为

```bash
    invoke-static {}, Landroid/sizecompat/MiuiSizeCompatManager;->getMiuiSizeCompatEnabledApps()Ljava/util/Map;

    move-result-object v2

    const/4 v2, 0x0
```


## 打赏

如果感觉完美横屏应用计划对你有帮助，求个随缘打赏。

![微信支付](https://sothx.com/images/github/wechatQR.jpg)




