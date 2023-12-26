var handler = async (m, {
	conn
}) => {
	conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
	var id = m.sender
	if (!(id in conn.siapakahaku)) throw false
	var json = conn.siapakahaku[id][1]
	conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^haku$/i

handler.limit = 3

export default handler