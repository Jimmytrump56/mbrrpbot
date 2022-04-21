const Discord = require('discord.js');
const {Client, Intents} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    partials: ['MESSAGE','REACTION','CHANNEL','USER']
})
const fs = require('fs');

client.warns = new Discord.Collection();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () =>{
client.user.setActivity(' the border!', {type: "WATCHING"}).catch(console.error)
})

client.login('OTQ3NTgyMzIzMTkxMzQ1MjMy.YhvWzw.MIXqF1U9UvXOGynS5Hiv8w0_9p0');