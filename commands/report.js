const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  .setDescription(`Zgłoszenie`)
  .addField(`Zgłaszający: ${message.author.name}`)
  .addField(`Zgłoszony: ${osoba}`)
  .addField(`Treść`, args.join(" "))
  message.channel.send(embed);
}

module.exports.help = {
  name: "report"
}
