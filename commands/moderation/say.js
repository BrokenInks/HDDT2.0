module.exports = {
    name: 'say',
    category: 'moderation',
    execute(message, args, client) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У  вас нет прав"); /* Если у исполнителя команды нету привилегии MANGAGE_MESSAGES, он не сможет её использовать */

        let robotmessage = args = message.content.split(' '); // Пробелы между словами 
        args.shift();
        args = args.join(' ');
        
        message.delete().catch(); // Удаление сообщения пользователя после отправки 
        
        message.channel.send(robotmessage).then(message.channel.send(message.author)) /* Отправление в чат сообщения бота */}};