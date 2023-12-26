var timeout = 60000
var poin = 2000
var {
	sticker
} = require('../../lib/sticker.cjs')
var handler = async (m, {
	conn,
	usedPrefix
}) => {
	conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
	try {
		var id = m.sender
		var a = await axios.get(API('xzn', 'api/game/tebakgambar', {}, 'apikey'))
		if (!a.data.lvl) throw a.data
		if (id in conn.tebakgambar) {
			conn.reply(m.chat, 'Masih ada soal belum kamu selesaikan', conn.tebakgambar[id].msg)
			throw false
		}
		var json = a.data
		// if (!json.status) throw json
		var caption = ` *[ t e b a k - g a m b a r ]*

🎋 Silahkan Tebak Gambar di Sticker Tersebut.

*[ Timeout ]* ${(timeout / 1000).toFixed(2)} detik
*[ Bantuan ]* ${usedPrefix}hint untuk bantuan
*[ Hadiah ]* ${poin} MP

!!! Reply pesan ini untuk menjawab
`.trim()
		var c = await conn.sendFile(m.chat, await sticker(json.img, "",""), "", "", m)
		conn.tebakgambar[id] = {
			msg: await conn.reply(m.chat, caption, c),
			json,
			poin: poin,
			tot: setTimeout(() => {
				if (conn.tebakgambar[id]) conn.reply(m.chat, `*[ t i m e o u t ]*

🎋 *kamu kalah*

Ayo coba lagi🧢`, conn.tebakgambar[id].msg)
				delete conn.tebakgambar[id]
			}, timeout)
		}
	} catch (e) {
		log(e)
		throw 'terjadi kesalahan'
	}
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

module.exports = handler