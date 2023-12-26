import similarity from 'similarity'
var threshold = 0.72
export async function before(m) {
	var id = m.sender
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hki/i.test(m.quoted.text) || /.*hki/i.test(m.text))
		return !0
	this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
	if (!(id in this.tebakkimia))
		return conn.reply(m.chat, 'Soal itu telah berakhir', m)
	if (m.quoted.id == this.tebakkimia[id][0].id) {
		var isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
		if (isSurrender) {
			clearTimeout(this.tebakkimia[id][3])
			delete this.tebakkimia[id]
			return conn.reply(m.chat, '*Yah Menyerah :( !*', m)
		}
		var json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
		// m.reply(JSON.stringify(json, null, '\t'))
		if (m.text.toLowerCase() == json.nama.toLowerCase().trim()) {
			global.db.data.users[m.sender].mp += this.tebakkimia[id][2]
			conn.reply(m.chat, `*[ b e n a r ]*\n\n*[ hadiah ]* => ${this.tebakkimia[id][2]} MP\n*[ nama ]* => ${json.nama}\n*[ lambang ]* => ${json.lambang}\n*[ nomor atom ]* => ${json.nomer_atom}`, m)
			clearTimeout(this.tebakkimia[id][3])
			delete this.tebakkimia[id]
		} else if (similarity(m.text.toLowerCase(), json.nama.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			conn.reply(m.chat, `*[ s a l a h ]*\n\n*[ hint ]* => *#hki*\nketik nyerah untuk menyerah`, m)
	}
	return !0
}