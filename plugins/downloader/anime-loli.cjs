var handler = async (m, {
	conn
}) => {
	await conn.sendFile(m.chat, API('xzn', 'api/loli', {}, 'apikey'), '', '_loli_', m)
}
handler.help = handler.command = ['loli']
handler.tags = ['anime']

module.exports = handler