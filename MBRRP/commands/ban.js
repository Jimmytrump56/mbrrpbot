module.exports = {
    name: 'ban',
    async execute (client, message, args, Discord){
    message.delete()
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You cant use this command!")

    const mentionMember = message.mentions.members.first();
    let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
    if (!reason) reason = `No reason given by ${message.author} `;

    const embed = new Discord.MessageEmbed()
    .setTitle(`You were banned from **${message.guild.name}**`)
    .setDescription(`Reason: ${reason} || By ${message.author}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(client.user.tag, client.user.displayAvatarURL())

    if (!args[0]) return message.channel.send("You need to specify a user to ban");

    if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

    if(!mentionMember.bannable) return message.channel.send("I was unable to ban this user!");

    await mentionMember.ban({
        reason: reason
    })
}
}