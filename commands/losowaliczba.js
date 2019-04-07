const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  var min = 0
  var max = 100
  var liczba = Math.floor(Math.random() * (+max - +min) + +min)
  message.channel.send("Wylosowałem dla ciebie liczbe od **0** do **100**\nJaka to liczba?")
  if(message.content != liczba) {
    message.message.channel.send(`Nie, to nie ta liczba, prawidłową liczbą jest ${liczba}`)
  }
  if(message.content == liczba) {
    message.channel.send(`Tak! Prawidłową liczbą jest ${liczba}`)
  }
}

module.exports.help = {
  name: "losowaliczba"
}
