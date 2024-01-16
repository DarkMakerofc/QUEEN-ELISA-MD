const {
	Function,
	Serialize,
	parsedJid
} = require("../lib/");

Function({
	pattern: 'forward ?(.*)',
	fromMe: true,
	desc: 'forward replied msg',
	type: 'whatsapp'
}, async (message, match) => {
	if (!message.reply_message) return await message.reply('_Reply to a message_')
	for (let jid of parsedJid(match)) {
		await message.client.forwardMessage(jid, m.quoted_message, {
			contextInfo: {
				isForwarded: false
			}
		})
	}
})

Function({
	pattern: 'save ?(.*)',
	fromMe: true,
	desc: 'forward replied msg to u',
	type: 'whatsapp'
}, async (message, match) => {
	if (!message.reply_message) return await message.reply('_Reply to a message_')
	await message.client.forwardMessage(message.client.user.id, m.quoted_message, {
		contextInfo: {
			isForwarded: false
		}
	})
})

Function({
	pattern: 'quoted ?(.*)',
	fromMe: true,
	desc: 'get quoted of replied  message',
	type: 'whatsapp'
}, async (message, match) => {
	try {
		if (!message.reply_message) return await message.reply('_Reply to a message_')
		const m = await Serialize(message.client, message.data, message.client.store)
		const quoted = await Serialize(message.client, await m.getQuotedMessage(), message.client.store)
		if (!quoted.quoted) return message.send('_The replied message does not contain a quoted message_')
		await message.client.sendForward(message.jid, quoted.quoted_message)
	} catch (e) {
		await message.send('_Failed to Load message From store_')
	}
})

Function({
	pattern: 'fullforward ?(.*)',
	fromMe: true,
	desc: 'forward message with quoted msg or link preview',
	type: 'whatsapp'
}, async (message, match) => {
	try {
		if (!message.reply_message) return await message.reply('_Reply to a message_')
		for (let jid of parsedJid(match)) {
			const m = await Serialize(message.client, message.data, message.client.store)
			const quoted = await Serialize(message.client, await m.getQuotedMessage(), message.client.store)
			await message.client.sendForward(jid, quoted)
		}
	} catch (e) {
		await message.send('_Failed to Load message From store_')
	}
})