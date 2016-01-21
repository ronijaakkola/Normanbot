function aboutCmd(bot, msg) {
  bot.sendMessage(msg.channel, "Hei vaan! Nimeni on Donald Norman.");
}

function funnyCmd(bot, msg) {
  bot.sendMessage(msg.channel, "Hei vaan! Nimeni on Donald Norman, heh!");
}

export default {
  about: {
    func: aboutCmd,
    desc: "Tells something about this bot"
  },
  funny: {
    func: funnyCmd,
    desc: "Says something funny (hopefully)"
  }
};
