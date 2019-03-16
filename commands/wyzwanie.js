const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  var prawda = ["Prawda","Wyzwanie"]
  var wyzwanie = prawda[Math.floor(Math.random()*prawda.length)];
  let embed = new Discord.RichEmbed()
  .addField("Wynik", `${wyzwanie}`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "pcw"
}
