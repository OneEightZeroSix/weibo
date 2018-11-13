# 项目名

# 展示页面

```
https://oneeightzerosix.github.io/weibo/fontend-weibo/dist/#/home/hot
```

# 接口

# 文件结构

```
dist -静态文件夹

public -首页资源

src -开发文件夹

    assets -css,img
    
    components -复用组件

    containers -容器组件

    libs -封装工具库
```

### 1.请求首页热门

|参数|描述|
|-|-|
|containerid|频道号码|
|openApp|app识别号|
|page|页码|

```
https://m.weibo.cn/api/container/getIndex?containerid=102803&openApp=0
```

### 2.详情页的接口