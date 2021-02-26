const Discord = require('discord.js');
module.exports = {
    name: 'about',
    aliases: ['bot'],
    category: 'other',
    execute(message, args, client) {
        var ping = Math.round(client.ws.ping)
        const botEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Invite')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=795011972394647562&permissions=8&scope=bot')
            .setAuthor('Обо мне:', `https://images-ext-2.discordapp.net/external/KWRhHp_4L7RVEJshbFMWHpoO_Zgp6JtzJqMGWi0N8Mw/https/cdn.discordapp.com/avatars/795011972394647562/8bd097b0978f529fc0a49c5766a564cc.webp`, 'https://discord.js.org/%27')
            .setThumbnail(`https://cdn.discordapp.com/attachments/739801798138789930/746101344376717482/images_10.jpg`)
            .addFields(
                { name: 'Имя: HDDT', value: 'Моё имя', inline: false },
                { name: 'Тег: #2964', value: 'Мой тег', inline: false },
                { name: 'Хикару в цифрах:', value: `Участников: ${client.users.cache.size}\nСерверов: ${client.guilds.cache.size}`, inline: false },
            )
            .setTimestamp()
            .setFooter('для '+message.author.username, message.author.avatarURL)
        message.channel.send(botEmbed);
    },
};