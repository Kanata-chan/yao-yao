var handler = async (m, {
	conn
}) => {
	conn.tebakan = conn.tebakan ? conn.tebakan : {}
	var id = m.sender
	if (!(id in conn.tebakan)) throw false
	var json = conn.tebakan[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hteb$/i

handler.limit = 3

export default handler