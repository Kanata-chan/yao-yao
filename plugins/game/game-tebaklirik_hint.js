var handler = async (m, {
	conn
}) => {
	conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
	var id = m.sender
	if (!(id in conn.tebaklirik)) throw false
	var json = conn.tebaklirik[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hrik$/i

handler.limit = 3

export default handler