const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
	var data = new Date();
	
	var dzien = data.getDate();
	var miesiac = data.getMonth()+1;
	var rok = data.getFullYear();

	var godzina = data.getHours();
	var minuta = data.getMinutes();
	var sekunda = data.getSeconds();

	let embed = new Discord.RichEmbed()
	.setDescription('Data')
	.addField('Dzień', dzien)
	.addField('Miesiąc', miesiac)
	.addField('Rok', rok)
	.addField('Godzina', godzina)
	.addField('Minuta', minuta)
	.addField('Sekunda', sekunda)
	message.channel.send(embed);
}

module.exports.help = {
	name:"data"
}