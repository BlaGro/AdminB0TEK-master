const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	let embed = new Discord.RichEmbed()
	.setDescription("Lista")
	.addField("1. Komenda")
	.addField("2. Cosiek")
	message.channel.send(embed);
	while(Number === 1) {
		message.channel.send("Komenda")		
		while(Number === 2) {
			message.channel.send("Cosiek")
		}
	}
}

module.exports.help = {
	name: "test"
}