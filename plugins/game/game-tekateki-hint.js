var handler = async (m, {
	conn
}) => {
	conn.tekateki = conn.tekateki ? conn.tekateki : {}
	var id = m.sender
	if (!(id in conn.tekateki)) throw false
	var json = conn.tekateki[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^htek$/i

handler.limit = 3

export default handler