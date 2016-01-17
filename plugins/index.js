import glob from 'glob';
import ramda from 'ramda';
import chalk from 'chalk';

// The nifty idea of using ramda to map all plugin exports together is from
// the awesome Gravebot by Gravestorm. Check it out, it's an awesome Discord bot:
// https://github.com/Gravestorm/Gravebot

let glob_options = {
  realpath: true,
  nodir: true
};

let files = ramda.flatten([
  glob.sync('./plugins/plugins/*/index.js', glob_options)
]);

let commands = ramda.mergeAll(ramda.map(js_path => {
  return require(js_path).default;
}, files));

console.log("Exporting commands...");

export default commands;
