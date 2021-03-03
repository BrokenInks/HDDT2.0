module.exports = {
    name: 'sum/',
    category: 'other',
    execute(message, args, client) {
        const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter /= x);
    message.reply(`Сумма этих чисел будет ${sum}!`);
    },
};