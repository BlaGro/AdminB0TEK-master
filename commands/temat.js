const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let powod = args.join(' ')
  guild.channel.setTopic(powod)
}

module.exports.help = {
  name: "temat"
}
