const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`Kanał ${guild.channel.name}`)
  .addField("Temat kanału", guild.channel.topic)
  .addField("Wiadomości", guild.channel.typingCount)
  .addField("Kategoria", guild.channel.parent)
  .addField("Użytkownicy", guild.channel.members)
  .addField("ID ostatniej wiadomości", guild.channel.lastMessageID)
  .addField("NSFW", guild.channel.nsfw)
  .addField("Nazwa", guild.channel.name)
  .addField("Pozycja", guild.channel.position)
  message.channel.send(embed);
}

module.exports.help = {
  name: "kanal"
}
