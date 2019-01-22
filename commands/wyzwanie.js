const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .addField("Prawda", "czy\nwyzwanie?")
  if(message.content === "Wyzwanie"){
    var wyzwanie = ['Zrób 10 pompek','Przebiegnij 5 kółek wokół domu','Wyznaj osobie w której sie zakochałeś że ją kochasz','Powiedz jak najszybciej słowa "Jola lojalna"','Nie oddychaj przez 10 sekund','Kup twojemu przyjacielowi gre planszową','Daj koledze 10zł','Napisz wszystkie litery alfabetu','Napisz najprostszą zagadke jaka może być','Powiedz jaki jest twój idol','Powiedz jaki jest twój wymarzony zawód','Powiedz tacie że ma małego','Powiedz mamie że jest ciasna']
    var wyzwania = wyzwanie[Math.floor(Math.random()*wyzwanie.length)];
    let emebd = new Discord.RichEmbed()
    .addField("Wyzwanie", `${wyzwania}`)
  }
  if(message.content === "Prawda"){
    var prawda = ["Czy kochasz kogoś?","Jaki jest twój ulubiony film","Ile masz lat?","Czy kiedykolwiek prowadziłeś hazard?","Jesteś bogaty czy biedny, lub po środku?","Jakie lubisz gry?"]
    var prawdy = prawda[Math.floor(Math.random()*prawda.length)];
    let embed = new Discord.RichEmbed()
    .addField("Prawda", `${prawdy}`)
  }

  message.channel.send(embed);

}

module.exports.help = {
  name: "pcw"
}
