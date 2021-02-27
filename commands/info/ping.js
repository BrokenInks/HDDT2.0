const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    cooldown: 5,
    category: 'info',
    execute(message, args, client) {
        var ping = Math.round(client.ws.ping)
        const Embed = new Discord.MessageEmbed()
            .setColor('#DAF7A6')
            .setTitle(`Пинг: ${client.ws.ping}ms`)
            .setURL('')
            .setAuthor('Мой пинг', message.author.avatarURL(), 'https://discord.js.org/%27')
            .setThumbnail(`https://cdn.discordapp.com/attachments/677202416135045130/685163406059241484/emote.png`)
            .setTimestamp()
            .setFooter('для '+message.author.username, message.author.avatarURL)
        message.channel.send(Embed)
    },
};
