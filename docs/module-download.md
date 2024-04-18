---
outline: deep
---

# 下载模块

## 版本说明

### 小米平板通用版

适配基于Android 14 + 的Hyper OS for Pad（也适配Android 13的Xiaomi Pad 6 Max）,以及各类基于Android 14的Hyper OS For Pad第三方移植包的机型，均可刷此模块，正常情况下不会遇到任何问题，仅在我自己的小米平板6 Pro上测试通过，其他机型不保证不会出现卡米、变砖的可能性，建议自己有充足的玩机、救砖知识再去使用本模块。

**推荐机型系统列表(2024-04-11更新)**

- Xiaomi Pad 6 (Android 14 +)
- Xiaomi Pad 6 Pro (Android 14 +)
- Xiaomi Pad 5 Pro 12.4 (Android 14 +)
- Redmi Pad Pro (Android 14 +)
- Redmi Pad SE (Android 14 +)
- Redmi Pad (Android 14 +)
- Xiaomi Pad 6 Max 14 (Android 13 +)
- 基于 Hyper OS For Pad 的所有第三方移植包(Android 14 +)


### 小米平板安卓13专版(无左右滑动条)

适配Android 13下不支持平行视界左右滑动条的MIUI For Pad/Hyper OS For Pad，以及各类基于Android 13 MIUI For Pad的移植包机型，推荐基于Android 13底层安装此版本，该版本针对Android 13下平行视界部分应用显示不全的问题有做单独适配优化。

**推荐机型系统列表(2024-03-16更新)**
- Xiaomi Pad 5 (Android 13)
- Xiaomi Pad 5 Pro (Android 13)
- Xiaomi Pad 5 Pro 5G (Android 13)
- 所有基于Android 13的MIUI For Pad 第三方移植包


### 小米平板6S Pro专版(适配3:2比例平板)

基本与小米平板通用版没有特别大区别，仅针对部分应用在3：2比例下体验不佳的情况进行差异化适配。

**推荐机型系统列表(2024-03-16更新)**
- Xiaomi Pad 6S Pro (Android 14 +)

### 小米折叠屏专版(仅小米 Mix Fold 系列)

适配小米Mix Fold 折叠屏系列，仅推荐折叠屏的机型。

**推荐机型系统列表(2024-03-16更新)**
- Xiaomi Mix Fold 1 (Android 13 +)
- Xiaomi Mix Fold 2 (Android 13 +)
- Xiaomi Mix Fold 3 (Android 13 +)

### 小米平板安卓11专版

适配小米平板安卓11下类华为/荣耀体系的横屏模式，仅适配安卓11，安卓11的模块不支持通过系统设置直接关闭某个应用的横屏模式适配(重启或者升级模块均会恢复打开状态)，可通过模块提供的[自定义规则(Beta)](https://hyper-magic-window.sothx.com/custom-config.html)来调整某个应用的横屏模式适配，如果有体验不佳的应用也可以反馈给我，在后续版本中永久移除该应用的平行视界适配。

**推荐机型系统列表**
- Xiaomi Pad 5 (Android 11)
- Xiaomi Pad 5 Pro (Android 11)
- Xiaomi Pad 5 Pro 5G (Android 11)
- 所有基于安卓11底层MIUI For Pad第三方移植包

### MIUI 14下的6 Max移植包专版

适配以前小米平板6 Max发布后到Hyper OS For Pad更新前这段时间推出的基于小米平板6 Max的MIUI 14 For Pad移植包(Hyper OS For Pad和非移植包勿刷，刷错会卡米)，如果不知道这个版本是干嘛的，就直接忽略这个版本，该版本误刷会100%卡米！！！！！！

移植包升级到Hyper OS For Pad 之前，务必先卸载本模块，不然导致100%会导致卡米。

**推荐机型系统列表**
- 基于小米平板6 Max MIUI 14 For Pad的移植包（虽然加了很多次提示了，但还是有人不看就装，请仔细阅读并了解，，其他情况不推荐再装这个模块，否则100%导致卡米，需要自行救砖。）



## V13之前的老版本卸载模块(新版模块可以直接移除，不需要额外的卸载模块)

V13之前的老版本模块需要安装对应的卸载模块，重启后再移除卸载模块，再重启，此时才能完成模块的卸载，未遵守模块卸载方法导致的任何问题，请自行解决。

模块会锁定部分系统文件防止被系统云控覆盖模块的规则，可能会导致系统升级的时候因为权限不足导致卡米（存在概率，不敢保证），也可以提前使用卸载模块卸载后，再对系统进行升级。

请通过[GitHub Release](https://github.com/sothx/mipad-magic-window/releases/)搜索当前老版本的卸载模块进行卸载

-  小米平板安卓12L以上的卸载模块(uninstall-pad-x.xx.xx.zip)
-  小米平板安卓11的卸载模块(uninstall-pad-magicWindow-x.xx.xx.zip)
-  小米折叠屏的卸载模块(uninstall-fold-x.xx.xx.zip)


## 下载

-   [GitHub Release 下载](https://github.com/sothx/mipad-magic-window/releases/)
    -   小米平板通用版(pad-x.xx.xx.zip)
    -   小米平板6S Pro专版(pad-ratioOf3To2-x.xx.xx.zip)
    -   小米折叠屏专版(fold-x.xx.xx.zip)
    -   小米平板安卓13专版(pad-not-dragable-x.xx.xx.zip)
    -   小米平板安卓11专版(pad-magicWindow-x.xx.xx.zip)
    -   MIUI 14下的6 Max移植包专版(transplant-x.xx.xx.zip)

-   [移动云盘下载](https://caiyun.139.com/m/i?135Ce1mQo5kKV) 提取码:1s0Y

> Github Release 和 移动云盘均包含最新版本和历史版本的模块安装包

## 提交适配缺陷或者适配需求

可通过 [GitHub Issues](https://github.com/sothx/hyper-magic-window.github.io/issues)提交遇到的应用缺陷和应用适配需求

## 更新日志

请通过 [GitHub Release](https://github.com/sothx/mipad-magic-window/releases/)查看模块最新的更新日志

## 捐赠

如果感觉完美横屏应用计划对你有帮助，随缘求个捐赠。

![微信支付](https://sothx.com/images/github/wechatQR.jpg)
