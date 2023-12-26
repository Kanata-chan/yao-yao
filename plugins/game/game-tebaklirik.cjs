var timeout = 30000
var poin = 1000
var handler = async (m, {
	conn,
	command,
	usedPrefix
}) => {
	conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
	var id = m.sender
	if (id in conn.tebaklirik) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.tebaklirik[id][0])
		throw false
	}
	var src
	try {
		var anua = await axios.get(API('xzn', 'api/game/tebaklirik', {}, 'apikey'))
		src = anua.data
		if (!src.soal) throw src
		var caption = `*[ t e b a k - l i r i k ]*
${src.soal}

*[ Timeout ]* => ${(timeout / 1000).toFixed(2)} detik
*[ Bonus ]* => ${poin} MP
Ketik ${usedPrefix}hrik untuk bantuan
	`.trim()
		conn.tebaklirik[id] = [
			await conn.reply(m.chat, caption, m),
			src, poin,
			setTimeout(() => {
				if (conn.tebaklirik[id]) conn.reply(m.chat, `*[ t i m e o u t ]*\n🎋 Waktu habis, Jawabannya adalah *${src.jawaban}*`, conn.tebaklirik[id][0])
				delete conn.tebaklirik[id]
			}, timeout)
		]
	} catch (e) {
		log(e.response ? e.response.data : e)
		throw (e.response ? e.response.data : e)
	}
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i

module.exports = handler