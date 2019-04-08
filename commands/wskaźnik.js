const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  var liczba = Math.floor(Math.random() * 101 | 0)
  message.channel.send("Wylosowałem dla ciebie liczbe od **0** do **100**\nJaka to liczba?\nNapisz liczbe, po 10 sekundach pojawi sie poprawna")
  setTimeout(function() {
    message.channel.send(`Prawidłową liczbą jest ${liczba}\nJeżeli odgadłeś to **gratulacje**`)
  }, 10000);
}

module.exports.help = {
  name: "losowaliczba"
}
