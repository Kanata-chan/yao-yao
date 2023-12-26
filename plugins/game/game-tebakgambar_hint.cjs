var handler = async (m, {
	conn
}) => {
	conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
	var id = m.sender
	if (!(id in conn.tebakgambar)) throw false
	var json = conn.tebakgambar[id].json
	conn.reply(m.chat, '```' + json.clue + '```', m)
}
handler.command = /^hint$/i

handler.limit = 3

module.exports = handler