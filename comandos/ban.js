exports.run = (client, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return; // permissão que o usuário precisa.
 
 let membro = message.mentions.users.first(); // mencionar o usuário 
 if(!membro) return message.reply("mencione um membro para banir.")
 
message.guild.members.ban(membro.id) // bane o usuário
 message.channel.send(`O membro ${membro} foi banido com sucesso!`)
 
 }
