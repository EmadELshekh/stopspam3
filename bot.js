const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("576585915418279939")
setInterval(function() {
channel.send(`Spaming by 3MoOdi_YT Yeah Credit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
