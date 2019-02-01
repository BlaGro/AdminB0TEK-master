const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  let embed = new Discord.RichEmbed()
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let powod = args.join(" ")
  .addField("Wyzwanie dla:", osoba) else("Nie oznaczono osoby"))
  .addField("Treść", powod) else("Nie podano treści wyzwania"))
  message.channel.send(embed);
}

module.exports.help = {
  name: "wyzwanie"
}
