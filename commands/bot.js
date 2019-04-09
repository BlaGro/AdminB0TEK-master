const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let scount = client.guilds.size
  let ucount = client.users.size
  let embed = new Discord.RichEmbed()
  .addField("Serwerów", scount)
  .addField("Użytkowników", ucount)
}

module.exports.help = {
  name: "licznik"
}
