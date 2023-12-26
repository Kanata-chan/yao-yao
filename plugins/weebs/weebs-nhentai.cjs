var handler = async (m, {
	text,
	conn
}) => {
	if (!text) throw 'perihal apa';
	var body = text.replace(/\s+/g, '+')
	if (!/[0-9]/.test(body)) throw ('only number')
	try {
		m.reply('*p l e a s e  w a i t. . .*')
		var response = await fetch(API('xzn', 'api/nhentai', {
			code: body
		}, 'apikey'))
		var wtf = await response.json()
		return await conn.sendFile(m.chat, wtf.download, wtf.title.japanese + '.pdf', '', m)
	} catch (e) {
		m.reply("mana gada hoax hoax")
	};
};
handler.help = handler.command = ['nhentai'];
handler.tags = ['weebs'];

module.exports = handler;