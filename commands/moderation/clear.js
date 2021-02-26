const { Client } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    cooldown: 5,
    category: 'moderation',
    execute(message, args, client) {

    if (!message.member.hasPermission('DELETE_MESSAGE')) return message.reply('No.');
    if (!args[0]) return message.channel.send('no');
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Удалёно ${args[0]} сообещний`)
        .then((msg) => msg.delete({ timeout : 5000 }));;
    })}
}