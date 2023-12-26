var handler = async (m, {
	conn
}) => {
	conn.susunkata = conn.susunkata ? conn.susunkata : {}
	var id = m.sender
	if (!(id in conn.susunkata)) throw false
	var json = conn.susunkata[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hsun$/i

handler.limit = 3

export default handler