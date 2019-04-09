const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let scount = bot.guilds.size
  let ucount = bot.users.size
  const serwery = sort(guilds).map().join()
  let embed = new Discord.RichEmbed()
  .addField("Serwerów", scount)
  .addField("Użytkowników", ucount)
  .addField("Serwery", serwery)
  message.channel.send(embed);
}

module.exports.help = {
  name: "licznik"
}
