module.exports = {
    name: "approve",
      async execute(client, message, args, Discord){ 
        if(!message.member._roles.find((role) => role === '948741704897421323')) return message.reply("Incorrect permissions!");

        message.delete()

        let friendmem = message.mentions.members.first()
        let muterole = message.guild.roles.cache.find(role => role.name === 'Member') || message.guild.roles.cache.find(role => role.name === 'Member');

        if(!friendmem){
            return;
        }


        friendmem.roles.add(muterole);
        message.channel.send(`${message.author} has been accepted in the roleplay! Immigration Officer : ${message.author}`)
      }
    }