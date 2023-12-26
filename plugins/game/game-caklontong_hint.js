var handler = async (m, {
	conn
}) => {
	conn.caklontong = conn.caklontong ? conn.caklontong : {}
	var id = m.sender
	if (!(id in conn.caklontong)) throw false
	var json = conn.caklontong[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^calo$/i

handler.limit = 3

export default handler