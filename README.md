
# LinuxMonitor前端
## 运行命令

```bash
# 安装依赖
npm install

# 启动服务
npm run dev
```

## 打包命令

```bash
# 打包
npm run build
```
    
`

项目结构

```
├── dist                                  # 打包后的文件
├── node_modules                            # 依赖包
├── src                                    # 源码
│   ├── App.vue                            # 根组件
│   ├── assets                            # 静态资源
│   ├── components                        # 组件
│   ├── main.js                            # 入口文件
│   ├── router                            # 路由
│   ├── store                              # 状态管理
│   ├── styles                            # 样式
│   ├── utils                              # 工具
│   ├── views                              # 页面
│       ├── CPU                            # CPU页面
│       ├── Memory Memory页面
│       ├── Network Network页面
│       ├── System System页面
│       ├── User User页面
│   └── App.vue                            # 根组件