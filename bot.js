"use strict";

import chalk from 'chalk';
import Discord from 'discord.js'

import auth from "./config/auth.json";
import config from "./config/config.json";

var commands = require("./plugins");

var bot = new Discord.Client();

bot.on("ready", function() {
  // Set username according to config
  console.log(chalk.cyan('Setting username to ' + chalk.cyan.bold(config.name) + '...'));
  bot.setUsername(config.name);

  // TODO: Join servers listed in the config file
  console.log(chalk.cyan('Joining servers listed in the config file...'));
  
  console.log(chalk.green('Bot started succesfully! Currently joined to '
			  + chalk.green.bold(bot.servers.length) + ' server(s).'));
});

bot.on("message", function(msg) {
  if (msg.content[0] == config.prefix) {
    let command = msg.content.toLowerCase().split(' ')[0].substring(1);
    let params = msg.content.substring(command.length + 2);
    let cmd = commands.default[command];

    //console.log("Command: " + command);
    //console.log("Parameter(s): " + params);

    // If command was found from the plugins, call its function
    if (cmd) 
      cmd.func(bot, msg, params);
  }
  // See if the name of the bot was mentioned
  else if (msg.isMentioned(bot.user)) {
    console.log(chalk.cyan('Bot mentioned!'));
    bot.sendMessage(msg.channel, "Joku taisi mainita minut, Donald Normanin!");
  }
});

bot.login(auth.email, auth.password);
