var timeout = 30000
var poin = 1000
var handler = async (m, {
	conn,
	command,
	usedPrefix
}) => {
	conn.tekateki = conn.tekateki ? conn.tekateki : {}
	var id = m.sender
	if (id in conn.tekateki) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.tekateki[id][0])
		throw false
	}
	var src
	try {
		var anua = await axios.get(API('xzn', 'api/game/tebaklirik', {}, 'apikey'))
		src = anua.data
		if (!src.soal) throw src
		var caption = `*[ t e k a - t e k i ]*
${src.soal}

*[ Timeout ]* => ${(timeout / 1000).toFixed(2)} detik
*[ Bonus ]* => ${poin} MP
Ketik ${usedPrefix}htek untuk bantuan
	`.trim()
		conn.tekateki[id] = [
			await conn.reply(m.chat, caption, m),
			src, poin,
			setTimeout(() => {
				if (conn.tekateki[id]) conn.reply(m.chat, `*[ t i m e o u t ]*\n🎋 Waktu habis, Jawabannya adalah *${src.jawaban}*`, conn.tekateki[id][0])
				delete conn.tekateki[id]
			}, timeout)
		]
	} catch (e) {
		log(e.response ? e.response.data : e)
		throw (e.response ? e.response.data : e)
	}
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i

module.exports = handler