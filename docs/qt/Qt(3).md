---
title: Qt6 对控件的一些了解
# hidden: true
description: 记录Qt6中pushButton的了解
tags: Qt
date: 2023-08-28
outline: [1, 2, 3]
---

# 以 pushButton 为例对控件和槽函数的一些了解

以下代码无需使用 connect 调用即可实现点击事件

```cpp
void Qt_Cheat::on_SendpushButton_clicked() {...}
```

从函数名 SendpushButton 明确了使用的控件，  
clicked 决定了触发事件的方式  
`on_SendpushButton_clicked()`实现了调用的内容
