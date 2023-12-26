var handler = async (m, {
	text,
	conn
}) => {
	if (!text) throw 'apa cuba';
	try {
		let wtf = await fetch(API('xzn','api/oploverz', {
			search: text
		}, 'apikey'));
		let fak = await wtf.json();
		let str = `Oploverz Search\n\n`;
		for (let i = 0; i < fak.length; i++) {
			str += "```" + "Title: " + fak[i].title + '\n';
			str += "Link: " + fak[i].link + '\n\n' + "```";
		}
		conn.reply(m.chat, str, m)
	} catch (e) {
	m.reply("Maaf Tidak Ditemukan")
	};
};
handler.help = handler.command = ['search'];
handler.tags = ['anime'];

module.exports = handler;