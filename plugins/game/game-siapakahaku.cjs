var timeout = 30000
var poin = 1000
var handler = async (m, {
	conn,
	command,
	usedPrefix
}) => {
	conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
	var id = m.sender
	if (id in conn.siapakahaku) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.siapakahaku[id][0])
		throw false
	}
	var src
	try {
		var anua = await axios.get(API('xzn', 'api/game/siapakahaku', {}, 'apikey'))
		src = anua.data
		if (!src.soal) throw src
		var caption = `*[ s i a p a k a h - a k u ]*
${src.soal}

*[ Timeout ]* => ${(timeout / 1000).toFixed(2)} detik
*[ Bonus ]* => ${poin} MP
Ketik ${usedPrefix}haku untuk bantuan
	`.trim()
		conn.siapakahaku[id] = [
			await conn.reply(m.chat, caption, m),
			src, poin,
			setTimeout(() => {
				if (conn.siapakahaku[id]) conn.reply(m.chat, `*[ t i m e o u t ]*\n🎋 Waktu habis, Jawabannya adalah *${src.jawaban}*`, conn.siapakahaku[id][0])
				delete conn.siapakahaku[id]
			}, timeout)
		]
	} catch (e) {
		log(e.response ? e.response.data : e)
		throw (e.response ? e.response.data : e)
	}
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapakahaku/i

module.exports = handler