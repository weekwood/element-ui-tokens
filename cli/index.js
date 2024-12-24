#!/usr/bin/env node

const { program } = require('commander');
const { init } = require('./commands/init');
const chalk = require('chalk');

program
  .name('element-ui-tokens')
  .description('CLI to add Element UI design tokens and styles to your project')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize design tokens and styles')
  .action(init);

program
  .command('test')
  .description('Test if CLI is working')
  .action(() => {
    console.log(chalk.green('CLI is working correctly!'));
  });

program.parse(); 