module.exports = {
    name: "approveio",
      async execute(client, message, args, Discord){ 
        if(!message.member._roles.find((role) => role === '947589479084982272')) return message.reply("Incorrect permissions!");
        let friendmem = message.mentions.members.first()
        let muterole = message.guild.roles.cache.find(role => role.name === 'Immigration Officer') || message.guild.roles.cache.find(role => role.name === 'Immigration Officer');

        if(!friendmem){
            return;
        }

        message.delete()
        friendmem.roles.add(muterole);
        message.channel.send(`${message.author} has been accepted in the roleplay! Senior Immigration Officer : ${message.author}`)
      }
    }