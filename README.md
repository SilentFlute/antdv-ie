# 概览
为了兼容低版本浏览器(`ie9+`), 以及考虑到实现上的问题, 这里采用[vue2.x](https://v2.cn.vuejs.org/)和[antdv1.x](https://1x.antdv.com/docs/vue/introduce-cn/)

# 各工具版本信息
- `nodejs`: `v16.17.0`
- `yarn`: `v1.22.18`

# vite按需导入antdv
[vite 怎么使用](https://github.com/umijs/babel-plugin-import/issues/564#issuecomment-755043783)

# 关于cli工具
这里要使用`vue2.x`, 而一开始的工具用的是`create-vue`, 是用来生成`vue3.x`的项目, 看了`vue2.x`的文档发现以前用来生成`vue2.x`项目的`vue-cli`已经是维护模式(maintenance mode)了, 现在生成`vue2.x`的工具也是`create-vue`, 而之前装的是`create-vue` `v3`, 现在如果直接运行, 生成的还是`vue3.x`的项目, 于是需要卸载了, 然后重新安装适用于生成`vue2.x`项目的`v2`版本的`create-vue`, 详情可查看文档: [create-vue](https://github.com/vuejs/create-vue)