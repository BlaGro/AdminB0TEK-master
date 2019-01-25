const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var failrate = ["Fail!", "Udało sie!"]
    var winrate = failrate[Math.floor(Math.random()*failrate.length)];
    let embed = new Discord.RichEmbed()
    .addField("Wynik", `${winrate}`)
}

module.exports.help = {
    name: "akcja"
}