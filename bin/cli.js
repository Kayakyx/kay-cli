#!/usr/bin/env node
const yargs = require('yargs/yargs');
const pkg = require('../package.json');
// const argv = yargs(hideBin(process.argv)).argv
const { argv } = yargs(process.argv);
// const { argv } = yargs(process.argv).help(false); // 关闭 yargs 对 --help 的默认开启
// console.log('你说啥', argv);

const says = argv._[2];
if (argv.help || argv.h) {
  console.log(`
    usage: kaysay [say content] [options]
      options:
        -h --help       See the help
        -V  --version   Show version
        --target        Speak to who
  `);
} else if (argv.version || argv.V) {
  console.log(pkg.version);
} else if (argv.target && says) {
  console.log(`Kay says ${says} to ${argv.target}`);
} else if (says && !argv.target) {
  console.log(`Kay says ${says}`);
}
