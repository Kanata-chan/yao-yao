var handler = async (m, {
	conn
}) => {
	conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
	var id = m.sender
	if (!(id in conn.tebakkimia)) throw false
	var json = conn.tebakkimia[id][1]
	m.reply('```' + json.nama.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
}
handler.command = /^hki$/i
handler.limit = 3
export default handler