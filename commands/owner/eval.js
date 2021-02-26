async execute(message, args) {

        let code = args.join(" ");
    try {
      let evaled = await eval(code);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      if (message.author.id !=="778512157926883328") return message.channel.send("No, this owner command");

      message.channel.send(["Код исполнен за " + `${Date.now() - message.createdTimestamp}` + "ms\n" + evaled], { code: "js" })
    } catch(e) {
      if (typeof(e) == "string") e = e.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
      let evalerror = new global.embed() 
      .setTitle("Произошла ошибка")
      .setDescription("`​``" + e + "`​``")
      .setColor(cfg.colors.error)
      message.reply(evalerror)
      
      }
    }
