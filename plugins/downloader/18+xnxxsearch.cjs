var handler = async (m, {
	text,
	conn
}) => {
	if (!text) throw 'apa cuba';
	try {
		var response = await fetch(API('xzn', 'api/xnxxsearch', {
			title: text
		}, 'apikey'))
		var wtf = await response.json()
		var str = '*Pemersatu Bangsa*\n\n';
		for (var i = 0; i < wtf.length; i++) {
			str += "title: " + wtf[i].title + '\n';
			str += "link: " + wtf[i].link + '\n\n';
		}
		m.reply(str)
	} catch (e) {
		m.reply("gada anjing typo lu memek")
	};
};
handler.help = handler.command = ['xnsearch'];
handler.tags = ['18+'];

module.exports = handler;