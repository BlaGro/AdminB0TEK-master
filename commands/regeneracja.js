const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription("Regeneracja!")
  .addField("Zregenerowano", `${Math.floor(Math.random() * 101 | 0)} zdrowia!`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "regeneracja"
}
