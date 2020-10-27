/**
* @author ParliamoDiPC
* @description Pin command's source code.
*/

if (!message.member.hasPermission('MANAGE_MESSAGES')) {
return message.channel.send('<:x_:766700544382861353> You do not have the required permissions (Manage Messages) to pin a message.');
}
if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
return message.channel.send('<:x_:766700544382861353> I do not have the required permissions (Manage Messages) to pin a message.');
}
message.pin();
return message.channel.send(':pushpin: Pinned message!');

/* HackerCat's code. https://github.com/HackerCat-Bot/src */
