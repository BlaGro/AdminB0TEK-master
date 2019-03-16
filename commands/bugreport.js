const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let powod = args.join(" ")
  let embed = new Discord.RichEmbed()
  .setDescription(`Report Buga!`)
  .addField(`Reportujący: ${message.author.username}`)
  .addField(`Powód reportu`, powod)
  message.channel.send(embed);

  channel.guild.channels.find(`name`, "bug-report")
  return message.channel.send(`Nie znaleziono kanału #bug-report`)
}

module.exports.help = {
  name: "bugreport"
}
