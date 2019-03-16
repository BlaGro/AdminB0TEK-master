const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let powod = args.join(" ")
  let embed = new Discord.RichEmbed()
  .setDescription(`Report Buga!`)
  .addField(`Reportujący`, message.author.send)
  .addField(`Powód reportu`, powod)

  message.guild.channels.find(`name`, "bug-report");

  message.channel.send(embed);

  return
}

module.exports.help = {
  name: "bugreport"
}
