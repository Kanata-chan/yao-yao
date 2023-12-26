var handler = async (m, {
	text,
	conn
}) => {
	if (!text) throw 'apa cuba';
	try {
		var response = await fetch(API('xzn', 'api/xnxxdl', {
			urlxnxx: text
		}, 'apikey'))
		var wtf = await response.json()
		m.reply(`Title: *${wtf.title}*\n\nUrl: ${wtf.url}\n\n_jangan manja_`)

	} catch (e) {
		m.reply("mana gada hoax hoax")
	};
};
handler.help = handler.command = ['dlxn'];
handler.tags = ['18+'];

module.exports = handler;