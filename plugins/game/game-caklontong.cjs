var timeout = 30000
var poin = 1000
var handler = async (m, {
	conn,
	command,
	usedPrefix
}) => {
	conn.caklontong = conn.caklontong ? conn.caklontong : {}
	var id = m.sender
	if (id in conn.caklontong) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.caklontong[id][0])
		throw false
	}
	var src
	try {
		var anua = await axios.get(API('xzn', 'api/game/caklontong', {}, 'apikey'))
		src = anua.data
		if (!src.soal) throw src
		var caption = `*[ c a k - l o n t o n g ]*
${src.soal}

*[ Timeout ]* => ${(timeout / 1000).toFixed(2)} detik
*[ Bonus ]* => ${poin} MP
Ketik ${usedPrefix}calo untuk bantuan
	`.trim()
		conn.caklontong[id] = [
			await conn.reply(m.chat, caption, m),
			src, poin,
			setTimeout(() => {
				if (conn.caklontong[id]) conn.reply(m.chat, `*[ t i m e o u t ]*\n🎋 Waktu habis, Jawabannya adalah *${src.jawaban}*`, conn.caklontong[id][0])
				delete conn.caklontong[id]
			}, timeout)
		]
	} catch (e) {
		log(e.response ? e.response.data : e)
		throw (e.response ? e.response.data : e)
	}
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

module.exports = handler