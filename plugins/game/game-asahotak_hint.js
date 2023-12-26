var handler = async (m, {
	conn
}) => {
	conn.asahotak = conn.asahotak ? conn.asahotak : {}
	var id = m.sender
	if (!(id in conn.asahotak)) throw false
	var json = conn.asahotak[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hsah$/i

handler.limit = 3

export default handler