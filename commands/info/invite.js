const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'invite',
    execute(message, args, client) {
        const baskEmbed = new Discord.MessageEmbed()
            .setColor('#DAF7A6')
            .setTitle('')
            .setDescription('Чтобы добавить меня на свой сервер, [Нажми сюда!](https://discord.com/api/oauth2/authorize?client_id=795011972394647562&permissions=8&scope=bot)')
            .setURL('')
            .setAuthor('')
            .setImage('')
            .setFooter('')
        message.channel.send(baskEmbed);
    }}