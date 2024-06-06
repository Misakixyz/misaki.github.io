---
title: Qt6 + vscode + cmake
# hidden: true
description: 实现vscode上Qt6环境的配置
tags: Qt
# 打开评论
comment: true
date: 2023-08-05


outline: [2, 3]


---

## Vscode 插件

Qt tools、Qt Configure  
cmake（同时 PC 上安装 cmake）

## vscode 自动补全

:::=tabs  
::c_cpp_propertiter.json  
c_cpp_propertiter.json 如下：

```json
  "configurations": [
      {
        "name": "Win32",
        "includePath": [
          "${workspaceFolder}/**",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/**",
          // "C:/Program Files (x86)/Microsoft Visual Studio 14.0/VC/include",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DAnimation",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DCore",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DExtras",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DInput",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DLogic",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuick",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickAnimation",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickExtras",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickInput",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickRender",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickScene2D",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DRender",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtAccessibilitySupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtANGLE",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtBluetooth",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtCharts",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtConcurrent",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtCore",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtDataVisualization",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtDeviceDiscoverySupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtEglSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtEventDispatcherSupport",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtFbSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtFontDatabaseSupport",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtGui",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtHelp",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtLocation",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimedia",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimediaQuick_p",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimediaWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNetwork",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNetworkAuth",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNfc",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtOpenGL",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtOpenGLExtensions",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPacketProtocol",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPlatformCompositorSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPlatformHeaders",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPositioning",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPrintSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPurchasing",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQml",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQmlDebug",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuick",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickControls2",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickParticles",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickTemplates2",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickTest",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtRemoteObjects",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtRepParser",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtScxml",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSensors",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSql",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSvg",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtTest",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtThemeSupport",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtUiPlugin",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtUiTools",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebChannel",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebEngineCore",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebEngineWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebSockets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebView",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtXml",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtXmlPatterns",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtZlib"
            // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/shared",
            // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/ucrt",
            // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/um",


          // "C:/Users/Misaki/Desktop/VScode/Learn/header_file_test"
      ],
      "browse": {
        "path":[
          "${workspaceFolder}/**",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/**",
          // "C:/Program Files (x86)/Microsoft Visual Studio 14.0/VC/include",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DAnimation",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DCore",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DExtras",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DInput",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DLogic",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuick",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickAnimation",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickExtras",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickInput",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickRender",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickScene2D",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DRender",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtAccessibilitySupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtANGLE",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtBluetooth",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtCharts",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtConcurrent",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtCore",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtDataVisualization",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtDeviceDiscoverySupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtEglSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtEventDispatcherSupport",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtFbSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtFontDatabaseSupport",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtGui",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtHelp",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtLocation",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimedia",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimediaQuick_p",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimediaWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNetwork",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNetworkAuth",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNfc",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtOpenGL",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtOpenGLExtensions",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPacketProtocol",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPlatformCompositorSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPlatformHeaders",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPositioning",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPrintSupport",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPurchasing",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQml",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQmlDebug",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuick",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickControls2",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickParticles",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickTemplates2",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickTest",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtRemoteObjects",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtRepParser",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtScxml",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSensors",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSql",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSvg",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtTest",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtThemeSupport",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtUiPlugin",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtUiTools",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebChannel",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebEngineCore",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebEngineWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebSockets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebView",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWidgets",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtXml",
            // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtXmlPatterns",
            "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtZlib"
            // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/shared",
            // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/ucrt",
            // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/um",


          // "C:/Users/Misaki/Desktop/VScode/Learn/header_file_test"
        ]
      },
```

::setting.json  
setting.json 如下：

```json
    "cppcheck.includepath": [
        "${workspaceFolder}/**",
        "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/**",
        // "C:/Program Files (x86)/Microsoft Visual Studio 14.0/VC/include",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DAnimation",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DCore",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DExtras",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DInput",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DLogic",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuick",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickAnimation",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickExtras",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickInput",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickRender",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DQuickScene2D",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/Qt3DRender",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtAccessibilitySupport",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtANGLE",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtBluetooth",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtCharts",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtConcurrent",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtCore",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtDataVisualization",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtDeviceDiscoverySupport",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtEglSupport",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtEventDispatcherSupport",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtFbSupport",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtFontDatabaseSupport",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtGui",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtHelp",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtLocation",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimedia",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimediaQuick_p",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtMultimediaWidgets",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNetwork",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNetworkAuth",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtNfc",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtOpenGL",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtOpenGLExtensions",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPacketProtocol",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPlatformCompositorSupport",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPlatformHeaders",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPositioning",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPrintSupport",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtPurchasing",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQml",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQmlDebug",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuick",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickControls2",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickParticles",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickTemplates2",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickTest",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtQuickWidgets",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtRemoteObjects",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtRepParser",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtScxml",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSensors",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSql",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtSvg",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtTest",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtThemeSupport",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtUiPlugin",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtUiTools",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebChannel",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebEngineCore",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebEngineWidgets",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebSockets",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWebView",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtWidgets",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtXml",
          // "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtXmlPatterns",
          "C:/Users/Misaki/Qt/6.6.0/mingw_64/include/QtZlib",
          // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/shared",
          // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/ucrt",
          // "C:/Program Files (x86)/Windows Kits/10/Include/10.0.15063.0/um",


        // "C:/Users/Misaki/Desktop/VScode/Learn/header_file_test"
    ] ,
```

:::

## qt cmake 写法

样例如下：

```cmake
cmake_minimum_required(VERSION 3.5) # CMake install : https://cmake.org/download/
project(Qt_Chat LANGUAGES CXX)
set(CMAKE_INCLUDE_CURRENT_DIR ON)
set(CMAKE_PREFIX_PATH "c:/Users/Misaki/Qt/6.6.0/mingw_64") # Qt Kit Dir
set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


find_package(QT NAMES Qt6 Qt5 REQUIRED COMPONENTS Widgets)
find_package(Qt${QT_VERSION_MAJOR} REQUIRED COMPONENTS Widgets)
find_package(Qt6 REQUIRED COMPONENTS Core Network) # Qt COMPONENTS

# find_package(Qt6 COMPONENTS Widgets REQUIRED) # Qt COMPONENTS
aux_source_directory(./src srcs)

# Specify MSVC UTF-8 encoding
add_compile_options("$<$<C_COMPILER_ID:MSVC>:/utf-8>")
add_compile_options("$<$<CXX_COMPILER_ID:MSVC>:/utf-8>")

add_executable(
    ${PROJECT_NAME}
    WIN32 # If you need a terminal for debug, please comment this statement
    ${srcs}
)
target_link_libraries(${PROJECT_NAME} PRIVATE Qt6::Widgets Qt6::Network)  # Qt5 Shared Library
```

其中通过`find_package(Qt6 REQUIRED COMPONENTS Core Network)`、`target_link_libraries(${PROJECT_NAME} PRIVATE Qt6::Widgets Qt6::Network)`  
引入 Network
