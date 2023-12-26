var timeout = 30000
var poin = 1000
var handler = async (m, {
	conn,
	command,
	usedPrefix
}) => {
	conn.tebakan = conn.tebakan ? conn.tebakan : {}
	var id = m.sender
	if (id in conn.tebakan) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.tebakan[id][0])
		throw false
	}
	var src
	try {
		var anua = await axios.get(API('xzn', 'api/game/tebaktebakan', {}, 'apikey'))
		src = anua.data
		if (!src.soal) throw src
		var caption = `*[ t e b a k - t e b a k a n ]*
${src.soal}

*[ Timeout ]* => ${(timeout / 1000).toFixed(2)} detik
*[ Bonus ]* => ${poin} MP
Ketik ${usedPrefix}hteb untuk bantuan
	`.trim()
		conn.tebakan[id] = [
			await conn.reply(m.chat, caption, m),
			src, poin,
			setTimeout(() => {
				if (conn.tebakan[id]) conn.reply(m.chat, `*[ t i m e o u t ]*\n🎋 Waktu habis, Jawabannya adalah *${src.jawaban}*`, conn.tebakan[id][0])
				delete conn.tebakan[id]
			}, timeout)
		]
	} catch (e) {
		log(e.response ? e.response.data : e)
		throw (e.response ? e.response.data : e)
	}
}
handler.help = ['tebakan']
handler.tags = ['game']
handler.command = ['tebakan']

module.exports = handler