const Discord = require("discord.js");

module.exports.run = async (bot, message, args, sql) => {

 let rows =  sql.prepare(`SELECT * FROM profile WHERE UserID = '${message.author.id}'`).get()
    if(rows.length < 1) return message.reply("**حاول مرة أخرى**").then(msg => {msg.delete(500000000)});
  let uCoins = rows.coins;
let coin = new Discord.Rich()

  .addField("**Your :credit_card: balance is:** ", `**${uCoins} credits**`);

  message.channel.send(coin).then(msg => {msg.delete(50000000)});

}

module.exports.help = {
  name: "credits"
}