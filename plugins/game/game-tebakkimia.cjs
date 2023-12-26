var timeout = 30000
var poin = 1000
var handler = async (m, {
	conn,
	command,
	usedPrefix
}) => {
	conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
	var id = m.sender
	if (id in conn.tebakkimia) {
		conn.reply(m.chat, 'Selesaikan permainanmu dulu sebelum memulai permainan baru', conn.tebakkimia[id][0])
		throw false
	}
	var src
	try {
		var anua = await axios.get(API('xzn', 'api/game/tebakkimia', {}, 'apikey'))
		src = anua.data
		if (!src.nama) throw src
		var caption = `*[ t e b a k - k i m i a ]*
Nama unsur dari lambang ${src.lambang} adalah...

*[ Timeout ]* => ${(timeout / 1000).toFixed(2)} detik
*[ clue ]* => ${'```' + src.nama.replace(/[a-zA-Z]/g, ' _') + '```'}
*[ nomor atom ]* => ${src.nomer_atom}
*[ Bonus ]* => ${poin} MP
Ketik ${usedPrefix}hki untuk bantuan
	`.trim()
		conn.tebakkimia[id] = [
			await conn.reply(m.chat, caption, m),
			src, poin,
			setTimeout(() => {
				if (conn.tebakkimia[id]) conn.reply(m.chat, `*[ t i m e o u t ]*\n🎋 Waktu habis, Jawabannya adalah *${src.nama}*`, conn.tebakkimia[id][0])
				delete conn.tebakkimia[id]
			}, timeout)
		]
	} catch (e) {
		log(e.response ? e.response.data : e)
		throw (e.response ? e.response.data : e)
	}
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

module.exports = handler