const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`${message.author.username} oto lista komend`)
  .setColor("#26ff0")
  .addField("Bez prefixu", `Cześć\nxd\n...\njaki kozak\nlol\nlenny\naha\nty no nie wiem`)
  .addField(`Z prefixem: Hazard`, `ruletka\nmoneta`)
  .addField(`Z prefixem: Info`, `ikona-serwera\nawatar\nserwer\nping\nzapros\nuzytkownik\nbot\nserwery\nczas`)
  .addField(`Z prefixem: 4FUN`, `ascii\n8ball\nliczba\nprzyszłosc\nbcb\nmoneta\npowiedz\nrzuc <nick> <powód>\nrozmowa\n!\nrak\nstopnie\nlosowaliczba\nsaper`)
  .addField(`Z prefixem: RolePlay`, `akcja\nregeneracja\noswoj`)
  .addField(`Z prefixem: Administracyjne`, `clear\npoll`)
  .addField(`Z prefixem: Pomocne dla serwera`, `report(potrzebny kanał zgloszenia)\npropozycja(kanał propozycje potrzebny)`)
  .addField(`Funkcje`, `**Powiadomienie o:**\nStworzeniu kanału(kanał logs potrzebny)\nUsunięciu kanału(kanał logs potrzebny)\nNowym użytkowniku(wymagany kanał nowicjusze)`)
  message.author.send(embed);
  return message.channel.send(`${message.author.username} wysłano liste komend na prywatną wiadomość`)
}

module.exports.help = {
  name:"pomoc"
}
