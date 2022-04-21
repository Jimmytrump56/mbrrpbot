module.exports = {
    name: 'apply',
    async execute (client, message, args, Discord){
      
      const questions = [
        'What is your discord name and tag?',
        'What is your Roblox name?',
        'Why do you want to be apart of the roleplay? (100 Words Minimum)',
        'Have you read and understood the rules?',
        'Anything else that we should know?',
      ]
      let collectCounter = 0
      let endCounter = 0
  
      const filter = (m) => m.author.id === message.author.id
      
      const appStart = await message.author.send(questions[collectCounter++])
      const channel = appStart.channel
  
      const collector = channel.createMessageCollector(filter)
  
      collector.on("collect", () => { 
          if(collectCounter < questions.length) {
              channel.send(questions[collectCounter++])
          } else {
              channel.send("Your application has been sent!")
              collector.stop("fulfilled")
          }
      });
  
         const appsChannel = client.channels.cache.get('947590079495409704');
         collector.on('end', (collected, reason) => {
             if (reason === 'fulfilled') {
                 let index = 1;
                 const mappedRespones = collected
                 .map((msg) => {
                     return `${index++}) ${questions[endCounter++]}\n-> ${msg.content}`;
                 })
                 .join("\n\n");
                
                     const NewAppEMBED =  new Discord.MessageEmbed()
                     .setAuthor(
                         message.author.tag, 
                         message.author.displayAvatarURL({ dynamic: true })
                         )
                     .setTitle(`New Roleplay Application from **${message.author.username}**!`)
                     .setDescription(mappedRespones)
                     .setColor("PINK")
                     appsChannel.send(NewAppEMBED)
                 
             }
         })
   }, 
  }