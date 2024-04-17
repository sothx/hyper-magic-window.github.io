---
outline: deep
---

# 自定义规则(Beta)

## 使用方式

模块 1.13.05+ 版本起，在不影响模块正常升级的情况下，支持自定义新增或者覆盖模块原有的部分应用适配规则。


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
```

```bash
# Android 11
# 覆盖横屏模式的部分应用配置
/data/adb/MIUI_MagicWindow+/config/magicWindowFeature_magic_window_application_list.xml
# 覆盖横屏模式的部分应用列表
/data/adb/MIUI_MagicWindow+/config/magic_window_setting_config.xml
```

以下是文件的指定模板：

- Android 12+

```xml
// /data/adb/MIUI_MagicWindow+/config/embedded_rules_list.xml
  <!--QQ音乐强制横屏-->
  <package name="com.tencent.qqmusic" fullRule="*" />
  <!--推特强制横屏-->
  <package name="com.twitter.android" fullRule="*" />
```

```xml
// /data/adb/MIUI_MagicWindow+/config/fixed_orientation_list.xml
  <!--取消微信的左右滑动调节-->
  <package name="com.tencent.mm" disable="true" isShowDivider="false" />
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

## 捐赠

如果感觉完美横屏应用计划对你有帮助，随缘求个捐赠。

![微信支付](https://sothx.com/images/github/wechatQR.jpg)




