#!/usr/bin/env node
const yargs = require('yargs/yargs')(process.argv);
yargs
  .usage('kaysayplus [content] [options]')
  .version(require('../package.json').version)
  .help('help')
  .alias([
    { h: 'help' },
    { V: 'version' },
  ])
  .options({
    target: {
      describe: 'Speak to who',
      type: 'string',
    },
  });

const { argv } = yargs;

const says = argv._[2]; // content
if (argv.target && says) {
  console.log(`Kay says ${says} to ${argv.target}`);
  process.exit();
} else if (says && !argv.target) {
  console.log(`Kay says ${says}`);
  process.exit();
} else {
  yargs.showHelp();
  process.exit();
}
