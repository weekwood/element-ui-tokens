# Element UI Design Tokens

这是一个基于 Element UI 的组件库项目，通过完整的设计令牌系统实现主题定制和组件样式的统一管理。使用 CSS 变量和设计令牌，让 Element UI 组件更加灵活和可维护。

## 特性

- 🎨 完整的设计令牌系统
- 🔧 灵活的主题定制能力
- 📦 开箱即用的高质量样式
- 🛠️ 简单的 CLI 安装工具
- 📚 使用 Storybook 进行开发和文档化
- ⚡ 零运行时，纯 CSS 变量实现

## 开始使用

### 1. 安装依赖

首先确保你的项目已经安装了 Element UI：

```bash
yarn add element-ui
# 或者
npm install element-ui
```

### 2. 初始化设计令牌

```bash
npx element-ui-tokens init
```

这将会：
- 添加必要的依赖
- 创建 `tokens.css` 和 `element-override.scss`
- 更新你的项目配置

### 3. 在你的项目中使用

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import './styles/tokens.css';
import './styles/element-override.scss';

Vue.use(ElementUI);
```

### 4. 添加组件样式

```bash
npx element-ui-tokens add button
# 或者添加多个组件
npx element-ui-tokens add button input select
```

## 开发

如果你想参与开发：

### 安装依赖
```bash
yarn install
```

### 启动开发服务器
```bash
yarn serve
```

### 启动 Storybook
```bash
yarn storybook
```

### 构建生产版本
```bash
yarn build
```

### 构建 Storybook 静态文件
```bash
yarn build-storybook
```

### Lints and fixes files
```bash
yarn lint
```

## 设计令牌系统

项目使用了一套完整的设计令牌系统，包括：

- 颜色系统（主色、功能色、中性色）
- 间距系统
- 字体系统
- 阴影系统
- 圆角系统
- 动画系统

所有的设计令牌都在 `tokens.css` 中定义，可以通过 CSS 变量方式使用。你可以通过修改这些变量来自定义主题：

```css
:root {
  --color-primary-500: #1890ff;
  --spacing-md: 16px;
  /* ... 其他变量 */
}
```

## 组件样式

我们提供了一套完整的组件样式覆盖：

- Button 按钮
- Input 输入框
- Select 选择器
- Table 表格
- Form 表单
- Message 消息提示
- Dialog 对话框
- ...更多组件

你可以选择性地安装需要的组件样式：

```bash
# 只安装你需要的组件样式
npx element-ui-tokens add button input

# 查看可用的组件列表
npx element-ui-tokens list
```

## 目录结构

```
styles/
│   ├── tokens.css            # 设计令牌定义
│   ├── element-override.scss # Element UI 样式覆盖
│   └── components/          # 组件样式
│       ├── button.scss
│       ├── input.scss
│       └── ...
```

## 贡献指南

欢迎提交 Issue 或 Pull Request！

- Issue: https://github.com/weekwood/element-ui-tokens/issues
- Pull Request: https://github.com/weekwood/element-ui-tokens/pulls

## License

[MIT](LICENSE) © [weekwood](https://github.com/weekwood)
