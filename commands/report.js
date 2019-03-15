const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let embed = new Discord.RichEmbed()
  .setDescription(`Zgłoszenie`)
  .addField(`Zgłaszający: ${message.author.username}`)
  .addField(`Zgłoszony: ${osoba}`)
  .addField(`Treść`, args.join(" "))
  message.channel.send(embed);
}

module.exports.help = {
  name: "report"
}
