---
outline: deep
---

# 自定义规则(Beta)

## 使用方式

模块 1.13.05+ 版本起，在不影响模块正常升级的情况下，支持自定义新增或者覆盖模块原有的部分应用适配规则。

(Tips：获取应用的Activity推荐使用MT管理器)

目前的规则优先如下：

应用自适配规则>模块自定义规则>模块内置规则

请注意，如果应用本身已经主动适配了平板（如酷安、微博、微信、京东等），这类应用无法再进行平行视界相关的适配，规则也不会奏效。


通过MT管理器，进入：
（如果没有此文件夹，请手动创建，默认不会生成）

```bash
/data/adb/MIUI_MagicWindow+/config/
```

目录下仅支持以下指定文件：

```bash
# Android 12+
# 覆盖平行窗口的部分应用配置
/data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml
# 覆盖信箱模式的部分应用配置
/data/adb/MIUI_MagicWindow+/config/fixed_orientation_list.xml
# 覆盖应用布局优化的部分应用配置
/data/adb/MIUI_MagicWindow+/config/autoui_list.xml
```

```bash
# Android 11
# 覆盖横屏模式的部分应用配置
/data/adb/MIUI_MagicWindow+/config/magicWindowFeature_magic_window_application_list.xml
# 覆盖横屏模式的部分应用列表
/data/adb/MIUI_MagicWindow+/config/magic_window_setting_config.xml
```

以下是文件的指定模板：

Tips: 强制横屏仅适用于平板，对于 Mix Fold 折叠屏系列，小米有单独一套自己的强制横屏策略，因此不生效。

- Android 12+

```xml
// /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml
  <!--QQ音乐强制横屏-->
  <package name="com.tencent.qqmusic" fullRule="nra:cr:rcr:nr" />
  <!--推特强制横屏-->
  <package name="com.twitter.android" fullRule="nra:cr:rcr:nr" />
  <!--让哔哩哔哩HD在竖屏时候也能使用-->
  <package name="tv.danmaku.bilibilihd" fullRule="nra:cr:rcr:nr" />
```

```xml
// /data/adb/MIUI_MagicWindow+/config/fixed_orientation_list.xml
  <!--取消微信的左右滑动调节-->
  <package name="com.tencent.mm" disable="true" isShowDivider="false" />
```

```xml
// /data/adb/MIUI_MagicWindow+/config/autoui_list.xml
  <!--禁用QQ邮箱的应用布局优化-->
  <package name="com.tencent.androidqqmail" enable="false" />
```

- Android 11

```xml
// /data/adb/MIUI_MagicWindow+/config/magicWindowFeature_magic_window_application_list.xml
  <!--QQ音乐适配改为平行视界-->
  <package window_mode="2" support_multi_resume="false" support_fullscreen_video="true" support_camera_preview="true" is_scaled="false" need_relaunch="false" default_setting="" is_dragable="true" is_left_window_one_third="" notch_adapt="false" version="" home="" name="com.tencent.qqmusic" />
  <!--推特强制横屏-->
  <package window_mode="4" support_multi_resume="false" support_fullscreen_video="true" support_camera_preview="true" is_scaled="false" need_relaunch="false" default_setting="" is_dragable="true" is_left_window_one_third="" notch_adapt="false" version="" home="" name="com.twitter.android" />
```

```xml
// /data/adb/MIUI_MagicWindow+/config/magic_window_setting_config.xml
  <!--Tips:如果是模块已经存在的应用不需要加这个文件，新增应用才需要追加-->

  <!--启用QQ的横屏模式-->
  <setting name="com.tencent.mobileqq" miuiMagicWinEnabled="true" miuiDialogShown="false" miuiDragMode="0"/>
```

以上所有修改均需要手动重启平板后生效～


## 相关教程

有关小米平行视界的规则配置，可以参考大佬的博客：

