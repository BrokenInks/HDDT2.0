const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'help_info',
    execute(message, args, client) {
        const baskEmbed = new Discord.MessageEmbed()
            .setColor('#DAF7A6')
            .setTitle('Другое')
            .setDescription('hd.about - Информация о боте\n hd.ping - Пинг бота\n ut - Uptime, Аптайм бота\n hd.user - Информация о пользователе')
            .setURL('')
            .setAuthor(message.author.username, message.author.avatarURL(), 'https://discord.js.org/%27')
            .setImage('https://cdn.discordapp.com/attachments/768165559971348489/784816196557340692/20201117_133520.png')
            .setTimestamp()
            .setFooter('для '+message.author.username, message.author.avatarURL)
        message.channel.send(baskEmbed);
    }}
