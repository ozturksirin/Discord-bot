// timer and message start
const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [8] });

client.once('ready', () => {
    console.log(`The bot logged in as ${client.user.tag}!`);
    setInterval(sendTestMessage, 5000);
});

client.login(process.env.BOT_TOKEN);

async function sendTestMessage() {
    const gulagGuildId = '779772967625162803' // guild id
    const gulagChanel = '779772967625162806' // chanel id

    const guildId = gulagGuildId;
    const channelId = gulagChanel;
    try {
        const guild = await client.guilds.fetch(guildId);
        const channel = await guild.channels.fetch(channelId);

        if (!channel) {
            console.log(`chanel not found: ${channelId}`);
            return false;
        }

        const msg = ["message1", "message2", "message3", "message4", "message5", "message6", "message7", "message8", "message9", "message10"]
        // channel.send(msg[Math.floor(Math.random() * msg.length)]);
        channel.send(`${msg[Math.floor(Math.random() * msg.length)]} User: <@${client.user.id}>`);
        console.log(`"test" sent message: ${channelId}`);
    } catch (error) {
        console.error('An error occurred while sending the message:', error);
    }
}
// timer and message end