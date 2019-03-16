const Discord = requre("discord.js");

module.exports.run = async(bot, message, args) => {
  let powod = args.join(" ")
  let embed = new Discord.RichEmbed()
  .setDescription(`Report Buga!`)
  .addField(`Reportujący: ${message.author.mention}`)
  .addField(`Powód reportu`, powod)
  message.channel.send(embed);

  channel.guild.channels.find(`name`, "bug-report")
}

module.exports.help = {
  name: "bugreport"
}
