const Discord = require("discord.js");


module.exports.run = async (bot, message, args, sql) => {

  let target = message.author;

  let rows = sql.prepare(`SELECT * FROM profile WHERE UserID = '${target.id}'`).get()

    if(!rows) return message.reply("** حاول مرة أخرى **").then(msg => {msg.delete(5000)});
  

  let curxp = rows.xp;
  let curlvl = rows.lvl;
  let nxtLvlXp = curlvl * 1000;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setColor("00000")
  .addField("  **❯ مستواك     **", curlvl, true)
  .addField("  **❯ خبرتك  ** ", curxp, true)

  message.channel.send(lvlEmbed).then(msg => {msg.delete(50000000)});

}

module.exports.help = {
  name: "xp"
}
