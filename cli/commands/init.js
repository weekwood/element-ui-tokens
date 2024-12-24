const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

async function init() {
  console.log(chalk.blue('Initializing Element UI Design Tokens...'));

  // 创建目标样式目录
  const targetStylesDir = path.join(process.cwd(), 'src/styles');
  await fs.ensureDir(targetStylesDir);

  // 使用项目中现有的样式文件作为源
  const sourceStylesDir = path.join(__dirname, '../../../src/styles');
  
  try {
    // 复制所有样式文件
    await fs.copy(sourceStylesDir, targetStylesDir);

    console.log(chalk.green('✔ Created style files'));
    console.log(chalk.blue('\nNext steps:'));
    console.log('1. Import the styles in your main.js:');
    console.log(chalk.cyan(`
    import './styles/tokens.css';
    import './styles/element-override.scss';
    `));
    
    console.log('\n2. Add required dependencies:');
    console.log(chalk.cyan(`
    npm install -D sass sass-loader@10
    # or
    yarn add -D sass sass-loader@10
    `));

  } catch (error) {
    console.error(chalk.red('Error copying files:'), error);
    process.exit(1);
  }
}

module.exports = { init }; 