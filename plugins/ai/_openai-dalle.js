import fetch from 'node-fetch'
let handler = async (m, { text, command, conn }) => {

  if (!text) throw 'Masukan teks untuk diubah menjadi gambar'

  let response = await fetch(`https://api.betabotz.org/api/search/openai-image?text=${encodeURIComponent(text)}&apikey=Yuzuru`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'aiimg.jpg',  wm, m)

}
handler.command = handler.help = ['aiimg','aiimage','ai-image','dalle']
handler.tags = ['ai']
handler.limit = 3

export default handler
