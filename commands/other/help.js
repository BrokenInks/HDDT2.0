const { Client } = require("discord.js");
const Discord = require('discord.js');
module.exports = {
    name: 'help',
    execute(message, args, client) {
        const baskEmbed = new Discord.MessageEmbed()
            .setColor('#DAF7A6')
            .setTitle('Модули')
            .setDescription('hd.help_info\nhd.help_other - другие команды')
            .setURL('')
            .setAuthor(message.author.username, 'https://discord.js.org/%27')
            .setImage('https://cdn.discordapp.com/attachments/768165559971348489/784816196557340692/20201117_133520.png')
            .setTimestamp()
            .setFooter('для ' + message.author.username + ' || скоро появятся новые модули!')
        message.channel.send(baskEmbed);
    }}
