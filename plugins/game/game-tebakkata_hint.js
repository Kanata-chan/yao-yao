var handler = async (m, {
	conn
}) => {
	conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
	var id = m.sender
	if (!(id in conn.tebakkata)) throw false
	var json = conn.tebakkata[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hkat$/i

handler.limit = 3

export default handler