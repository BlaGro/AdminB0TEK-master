const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let stopnie = Math.floor(Math.random() * 1001 | 0)
  let embed = new Discord.RichEmbed()
  .setDescription(`Jak gorący jesteś ${message.author.username}`)
  .addField(`Twój wskaźnik gorąca wynosi`, `${stopnie}°C`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "stopnie"
}
