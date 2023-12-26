import similarity from 'similarity'
var threshold = 0.72
export async function before(m) {
	var id = m.sender
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hsun/i.test(m.quoted.text) || /.*hsun/i.test(m.text))
		return !0
	this.susunkata = this.susunkata ? this.susunkata : {}
	if (!(id in this.susunkata))
		return conn.reply(m.chat, 'Soal itu telah berakhir', m)
	if (m.quoted.id == this.susunkata[id][0].id) {
		var isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
		if (isSurrender) {
			clearTimeout(this.susunkata[id][3])
			delete this.susunkata[id]
			return conn.reply(m.chat, '*Yah Menyerah :( !*', m)
		}
		var json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
		// m.reply(JSON.stringify(json, null, '\t'))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			global.db.data.users[m.sender].mp += this.susunkata[id][2]
			conn.reply(m.chat, `*[ b e n a r ]*\n\n*[ hadiah ]* => ${this.susunkata[id][2]} MP`, m)
			clearTimeout(this.susunkata[id][3])
			delete this.susunkata[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			conn.reply(m.chat, `*[ s a l a h ]*\n\n*[ hint ]* => *#hsun*\nketik nyerah untuk menyerah`, m)
	}
	return !0
}