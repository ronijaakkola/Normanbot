import res from './resources.json';
import quotes from './quotes.json';

function quoteCmd(bot, msg) {
  var quote = quotes.quotes[ Math.floor(Math.random() * (quotes.quotes.length)) ]
  bot.sendMessage(msg.channel, "\"*" + quote + "*\"");
}

function gitCmd(bot, msg) {
  bot.sendMessage(msg.channel, "Tule auttamaan kehitt‰m‰‰n minua: " + res.git);
}

export default {
  norman: {
    func: quoteCmd,
    desc: "Shows a quote from the man himself, Donald Norman"
  },
  git: {
    func: gitCmd,
    desc: "Links to the Github repository of this bot"
  }
};
