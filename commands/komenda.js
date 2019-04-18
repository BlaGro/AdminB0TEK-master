const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	let serwery = bot.guilds.array().sort();
	let embed = new Discord.RichEmbed()
	.setDescription('Lista serwerów')
	.addField('A oto i lista', serwery)
	message.channel.send(embd);
}

module.exports.help = {
	name:"serwery"
}