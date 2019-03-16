const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let powod = args.join(" ")
  let embed = new Discord.RichEmbed()
  .setDescription(`Report Buga!`)
  .addField(`Reportujący`, message.author.send)
  .addField(`Powód reportu`, powod)

  let kanal = message.guild.channels.find(`name`, "bug-report")
  if(!kanal) return message.channel.send(`Nie znaleziono kanału`)

  message.delete().catch(O_o=>{});
  kanal.send(embed);

  return
}

module.exports.help = {
  name: "bugreport"
}
