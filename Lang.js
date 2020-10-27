const Discord = require('discord.js')
const db = require('quick.db')
const args = message.content.slice(7)
let intro = db.get(`intro_${message.guild.id}`)
if(intro === null) {
  const noIntroEmbed = new Discord.MessageEmbed()
  .setColor('#008AFC')
  .setAuthor('HackerCat', 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png')
  .setTitle('Bot Not Introduced')
  .setDescription('Execute `./intro en` if you want me to speak in English, while, if you want me to speak in Italian (Italiano) execute `./intro it`.')
  .setTimestamp()
  .setFooter(`https://hackercat.cf`, 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png'); 
  message.channel.send(noIntroEmbed)
}
      else if(intro !== null) {
        let en = db.get(`locale_${message.guild.id}_en`)
        if(en === null) {
          if (args === 'en') {
            if(!message.member.hasPermission("ADMINISTRATOR")) {
              return message.channel.send("<:x_:766700544382861353> Non si dispone delle autorizzazioni necessarie (Amministratore) per modificare la lingua del bot.")
            } 
            db.set(`locale_${message.guild.id}_en`, 1)
            message.channel.send('<:checkbox:766699810781659156> Bot language changed to <:uk:766699425421983754> English successfully!')
          }          
          if (args === 'it') {
            if(!message.member.hasPermission("ADMINISTRATOR")) {
              return message.channel.send("<:x_:766700544382861353> Non si dispone delle autorizzazioni necessarie (Amministratore) per modificare la lingua del bot.")
            } 
            const langgerferf = new Discord.MessageEmbed()
            .setColor('#008AFC')
            .setAuthor('HackerCat', 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png')
            .setTitle('Lingua già impostata su: Italiano')
            .setDescription('La lingua è già stata impostata su <:italy:766699425430896680> Italiano.')
            .setTimestamp()
            .setFooter(`https://hackercat.cf`, 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png'); 
            message.channel.send(langgerferf)
          }
        } else {
          if (args === 'en') {
            if(!message.member.hasPermission("ADMINISTRATOR")) {
              return message.channel.send("<:x_:766700544382861353> You don't have required permissions (Administrator) to change bot's language.")
            } 
            const langgerferf = new Discord.MessageEmbed()
            .setColor('#008AFC')
            .setAuthor('HackerCat', 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png')
            .setTitle('Language already set on: <:uk:766699425421983754> English')
            .setDescription('Language already set on <:uk:766699425421983754> English.')
            .setTimestamp()
            .setFooter(`https://hackercat.cf`, 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png'); 
            message.channel.send(langgerferf)
          }
          if (args === 'it') {
            if(!message.member.hasPermission("ADMINISTRATOR")) {
              return message.channel.send("<:x_:766700544382861353> You don't have required permissions (Administrator) to change bot's language.")
            } 
            db.delete(`locale_${message.guild.id}_en`)
            message.channel.send('<:checkbox:766699810781659156> Lingua del bot cambiata a <:italy:766699425430896680> Italiano con successo!')
          }
        }
    }
