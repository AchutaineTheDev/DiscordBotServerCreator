const { Client } = require("discord.js")
const client = new Client()

function createGuildd() {
  setTimeout(async () => {
    const guild = await client.guilds.create("YOUR SERVER NAME")
    const channel = guild.channels.cache.filter(ch => ch.type === "text").first()
    const invite = await channel.createInvite()
    console.log(invite.url)
  }, 1000)
}

createGuildd()

client.login("YOUR DISCORD BOT TOKEN")