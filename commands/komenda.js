const Discord = require("discord.js");

module.exports.run = async(bot, message, args => {
  let embed = new Discord.RichEmbed();
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  .setDescription(`Report`)
  .addField(`Reportowany: ${osoba}`)
  .addField(`Przez: ${message.author.username}`)
  .addField(`Powód`, args.join(' '))
});

module.exports.help = {
  name: "report"
}
