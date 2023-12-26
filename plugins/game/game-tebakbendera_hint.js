var handler = async (m, {
	conn
}) => {
	conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
	var id = m.sender
	if (!(id in conn.tebakbendera)) throw false
	var json = conn.tebakbendera[id][1]
	conn.reply(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}
handler.command = /^hben$/i

handler.limit = 3

export default handler