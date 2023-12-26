import similarity from 'similarity'
var threshold = 0.72
var handler = m => m

handler.before = async function(m) {
	this.game = this.game ? this.game : {}
	var id = 'family100_' + m.chat
	if (!(id in this.game))
		return !0

	var room = this.game[id]
	var text = m.text.toLowerCase().replace(/[^\w\s\-]+/, '')
	var isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)

	if (!isSurrender) {
		var index = room.jawaban.indexOf(text)
		if (index < 0) {
			if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold)
				m.reply('Dikit lagi!')
			return !0
		}
		if (room.terjawab[index]) {
			m.reply('sudah terjawab')
			return !0
		}
		var users = db.data.users[m.sender]
		room.terjawab[index] = m.sender
		users.mp += room.winScore
	}

	var isWin = room.terjawab.length === room.terjawab.filter(v => v).length
	var caption = `*[ f a m i l y 100 ]*


*[ soal ]* => ${room.soal}
Terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
` : ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}

${isSurrender ? '' : `${room.winScore} MP tiap jawaban benar`}`.trim()

	// Menentukan penjawab terbanyak
	var answerCounts = {}
	room.terjawab.forEach(answer => {
		if (answer) {
			if (answerCounts[answer]) {
				answerCounts[answer]++
			} else {
				answerCounts[answer] = 1
			}
		}
	})

	var maxAnswerCount = 0
	var topAnswerer = ''

	Object.entries(answerCounts).forEach(([answerer, count]) => {
		if (count > maxAnswerCount) {
			maxAnswerCount = count
			topAnswerer = answerer
		}
	})

	caption += `\n*[ Top Answerer ]* => ${topAnswerer ? '@' + topAnswerer.split('@')[0] : '-'}`

	var msg = await conn.reply(m.chat, caption, null, {
		mentions: this.parseMention(caption)
	})
	room.msg = msg

	// Menghapus data game jika melewati batas waktu 6 menit
	if (isWin || isSurrender) {
		clearTimeout(this.game[id].tot)
		delete this.game[id]
	}

	return !0
}

export default handler