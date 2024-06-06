---
title: Qt6 textEdit遇到的一些问题
# hidden: true
description: 记录Qt6中textEdit遇到的问题
tags: Qt
date: 2023-08-27
outline: [1, 2, 3]
---

# 关于 Qt6 中 textEdit 的加粗、斜体、下划线

给 textEdit、PineTextEdit 添加 clcik(bool check)  
注意：同时开启 checkable 状态，就可以直接使用到 check

```cpp
// 加粗
ui->MsgtextEdit->setFontWeight(QFont::Bold);

// 斜体
ui->MsgplainTextEdit->setFontItalic(checked);

// 下划线
void Qt_Cheat::on_UnderlinepushButton_clicked(bool checked) {}
ui->MsgplainTextEdit->setUnderline(checked);
```
