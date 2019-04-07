const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  var min = 0
  var max = 100
  var liczba = Math.floor(Math.random() * 101 | 0)
  message.channel.send("Wylosowałem dla ciebie liczbe od **0** do **100**\nJaka to liczba?")
  if(message.content == liczba) {
    message.channel.send(`Tak! Prawidłową liczbą jest ${liczba}`)
  }
  else {
    message.channel.send(`Tak! Prawidłową liczbą jest ${liczba}`)
  }
}

module.exports.help = {
  name: "losowaliczba"
}
