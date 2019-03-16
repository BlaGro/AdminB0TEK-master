const Discord = require("discord.js");

module.exports.run =  async(bot, message, args) => {
	var bcb = ["Bogaty", "Biedny"]
	var bcb1 = bcb[Math.floor(Math.random()*bcb.length)];
	let embed = new Discord.RichEmbed()
	.addField("Bedziesz", `${bcb1}`)
	message.channel.send(embed);
}

module.exports.help = {
	name: "bcb"
}