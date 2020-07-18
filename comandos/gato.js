const Discord = require("discord.js");

exports.run = async (client, message) => {
let embed = new Discord.MessageEmbed()
.setAuthor(name, [icon], [url])
.setTitle("Gato") // Titulo
.setDescription("Gatinho fofo") // Descrição
.setImage("LINK DA IMAGEM")
.setThumbnail("https://images-ext-1.discordapp.net/external/7v5vz_yim1vSYDjyOUXzU82EBOrMDVADsc3KDP91tzk/https/i.ytimg.com/vi/R3UdXDJtQro/maxresdefault.jpg?width=840&height=473") // Imagel URL
.setFooter("Imagem vinda do site Youtube.com") // Coloca as linhas pequenas
.setColor("RED") // Defini a cor
setTimestamp() // data atual
message.channel.send(embed) 
}
