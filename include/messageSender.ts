import { WebhookClient, MessageEmbed } from 'discord.js';
import { config } from 'dotenv';

config()

const { webhookid, webhooktoken } = process.env

export default async function(url: string, caption: string) {
    const webhook = new WebhookClient(webhookid, webhooktoken)
    const embedSended = new MessageEmbed({ title: "New video is up!", description: caption, url: url, color: 'RANDOM' }).setTimestamp()
    await webhook.send("test", {embeds: [embedSended]}) 
}