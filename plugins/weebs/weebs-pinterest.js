var handler = async (m, {
	text,
	conn
}) => {
	if (!text) return m.reply('apakah....')
	try {
		var response = await fetch(API('xzn', 'api/pinterest', {
			search: text
		}, 'apikey'))
		var wtf = await response.json()
		if (!Array.isArray(wtf)) throw wtf
		return await conn.sendFile(m.chat, wtf.getRandom().media.url, '', text, m)
	} catch (e) {
		m.reply("mana gak ada")
	};
};
handler.help = handler.command = ['pinterest'];
handler.tags = ['weebs'];

export default handler;