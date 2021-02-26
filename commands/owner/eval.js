const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "eval",
  aliases: ["e"],
  description: "Evaluated the code you puy in",
  usage: "<code to eval>",
  async execute(message, args, client)  {

  if(message.author.id !== '778512157926883328') return;
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
      const code = args.join(" ");
      let evaled = eval(code);
      let rawEvaled = evaled;
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        let embed = new MessageEmbed()
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(client.token, "Токен не дам)))")}\n\`\`\``)
      .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`Внимание, ошибка\`\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
}
}