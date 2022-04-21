module.exports = {
    name: "approvebp",
      async execute(client, message, args, Discord){ 
        if(!message.member._roles.find((role) => role === '948741583136755722')) return message.reply("Incorrect permissions!");
        let friendmem = message.mentions.members.first()
        let muterole = message.guild.roles.cache.find(role => role.name === 'Border Patrol') || message.guild.roles.cache.find(role => role.name === 'Border Patrol');

        if(!friendmem){
            return;
        }

        message.delete()

        friendmem.roles.add(muterole);
        message.channel.send(`${message.author} has been accepted to the border patrol! Border Patrol Supervisor : ${message.author}`)
      }
    }