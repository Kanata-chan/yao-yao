var similarity = require('similarity')
var threshold = 0.72
var handler = m => m
handler.before = async function(m) {
	var id = m.sender
	if (!m.quoted || !m.quoted.fromMe || !m.text || !m.quoted.isBaileys || !/.*hint/i.test(m.quoted.text))
		return !0
	this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
	if (!(id in this.tebakgambar))
		return !0 //conn.reply(m.chat, 'Soal itu telah berakhir', m)
	if (m.sender in this.tebakgambar && m.quoted.id == this.tebakgambar[id].msg.id) {
		var isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
		if (isSurrender) {
			clearTimeout(this.tebakgambar[id].tot)
			delete this.tebakgambar[id]
			return conn.reply(m.chat, '*Yah Menyerah :( !*', m)
		}
		var json = JSON.parse(JSON.stringify(this.tebakgambar[id].json))
		// m.reply(JSON.stringify(json, null, '\t'))
		if (m.text.toLowerCase() == json.jwb.toLowerCase().trim()) {
			db.data.users[m.sender].mp += this.tebakgambar[id].poin
			conn.reply(m.chat, `*[ b e n a r ]*\n\n*[ hadiah ]* ${this.tebakgambar[id].poin} MP`, m)
			clearTimeout(this.tebakgambar[id].tot)
			delete this.tebakgambar[id]
		} else if (similarity(m.text.toLowerCase(), json.jwb.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			conn.reply(m.chat, `*Salah!*\n\nketik *nyerah* untuk menghentikan permainan`, m)
	}
	return !0
}
module.exports = handler