---
outline: deep
---

# 自定义配置

## 使用方式

模块 1.11.03+ 版本起，Android 12+ 模块支持自定义配置覆盖模块原有的配置。

通过MT管理器，进入：
（如果没有此文件夹，请手动创建，默认不会生成）

```bash
/data/adb/MIUI_MagicWindow+/config/
```

目录下仅支持以下两个指定文件：
```bash
# 控制应用的平行视界
embedded_rules_list.xml
# 控制应用的信箱模式
fixed_orientation_list.xml
```

以下是这两个文件的指定模板：

```xml
// embedded_rules_list.xml
<package_config>
  // Demo:让X强制横屏
  <package name="com.twitter.android" fullRule="nra:cr:rcr:nr" />
</package_config>
```


```xml
// fixed_orientation_list.xml
<package_config>
  // Demo:禁用京东的信箱模式
  <package name="com.jingdong.app.mall" disable="true" />
</package_config>
```


## 相关教程

关于小米有关平行视界的配置，可以参考大佬的博客：

[【原创教程】MIUI平行视界全探索 - 御坂初琴软件屋 (ybcq.github.io)](https://ybcq.github.io/2023/02/12/【原创教程】MIUI平行视界全探索/)



关于小米有关信箱模式的配置，可以参考我在酷安发的，搜关键词"小米平板内置信箱模式详解"，一般都能搜到。

