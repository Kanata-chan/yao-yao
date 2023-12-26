var {
	webp2png
} = require('../../lib/webp2mp4.cjs');
var uploadImage = require('../../lib/uploadImage.cjs');
var handler = async (m, {
	conn,
	text,
	usedPrefix,
	command,
	isBotAdmin,
	isAdmin,
	isOwner
}) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (!/webp|image/g.test(mime)) throw 'kirim gambar/sticker atau reply gambar/sticker dengan caption #upscale'
	var img = await q.download?.()
	if (!img) throw 'kirim gambar/sticker atau reply gambar/sticker dengan caption #upscale'
	var buffer = img
	if (/webp/g.test(mime)) buffer = await getbuffer(await webp2png(img))
	var upl = await uploadImage(buffer)
	try {
		await m.reply('*u p s c a l l i n g. . .*')
		var a = await getbuffer(API('xzn', 'api/torch-srgan', {
			url: upl
		}, 'apikey'))
		conn.sendFile(m.chat, a, "", "*SUCESS...*", m)
	} catch (e) {
		throw "can't upscaling image"
	}
}
handler.tags = ['tools']
handler.command = handler.help = ['upscale']
module.exports = handler