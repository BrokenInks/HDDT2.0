const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'ut',
    cooldown: 5,
    category: 'info',
    execute(message, args, client) {

    let days = 0
    let week = 0
    let uptime = '';
    let totalSeconds = (client.uptime / 1000)
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Math.floor(totalSeconds % 60)
    if (hours > 24) {
        days = days + 1
        hours = 0
    }
    if (week - 0) {
        uptime += `${week} week, `
    }
    if (minutes > 60) {
        minutes = 0;
    }
    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
        const Embed = new Discord.MessageEmbed()
        .setColor('#DAF7A6')
        .setTitle(`my uptime is ${uptime}`)
        .setURL('')
        .setAuthor('Мой пинг', message.author.avatarURL(), 'https://discord.js.org/%27')
        .setThumbnail(`https://cdn.discordapp.com/attachments/677202416135045130/685163406059241484/emote.png`)
        .setTimestamp()
        .setFooter('для '+message.author.username, message.author.avatarURL)
        message.channel.send(Embed)
}}
