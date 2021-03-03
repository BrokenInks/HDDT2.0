const Discord = require('discord.js');
module.exports = {
    name: 'e',
    category: 'owner',
    async execute(message, args, client) {
{
    let code = args.join(" ");
    try {
        let evaled = await eval(code);
        if (message.author.id !== "778512157926883328") return message.channel.send("No, this owner command");
        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
        message.channel.send(["Код исполнен за " + `${Date.now() - message.createdTimestamp}` + "ms\n" + evaled], {code: "js"})
    } catch (e) {
        if (typeof (e) == "string") e = e.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
        const Embed = new Discord.MessageEmbed()
            .setTitle("Произошла ошибка")
            .setDescription("`​``" + e + "`​``")
        message.channel.send(Embed)
    }
}}}
