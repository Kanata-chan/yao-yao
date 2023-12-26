var handler = async (m, {
	text,
	conn
}) => {
	if (!text) throw 'apa cuba';
	try {
		var wtf = await fetch(API('xzn', 'api/oploverzdl', {
			url: text
		}, 'apikey'));
		var fak = await wtf.json();
		var str = `Status: ${fak.status}\nTitle: ${fak.next}\n\n`
		var a = fak.download
		for (var i = 0; i < a.length; i++) {
			str += "*Format: " + a[i].format + '*\n'
			var b = a[i].resolutions
			for (var i = 0; i < b.length; i++) {
				str += "resolutions: " + b[i].name + '\n'
				var c = b[i].servers
				for (var i = 0; i < c.length; i++) {
					str += "servers: " + c[i].name + '\n'
					str += "url: " + c[i].link + '\n\n'
				}
			}
		}
		m.reply(str)
	} catch (e) {
		m.reply("mana gada hoax hoax")
	};
};
handler.help = handler.command = ['dlanime'];
handler.tags = ['anime'];

module.exports = handler;