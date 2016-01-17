import res from './resourses.json';

function aboutCmd(bot, msg) {
  bot.sendMessage(msg.channel, "Hei vaan! Nimeni on Donald Norman.");
}

function quoteCmd(bot, msg) {
  var quote = res.quotes[ Math.floor(Math.random() * (res.quotes.length)) ]
  bot.sendMessage(msg.channel, "\"*" + quote + "*\"");
}

function funnyCmd(bot, msg) {
  bot.sendMessage(msg.channel, "Hei vaan! Nimeni on Donald Norman. heh!");
}

export default {
  about: {
    func: aboutCmd,
    desc: "Tells something about this bot"
  },
  quote: {
    func: quoteCmd,
    desc: "Shows a quote from the man himself, Donald Norman"
  },
  funny: {
    func: funnyCmd,
    desc: "Says something funny (hopefully)"
  }
};