[【原创教程】MIUI平行视界全探索 - 御坂初琴软件屋 (ybcq.github.io)](https://ybcq.github.io/2023/02/12/【原创教程】MIUI平行视界全探索/)

有关小米信箱模式的规则配置，可以参考我的博客：

[小米平板内置信箱模式简析](https://sothx.com/2024/04/18/xiaomiPadFixedOrientationList/)

有关小米应用布局优化的规则配置，可以参考我的博客：

（施工中，暂无链接QwQ）

## 其他说明

1. 为什么有些应用强制横屏没有用？

如果一些应用自身已经做了平板适配，此时可能会导致强制横屏的逻辑不生效，可以通过禁用该应用的信箱模式，再添加强制横屏的规则，实现强制横屏。

```xml
// /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml
  <!--酷狗音乐强制横屏-->
  <package name="com.kugou.android" fullRule="nra:cr:rcr:nr" />
```

```xml
// /data/adb/MIUI_MagicWindow+/config/fixed_orientation_list.xml
  <!-- 禁用酷狗音乐的信箱模式 -->
  <package name="com.kugou.android" disable="true" />
```

具体原因可以阅读有关小米信箱模式的简析：

[小米平板内置信箱模式简析](https://sothx.com/2024/04/18/xiaomiPadFixedOrientationList/)


2. 有关如何让京东恢复平行视界的教程（需要搭配老版本京东客户端）：

以下最后一版支持平行视界的京东客户端(版本号:12.4.2)

链接: https://caiyun.139.com/m/i?135CmsmFKa3Tq  
提取码:HFqV

并配置以下自定义规则：

```xml
<!-- /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml-->
  <!--京东平行视界规则(仅限12.4.2及更早版本的京东客户端)-->
  <package name="com.jingdong.app.mall" isShowDivider="true" supportFullSize="true" splitRatio="0.3" placeholder="com.jingdong.app.mall.MainFrameActivity:com.jd.lib.search.view.Activity.SearchActivity" splitPairRule="com.jingdong.app.mall.MainFrameActivity:*,com.jd.lib.search.view.Activity.SearchActivity:*,com.jd.lib.search.view.Activity.ProductListActivity:*,com.jd.lib.jshop.jshop.JshopMainShopActivity:*" flags="reusePreContainer:com.jd.lib.comment.view.activity.CommentsActivity" transitionRules="com.jingdong.app.mall.main.MainActivity" activityRule="com.jd.lib.mylive.view.activity.VideoLiveRoomActivity,com.jingdong.manto.ui.MantoActivitySingleProcess" defaultSettings="true" />
```

```xml
<!-- /data/adb/MIUI_MagicWindow+/config/fixed_orientation_list.xml -->
  <!--恢复京东的信箱模式(仅限12.4.2及更早版本的京东客户端)-->
  <package name="com.jingdong.app.mall"  supportFullSize="true" />
```

3. 有关如何让QQ音乐使用模块老版本带折叠屏播放器适配的教程：

由于带折叠屏播放器的版本随着QQ音乐的更新，判断有做修改，而且也存在比较多的副作用，因此改为没什么BUG的强制横屏，如果需要使用老模块提供的QQ音乐适配，可以手动配置以下的自定义规则
```xml
<!-- /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml-->
  <!--QQ音乐平行视界规则(首页带折叠屏播放器)-->
  <package name="com.tencent.qqmusic" flags="reusePreContainer:com.tencent.qqmusic.business.playernew.view.FoldScreenNewPlayerActivity,com.tencent.qqmusic.business.playernew.view.PadNewPlayerActivity,com.tencent.qqmusic.activity.AppStarterActivity;useSameTfcOnCreateInPortrait:com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar,com.tencent.qqmusic.activity.AppStarterActivity;ignoreActivityBelowWhenJudgeMiddle:com.tme.mlive.framework.ui.LivePagerActivity" placeholder="com.tencent.qqmusic.activity.AppStarterActivity:com.tencent.qqmusic.business.playernew.view.FoldScreenNewPlayerActivity" splitRatio="0.4" isShowDivider="true" supportCameraPreview="true" splitPairRule="com.tencent.qqmusic.activity.AppStarterActivity:*,*:com.tencent.qqmusic.business.playernew.view.FoldScreenNewPlayerActivity" activityRule="com.tme.qqmusic.knative.kuikly.container.KuiklyRenderActivity,com.tencent.qqmusic.activity.YoungModeActivity,com.tencent.qqmusic.activity.AppStarterActivity,com.tencent.qqmusic.share.sharedialog.ShareSongDialogActivity,com.tencent.qqmusic.com.cocos.lib.nolib.MusicWorldActivity,com.tencent.qqmusic.activity.CommentInputActivity,com.tencent.qqmusic.activity.baseactivity.StartUpPrivacyPolicyActivity,com.tencent.qqmusic.activity.welcome.WelcomeActivity,com.tencent.qqmusic.activity.LoginActivity,com.tencent.qqmusic.activity.PortMVPlayerActivity,com.tencent.qqmusic.activity.ShareFeedActivity,com.tencent.qqmusic.activity.baseactivity.StartConfigActivity,com.tencent.qqmusic.activity.EditFolderDetailActivity,com.tencent.qqmusic.fragment.folderalbum.diyfolder.EditFolderTemplateActivity,com.tencent.qqmusic.activity.EditFolderCoverActivity,com.tencent.qqmusic.fragment.folderalbum.diyfolder.EditFolderDynamicBgActivity,com.tencent.qqmusic.fragment.folderalbum.diyfolder.EditFolderDynamicHeadActivity,com.tencent.picker.activity.PictureSelectorActivity,com.tencent.qqmusic.activity.VideoCommentDialogActivity,com.tencent.qqmusic.activity.WebViewActivity,com.tencent.qqmusic.fragment.mv.resolution.MvResolutionActionSheet,com.tencent.qqmusic.activity.DanmuCommentActivity,com.tencent.qqmusic.activity.SharePortVideoActivity,com.tencent.qqmusic.activity.PostMomentActivity,com.tencent.qqmusic.activity.FragmentActivityWithBottomAnim,com.tencent.qqmusic.activity.LoginSecureVerificationWebViewActivity,com.tencent.qqmusic.business.privacypolicy.litemode.PrivacyBaseModeActivity,com.tencent.qqmusic.business.playernew.view.PadNewPlayerActivity,com.tencent.qqmusic.share.sharedialog.ShareScreenShotDialogActivity" transitionRules="com.tencent.qqmusic.activity.AppStarterActivity,com.tencent.qqmusic.activity.baseactivity.StartUpPrivacyPolicyActivity,com.tencent.qqmusic.activity.welcome.WelcomeActivity,com.tencent.qqmusic.activity.LoginActivity,com.tencent.qqmusic.activity.PortMVPlayerActivity,com.tencent.qqmusic.activity.ShareFeedActivity,com.tencent.qqmusic.activity.baseactivity.StartConfigActivity,com.tencent.qqmusic.activity.baseactivity.StartConfigActivity,com.tencent.qqmusic.activity.EditFolderDetailActivity,com.tencent.qqmusic.fragment.folderalbum.diyfolder.EditFolderTemplateActivity,com.tencent.qqmusic.activity.EditFolderCoverActivity,com.tencent.qqmusic.fragment.folderalbum.diyfolder.EditFolderDynamicBgActivity,com.tencent.qqmusic.fragment.folderalbum.diyfolder.EditFolderDynamicHeadActivity,com.tencent.picker.activity.PictureSelectorActivity,com.tencent.qqmusic.activity.VideoCommentDialogActivity,com.tencent.qqmusic.activity.WebViewActivity,com.tencent.qqmusic.fragment.mv.resolution.MvResolutionActionSheet,com.tencent.qqmusic.activity.DanmuCommentActivity,com.tencent.qqmusic.activity.SharePortVideoActivity,com.tencent.qqmusic.activity.PostMomentActivity,com.tencent.qqmusic.activity.FragmentActivityWithBottomAnim,com.tencent.qqmusic.activity.LoginSecureVerificationWebViewActivity,com.tencent.qqmusic.business.privacypolicy.litemode.PrivacyBaseModeActivity,com.tme.mlive.framework.ui.LivePagerActivity,com.tencent.qqmusic.share.sharedialog.ShareScreenShotDialogActivity" />
```

4. 有关如何让QQ音乐使用旧版的应用布局优化


QQ音乐新版修改了播放器界面，导致新版无法再支持应用布局优化，如果需要使用QQ音乐的应用布局优化请搭配老版本的QQ音乐客户端。

老版本QQ音乐客户端下载:

链接:  https://caiyun.139.com/m/i?135Cdk87uVQyP

老版本QQ音乐的适配规则:

```xml
<!-- /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml-->
  <!--让QQ音乐强制横屏-->
  <package name="com.tencent.qqmusic" fullRule="nra:cr:rcr:nr" />
```

```xml
<!-- /data/adb/MIUI_MagicWindow+/config/auto_ui_list.xml-->
  <!--QQ音乐应用布局优化规则-->
  <package name="com.tencent.qqmusic" enable="true" activityRule="com.tencent.qqmusic.business.playernew.view.PadNewPlayerActivity:1:ibw-17,kdo-17,kgx-16,m5z-17,kpw-17,TextView-16,ju9-16,ds6-16,ihq-16,ihy-16,ihu-16,ihx-16,o5-16,i_s-16,ihw-16,ju_-16,idi-16,me5-16,idj-16,ie3-16,ie2-16,idz-16,ie8-16,ie7-16,iea-16,ie_-16,ied-16,mki-16,ehq-16,i_w-16,ju_-16,bgd-16,bg0-16,bg9-16,igw-16,iag-16,i_t-16,ifr-16,if6-16,iee-16,ial-16,dc1-15;" optimizeWebView="true" />
```

5. 酷安使用官方的适配规则而不是模块的规则:

可以通过下述配置，让酷安使用官方的适配规则，而不是模块的规则

```xml
<!-- /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml-->
  <!--酷安使用官方的适配规则-->
  <package name="com.coolapk.market" fullRule="nra:cr:rcr:nr" />
```

6. 酷安强制横屏(不进入平行视界)：

酷安允许反向适配，所以可以通过下述方式，让酷安无论如何都不进入平行视界，而是强制横屏。

```xml
<!-- /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml-->
  <!--让酷安强制横屏，不进入平行视界-->
  <package name="com.coolapk.market" clearTop="false" splitMinWidth="1200" />
```

## 打赏

如果感觉完美横屏应用计划对你有帮助，求个随缘打赏。

![微信支付](https://sothx.com/images/github/wechatQR.jpg)




