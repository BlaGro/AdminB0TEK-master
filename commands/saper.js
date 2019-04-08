const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  message.channel.send("Wczytywanie sapera..")
  setTimeout(function() {
    message.channel.send("Wczytano saper!")
    .addField(`Saper dla użytkownika @${message.author.tag}`, `||:one:|| ||:one:|| ||:one:|| ||:one:|| ||:one: ||\n||:bomb:|| ||:one:|| ||:bomb:|| ||:one:|| ||:bomb: ||\n||:bomb:|| ||:one:|| ||:bomb:|| ||:one:|| ||:bomb: ||\n||:one:|| ||:one:|| ||:one:|| ||:one:|| ||:one: ||\n||:bomb:|| ||:bomb:|| ||:one:|| ||:one:|| ||:one: ||`)
    message.channel.send(embed);
  }, 5000)
}

module.exports.help = {
  name: "saper"
}
