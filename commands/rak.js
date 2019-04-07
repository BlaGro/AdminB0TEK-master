const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  var liczba = Math.floor(Math.random() * 101 | 0)
  let embed = new Discord.RichEmbed()
  .setDescription(`Wskaźnik raka użytkownika ${message.author.username}`)
  .addField(`Wskaźnik raka wynosi`, `${liczba}%`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "rak"
}
