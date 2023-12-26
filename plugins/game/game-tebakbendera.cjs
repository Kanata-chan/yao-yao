var timeout = 60000
var poin = 1000
var { sticker } = require('../../lib/sticker.cjs')
var handler = async (m, {
	conn,
	usedPrefix
}) => {
	conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
	try {
		var id = m.sender
		if (id in conn.tebakbendera) {
			conn.reply(m.chat, 'Masih ada soal belum kamu selesaikan', conn.tebakbendera[id].msg)
			throw false
		}
		var anua = await axios.get(API('xzn', 'api/game/tebakbendera', {}, 'apikey'))
		var json = anua.data
		if (!json.img) throw "error"
		// if (!json.status) throw json
		var caption = ` *[ t e b a k - b e n d e r a ]*

🎋 Silahkan Tebak Bendera di Sticker Tersebut.

*[ Timeout ]* ${(timeout / 1000).toFixed(2)} detik
*[ Bantuan ]* ${usedPrefix}hben untuk bantuan
*[ Hadiah ]* ${poin} MP

!!! Reply pesan ini untuk menjawab
`.trim()
		var c = await conn.sendFile(m.chat, await sticker(json.img, "", ""), "", "", m)
		conn.tebakbendera[id] = [
			await conn.reply(m.chat, caption, c),
			json,
			poin,
			setTimeout(() => {
				if (conn.tebakbendera[id]) conn.reply(m.chat, `*[ t i m e o u t ]*

🎋 *kamu kalah*

Ayo coba lagi🧢`, conn.tebakbendera[id].msg)
				delete conn.tebakbendera[id]
			}, timeout)
		]
	} catch (e) {
		log(e)
		throw 'terjadi kesalahan'
	}
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

module.exports = handler