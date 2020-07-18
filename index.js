const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const settings = require("./settingsExemplo.json");
client.settings = settings;

// handler:
fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err); // retorna no console caso ocorra algum erro
  files.forEach(file => {
    const event = require(`./events/${file}`); // pega o arquivo que está na pasta eventos
    let eventName = file.split(".")[0]; 
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err); // retorna no console caso ocorra algum erro
  files.forEach(file => {
    if (!file.endsWith(".js")) return; .// pega todos os arquivos com .js no final
    let props = require(`./comandos/${file}`); // pega o arquivo que está na pasta comandos
    let commandName = file.split(".")[0];
    console.log(`${commandName} carregado.`);
    client.commands.set(commandName, props);
  });
});

// iniciar o bot:
client.login(settings.token);
