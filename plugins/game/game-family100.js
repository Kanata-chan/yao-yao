var winScore = 200
var timeout = 360000
async function handler(m) {
	try {
		this.game = this.game ? this.game : {}
		var id = 'family100_' + m.chat
		if (id in this.game) {
			this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
			throw false
		}
		var json = (await axios.get(API('xzn', 'api/game/family100', {}, 'apikey'))).data
		log(json.jawaban)
		var caption = `*[ f a m i l y 100 ]*


*[ soal ]* => ${json.soal}
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

*[ hadiah ]* => ${winScore} MP tiap jawaban benar
*[ timeout ]* => ${timeout / 60000} menit
	`.trim()
		this.game[id] = {
			id,
			msg: await this.reply(m.chat, caption, m),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
			winScore,
			tot: setTimeout(() => {
				if (this.game[id]) conn.reply(m.chat, `*[ t i m e o u t ]*

🎋 *game berakhir*

Ayo main lagi🧢`, this.game[id].msg)
				delete this.game[id]
			}, timeout) // Menyimpan waktu mulai game
		}
	} catch (e) {
		log(e)
		m.reply('terjadi kesalahan...')
	}
}

handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

export default handler