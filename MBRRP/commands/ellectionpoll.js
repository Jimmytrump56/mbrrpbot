module.exports = {
    name: 'election',
    async execute (client, message, args, Discord){
        const MSGContent = args.join(' ');
        const MSGSplit = MSGContent.split(` - `);
        const title = MSGSplit[0]
        const description = MSGSplit[1]
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setTitle(`${title}`)
        .setDescription(`${description}`)
        .setColor('RANDOM')

        const appsChannel = client.channels.cache.get('926276790106869791');
        const PollMSG = await appsChannel.send(embed);
        await PollMSG.react('1️⃣')
        await PollMSG.react('2️⃣')

    }
}