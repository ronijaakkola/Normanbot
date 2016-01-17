function kickCmd(bot, msg, suffix) {
  bot.sendMessage(msg.channel, "Selvä! Potkin käyttäjän " + suffix);
}

export default {
  kick: {
    func: kickCmd,
    desc: "Kicks the given player from the server."
  },
};
