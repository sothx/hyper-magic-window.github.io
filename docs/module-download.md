---
outline: deep
---

# 下载模块

## 版本说明

### 小米平板通用版

适配红米平板,小米平板以及各种基于MIUI14 For Pad / Hyper OS for Pad移植包的机型，均可刷此模块，正常情况下不会遇到任何问题，仅在我自己的小米平板6 Pro上测试通过，其他机型不保证不会出现卡米、变砖的可能性，建议自己有充足的玩机、救砖知识再去使用本模块。

**推荐机型系统列表(2024-03-16更新)**

- Xiaomi Pad 6 [Hyper OS For Pad 1.0.2.0 +]
- Xiaomi Pad 6 Pro [Hyper OS For Pad 1.0.2.0 +]
- Xiaomi Pad 5 Pro 12.4 [Hyper OS For Pad 1.0.1.0 +]
- Redmi Pad SE [Hyper OS For Pad  1.0.2.0 +]
- Redmi Pad [Hyper OS For Pad  1.0.3.0 +]
- Xiaomi Pad 6 Max 14 [所有版本]


### 小米平板6S Pro专版(适配3：2比例平板)

基本与小米平板通用版没有区别，仅针对部分应用在3：2比例下体验不佳的情况进行差异化适配。

**推荐机型系统列表(2024-03-16更新)**
- Xiaomi Pad 6S Pro [Hyper For Pad 1.0.4.0 +]

### 小米折叠屏专版(仅Mix Fold系列)

适配小米Mix Fold 折叠屏系列，仅推荐折叠屏的机型。

**推荐机型系统列表(2024-03-16更新)**
- Xiaomi Mix Fold 1 [所有版本]
- Xiaomi Mix Fold 2 [所有版本]
- Xiaomi Mix Fold 3 [所有版本]

### 小米平板安卓13专版(无左右滑动条)

适配小米平板安卓13(除小米平板6 Max 14)下不支持左右滑动条的平行视界，推荐安卓13安装此版本，该版本针对安卓13下平行视界部分应用显示不全的问题有做单独适配优化。

**推荐机型系统列表(2024-03-16更新)**
- 除Xiaomi Pad 6 Max 14 以外的所有安卓13、安卓12的MIUI For Pad

### 小米平板安卓11专版

适配小米平板安卓11下类华为/荣耀体系的老魔窗，仅适配安卓11，安卓11的模块不支持通过系统设置直接关闭某个应用的平行视界适配(重启或者升级模块均会恢复打开状态)，需要使用 MT 管理器打开:
```bash
/data/adb/modules/MIUI_MagicWindow+/common/system/users/0/magic_window_setting_config.xml
```
​搜索要删除的应用的包名，定为到行，将该应用的miuiMagicWinEnabled设置为false即可，也可以反馈给我，在后续版本中永久移除该应用的平行视界适配。

**推荐机型系统列表**
- 所有安卓11的MIUI For Pad

### MIUI 14下的6 Max移植包专版(安卓12L+，不推荐使用)

适配以前小米平板6 Max发布后到Hyper OS For Pad更新前这段时间推出的基于小米平板6 Max的MIUI 14 For Pad移植包(Hyper OS For Pad和非移植包勿刷，刷错会卡米)，如果不知道这个版本是干嘛的，就直接忽略这个版本，该版本误刷会100%卡米！！！！！！

**推荐机型系统列表**
- 目前已经装了老版本6 Max移植包版本的模块，期望更新模块的，其他情况不推荐再装这个模块，否则卡米后果自负！！！


## 下载

-   [GitHub Release 下载](https://github.com/sothx/mipad-magic-window/releases/)

-   [123 网盘下载](https://www.123pan.com/s/L70Xjv-vAkod.html) 提取码:Bzid

> Github Release 和 123 网盘均包含最新版本和历史版本的模块安装包

## 提交适配缺陷或者适配需求

可通过 [GitHub Issues](https://github.com/sothx/hyper-magic-window.github.io/issues)提交遇到的应用缺陷和应用适配需求

## 更新日志

请通过 [GitHub Release](https://github.com/sothx/mipad-magic-window/releases/)查看模块最新的更新日志
