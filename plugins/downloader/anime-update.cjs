var handler = async (m, {
	conn
}) => {
	var dapatkan = await fetch(API('xzn', 'api/oploverz/ongoing', {}, 'apikey'));
	var z = await dapatkan.json();
	var str = '*Anime Update*' + '\n\n'
	for (var i = 0; i < z.length; i++) {
		str += "Title: " + z[i].title + '\n'
		str += "Episode: " + z[i].episode + '\n'
		str += "Type: " + z[i].type + '\n'
		str += "score: " + z[i].score + '\n'
		str += "status: " + z[i].status + '\n'
		str += "link: " + z[i].link + '\n\n'
	}
	m.reply(str)
}
handler.help = handler.command = ['ongoing']
handler.tags = ['anime']

module.exports = handler