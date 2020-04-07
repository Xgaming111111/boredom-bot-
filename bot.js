const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk2ODI3NjE1Njk2Mzg4MTA2.XoukaQ.GheI5lBkNxxHgNNQpbnLWUKQch0';

bot.on('ready', () => {
    console.log('This bot is online and not quite ready for use.');
})

bot.on('message', msg=> {
    if(msg.content === "HELLO"){
        msg.reply("HELLO FRIEND!");
    }
})

bot.on('message', msg=> {
    if(msg.content === "Hi"){
        msg.reply("Hello!");
    }
})

bot.on('message', msg=> {
    if(msg.content === "I wasn't talking to you"){
        msg.reply("Oh. ;(");
    }
})

bot.on('message', msg=> {
    if(msg.content === "I'm bored"){
        msg.reply("Aren't we all?");
    }
})

bot.on('message', msg=> {
    if(msg.content === "Give me a random number"){
        var random = Math.floor(Math.random() * 10000000) + 1
        msg.reply(random);
    }
})

bot.on('message', msg=> {
    if(msg.content === "Potato"){
        msg.reply("No");
    }
})

bot.on('message', msg=> {
    if(msg.content === "Define Netflix"){
        msg.reply("No");
    }
})

bot.on('message', msg=> {
    if(msg.content === "Why not"){
        msg.reply("I'm not your slave.");
    }
})

bot.on('message', msg=> {
    if(msg.content === "Give me a random fact"){
        msg.reply("A waffle a day keeps the doctor near, so don't eat waffles.");
    }
})

bot.on('message', msg=> {
    if(msg.content === "Do you have a sense of humor?"){
        msg.reply("Yes. I will tell you a joke. What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire!");
    }
})

bot.on('message', msg=> {
    if(msg.content === "Can I have a cupcake?"){
        msg.reply("🧁");
    }
})

bot.on('message', msg=> {
    if(msg.content === "!Ultima Table Flip"){
        msg.reply("┻━┻ヽ(ಠ益ಠ)ﾉ ┻━┻");
    }
})

bot.on('message', msg=> {
    if(msg.content === "!Epic Face"){
        msg.reply("(⌐■_■)");
    }
})

bot.on('message', msg=> {
    if(msg.content === "!Press F"){
        msg.reply("f");
    }
})

client.login(process.env.BOT_TOKEN);
