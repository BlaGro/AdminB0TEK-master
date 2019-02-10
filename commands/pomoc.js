const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription("Książka pomocy")
  .addField("Komendy", "wyświetla komendy")
  .addField("Autorzy", "Wyświetla autorów")
  .addField("Informacyjne", "Wyświetla komendy Informacyjne")
  .addField("4FUN", "Wyświetla komendy 4FUN")
  if(args[0] == "Komendy") {
    .addField(`${prefix}zapros`, "**Link do zaproszenia**")
  }
  message.author.send(embed);
  message.channel.send(`Wysłano liste komend dla użytkownika: ${message.author.username}`)
}

module.exports.help = {
  name: "pomoc"
}
