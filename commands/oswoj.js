const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let zwierz = args.join(" ")
  let embed = new Discord.RichEmbed()
  .setDescription("Oswajanie!")
  .addField("Oswoiłeś w:", `${Math.floor(Math.random() * 101 | 0)}%`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "oswoj"
}
