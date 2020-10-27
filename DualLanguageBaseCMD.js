const Discord = require('discord.js')
const db = require('quick.db')
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
          // comandi in italiano
        } else {
          // comandi in inglese
        }
    }
