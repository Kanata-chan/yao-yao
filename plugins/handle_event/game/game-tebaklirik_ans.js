import similarity from 'similarity'
var threshold = 0.72
export async function before(m) {
	var id = m.sender
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hrik/i.test(m.quoted.text) || /.*hrik/i.test(m.text))
		return !0
	this.tebaklirik = this.tebaklirik ? this.tebaklirik : {}
	if (!(id in this.tebaklirik))
		return conn.reply(m.chat, 'Soal itu telah berakhir', m)
	if (m.quoted.id == this.tebaklirik[id][0].id) {
		var isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
		if (isSurrender) {
			clearTimeout(this.tebaklirik[id][3])
			delete this.tebaklirik[id]
			return conn.reply(m.chat, '*Yah Menyerah :( !*', m)
		}
		var json = JSON.parse(JSON.stringify(this.tebaklirik[id][1]))
		// m.reply(JSON.stringify(json, null, '\t'))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			global.db.data.users[m.sender].mp += this.tebaklirik[id][2]
			conn.reply(m.chat, `*[ b e n a r ]*\n\n*[ hadiah ]* => ${this.tebaklirik[id][2]} MP`, m)
			clearTimeout(this.tebaklirik[id][3])
			delete this.tebaklirik[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			conn.reply(m.chat, `*[ s a l a h ]*\n\n*[ hint ]* => *#hrik*\nketik nyerah untuk menyerah`, m)
	}
	return !0
}