### 项目技术架构
***
*  vue-cli
*  vue
*  axios
*  vue-router
*  vuex
*  iview
*  less
*  webpack
*  echarts

### 安装

***
项目地址: (`git clone`)
```shell
git clone https://github.com/thWinterSun/v-admin.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务: (http://localhost:8888)

```
npm run dev
```
发布代码

```
npm run build
```
***

## 功能

- 登录/登出
- 权限管理
    - 列表过滤
    - 权限切换
- 多语言切换
- 组件
    - 可拖拽列表
    - 文件上传
    - 数字渐变
- 表单编辑
- 表格
    - 可编辑表格
        - 行内编辑
        - 单元格编辑
    - 可搜索表格
- 错误页面
    - 403页面
    - 404页面
- 换肤
- 收缩侧边栏
- tag标签导航
- 面包屑导航
- 消息中心
- 个人中心

### 目录结构


├──.babelrc
├──.editorconfig
├──.eslintignore
├──.eslintrc.js   --代码检查工具配置
├──.gitignore     --git配置
├──.postcssrc.js
├──index.html     --项目入口html
├──package.json
├──README.md  	   --项目说明文件
├──td_icon.ico
│  
├─build
│      build.js
│      check-versions.js
│      dev-client.js
│      dev-server.js
│      utils.js
│      vue-loader.conf.js    --vue-loader配置文件
│      webpack.base.conf.js  --webpack配置文件
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      
├─config
│      dev.env.js
│      index.js
│      prod.env.js
│      
├─src
│  │  App.vue
│  │  main.js
│  │  
│  ├─assets
│  │      iviewLogo.png
│  │      logo.jpg
│  │      
│  ├─components
│  │      breadcrumb.vue --面包屑导航
│  │      datePicker.vue --日期组件
│  │      form.vue       --表单组件
│  │      menu.vue       --导航组件
│  │      modal.vue      --弹出层组件
│  │      progress.vue   --进度条组件
│  │      table.vue      
│  │      tabs.vue       --标签页组件
│  │      test.vue
│  │      transfer.vue   --穿梭框组件
│  │      tree.vue       --树形结构
│  │      upload.vue     --上传组件
│  │      
│  ├─images
│  │      login_bg.png
│  │      
│  ├─router
│  │      index.js
│  │      
│  └─views
│      │  404.vue
│      │  homeCon.vue
│      │  login.vue     --登录页
│      │  overview.vue
│      │  runstatus.vue
│      │  syslog.vue
│      │  
│      ├─charts
│      │      chartsCont.vue
│      │      d3.vue
│      │      echarts.vue
│      │      highCharts.vue
│      │      
│      ├─forms
│      │      basic-form.vue
│      │      updata.vue
│      │      validate-form.vue
│      │      
│      └─tables
│              basic-table.vue
│              edit-table.vue
│              filter-table.vue
│              
└─static
```
## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 &copy; philisense
