const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let procent = Math.floor(Math.Random() * 10000000 | 0)
  let embed = new Discord.RichEmbed()
  .setDescription(`Procent raka użytkownika ${message.author.username}`)
  .addField(`Twój procent raka wynosi`, `${procent}`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "rak"
}
