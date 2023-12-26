var handler = async (m, {
	text,
	conn,
	command
}) => {
	if (!text) throw 'Perihal Apah';
	var body = text.replace(/\s+/g, '+')
	try {
		var xzn
		switch (command) {
			case 'tiktoktrend':
				xzn = await fetch(API('xzn', 'api/tttrending', {
					region: body
				}, 'apikey'))
				break;
			case 'asupan':
				xzn = await fetch(API('xzn', 'api/ttsearch', {
					search: body
				}, 'apikey'))
				break;
		}
		var wtf = await xzn.json()
		conn.sendFile(m.chat, wtf.play, '', wtf.title, m)
	} catch (e) {
		throw e.toString();
	};
};
handler.help = handler.command = ['tiktoktrend', 'asupan'];
handler.tags = ['tiktok'];

module.exports = handler;
/*var [t1, t2] = body.split`|`
	if (!/[0-9]/.test(t2)) throw ('only number')*/