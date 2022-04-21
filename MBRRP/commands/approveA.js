module.exports = {
    name: "approvea",
      async execute(client, message, args, Discord){ 
        if(!message.member._roles.find((role) => role === '948741704897421323')) return message.reply("Incorrect permissions!");

        message.delete()
       
        let friendmem = message.mentions.members.first()
        let muterole = message.guild.roles.cache.find(role => role.name === '🇺🇸American') || message.guild.roles.cache.find(role => role.name === '🇺🇸American');

        if(!friendmem){
            return;
        }

        friendmem.roles.add(muterole);
        message.channel.send(`${message.author} has gotten American citizenship! Immigration Officer : ${message.author}`)
      }
    }