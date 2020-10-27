const Discord = require('discord.js')
const db = require('quick.db')
const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const acceptedReplies = ['en', 'it'];
const choice=args[0];
let intro = db.get(`intro_${message.guild.id}`)
if(intro === null) {
  const noEmbed = new Discord.MessageEmbed()
  .setColor('#008AFC')
  .setAuthor('HackerCat', 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png')
  .setTitle('No Language Selected')
  .setDescription('Execute `./intro en` if you want me to speak in English, while, if you want me to speak in Italian (Italiano) execute `./intro it`.')
  .setTimestamp()
  .setFooter(`https://hackercat.cf`, 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png'); 
  const lngEmbed = new Discord.MessageEmbed()
  .setColor('#008AFC')
  .setAuthor('HackerCat', 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png')
  .setTitle('Language Not Supported')
  .setDescription('Execute `./intro en` if you want me to speak in English, while, if you want me to speak in Italian (Italiano) execute `./intro it`.')
  .setTimestamp()
  .setFooter(`https://hackercat.cf`, 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png'); 

  if (!choice) return message.channel.send(noEmbed);
  if (!acceptedReplies.includes(choice)) return message.channel.send(lngEmbed);
  switch (choice) {
    case 'en': {
      if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(":no_entry: You don't have required permissions (Administrator) to set up the bot.")
      } 
         db.set(`intro_${message.guild.id}`, 1) 
    db.set(`locale_${message.guild.id}_en`, 1)
    message.channel.send(':white_check_mark: Bot set up successfully')
    } 
    case 'it': {
      if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(":no_entry: Non hai i permessi richiesti (Amministratore) per introdurre il bot.")
      } 
      db.set(`intro_${message.guild.id}`, 1)
message.channel.send(':white_check_mark: Bot configurato con successo!')
    }
}
}
      else if(intro !== null) {
        let en = db.get(`locale_${message.guild.id}_en`)
        if(en === null) {
          const enI = new Discord.MessageEmbed()
  .setColor('#008AFC')
  .setAuthor('HackerCat', 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png')
  .setTitle('Bot già introdotto')
  .setDescription(`Per modificare la lingua in English eseguire ./lang en.`)
  .setTimestamp()
  .setFooter(`https://hackercat.cf`, 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png'); 
  message.channel.send(enI)
        }
        if(!en === null) {
          const itI = new Discord.MessageEmbed()
  .setColor('#008AFC')
  .setAuthor('HackerCat', 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png')
  .setTitle('Bot Introduced')
  .setDescription(`To edit language to Italiano execute ./lang it.`)
  .setTimestamp()
  .setFooter(`https://hackercat.cf`, 'https://raw.githubusercontent.com/HackerCat-Bot/cdn/main/logo.png'); 
  message.channel.send(itI)
        }
    }
