const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'user',
    aliases: ['card', 'profile'],
    category: 'info',
    execute(message, args, client) {
        var scanned_user = (message.mentions.users.first() || message.author)
        //console.log(scanned_user);
            var presence = scanned_user.presence.status;
            if (scanned_user.bot) {presence = ':robot: '+presence}
            else if (presence === 'online') {presence = ':green_circle: '+presence}
            else if (presence === 'offline') {presence = ':white_circle: '+presence}
            else if (presence === 'idle') {presence = ':crecent_moon: '+presence}
            else if (presence === 'dnd') {presence = ':red_circle: '+presence}
            else {};
            const answer = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Инфомация об участнике:')
                .setURL('')
                .setAuthor(scanned_user.username, scanned_user.avatarURL())
                .setDescription(presence)
                .setThumbnail(scanned_user.avatarURL())
                .addFields(
                    { name: 'ID\t: ', value: scanned_user.id , inline: true },
                    { name: 'Full name\t: ', value: scanned_user.username+'#'+scanned_user.discriminator },
                    { name: 'присоединился\t: ', value: message.guild.member(scanned_user.id).joinedAt },
                )
                .setTimestamp()
                .setFooter('для '+message.author.username, message.author.avatarURL)

            message.channel.send(answer);
    },
};