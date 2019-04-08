const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  var liczba = Math.floor(Math.random() * 101 | 0)
  message.channel.send("Wylosowałem dla ciebie liczbe od **0** do **100**\nJaka to liczba?")
  if(message.content == liczba) {
    message.reply(`Tak! Prawidłową liczbą jest ${liczba}`)
  }
  else {
    message.reply(`Tak! Prawidłową liczbą jest ${liczba}`)
  }
}

module.exports.help = {
  name: "losowaliczba"
}
