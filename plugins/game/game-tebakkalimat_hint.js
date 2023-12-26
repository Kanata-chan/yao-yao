var handler = async (m, {
	conn
}) => {
	conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {}
	var id = m.sender
	if (!(id in conn.tebakkalimat)) throw false
	var json = conn.tebakkalimat[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hmat$/i

handler.limit = 3

export default handler