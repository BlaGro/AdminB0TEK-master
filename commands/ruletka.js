const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	var replies = ["Umierasz", "Nie wypał"]
	var replies1 = replies[Math.floor(Math.random()*replies.length)];
	let embed = new Discord.RichEmbed()
	.addField("Ruletka", `${replies1}`)
	message.channel.send(embed);
}

module.exports.help = {
	name: "ruletka"
}
