const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  message.channel.send("Wczytywanie sapera..")
  setTimeout(function() {
    message.channel.send("Wczytano saper!")
    message.channel.send(`Saper dla użytkownika @${message.author.tag}\n||:one:|| ||:one:|| ||:one:|| ||:one:|| ||:one:||\n||:bomb:|| ||:one:|| ||:bomb:|| ||:one:|| ||:bomb:||\n||:bomb:|| ||:one:|| ||:bomb:|| ||:one:|| ||:bomb:||\n||:one:|| ||:one:|| ||:one:|| ||:one:|| ||:one:||\n||:bomb:|| ||:bomb:|| ||:one:|| ||:one:|| ||:one:||`)
  }, 5000);
}

module.exports.help = {
  name: "saper"
}
