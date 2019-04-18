const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
	let lista = guild.users.array().sort();
	let embed = new Discord.RichEmbed()
	.setDescription('Zabije dla ciebie randomowego użytkownika tego serwera!')
	.addField("Zabiłem dla ciebie", Math.floor(Math.random() * lista.length))
	message.channel.send(embed);
}

module.exports.help = {
	name:"randomkill"
}
