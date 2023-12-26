var timeout = 30000
var poin = 1000
var handler = async (m, {
	conn,
	command,
	usedPrefix
}) => {
	conn.susunkata = conn.susunkata ? conn.susunkata : {}
	var id = m.sender
	if (id in conn.susunkata) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.susunkata[id][0])
		throw false
	}
	var src
	try {
		var anua = await axios.get(API('xzn', 'api/game/susunkata', {}, 'apikey'))
		src = anua.data
		if (!src.soal) throw src
		var caption = `*[ s u s u n - k a t a ]*
${src.soal}
${src.tipe}

*[ Timeout ]* => ${(timeout / 1000).toFixed(2)} detik
*[ Bonus ]* => ${poin} MP
Ketik ${usedPrefix}hsun untuk bantuan
	`.trim()
		conn.susunkata[id] = [
			await conn.reply(m.chat, caption, m),
			src, poin,
			setTimeout(() => {
				if (conn.susunkata[id]) conn.reply(m.chat, `*[ t i m e o u t ]*\n🎋 Waktu habis, Jawabannya adalah *${src.jawaban}*`, conn.susunkata[id][0])
				delete conn.susunkata[id]
			}, timeout)
		]
	} catch (e) {
		log(e.response ? e.response.data : e)
		throw (e.response ? e.response.data : e)
	}
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

module.exports = handler