const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`${message.author.username} oto lista komend`)
  .setColor("#26ff0")
  .addField("Bez prefixu", `Cześć\nxd\n...\njaki kozak\nlol\nlenny\naha\nty no nie wiem`)
  .addField(`Z prefixem: Hazard`, `ruletka\nmoneta`)
  .addField(`Z prefixem: Info`, `ikona-serwera\nawatar\nserwer\nping\nzapros\nuzytkownik\ncreditsy`)
  .addField(`Z prefixem: 4FUN`, `ascii\n8ball\nliczba\nprzyszłosc\nbcb\nmoneta\npowiedz\nrzuc <nick> <powód>`)
  .addField(`Z prefixem: RolePlay`, `akcja`)
  .addField(`Z prefixem: Administracyjne`, `clear\npoll`)
  .addField(`Z prefixem: Pomocne dla serwera`, `report\npropozycja`)
  message.author.send(embed);
  return message.channel.send(`${message.author.username} wysłano liste komend na prywatną wiadomość`)
}

module.exports.help = {
  name:"pomoc"
}
