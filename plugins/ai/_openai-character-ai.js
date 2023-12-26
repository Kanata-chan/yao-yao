 const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw(`Input Text Dan Karakter!\nExample: ${usedPrefix + command} hai Kirito|kamu sedang apa?`)    
  try {
    let [ logic, prompt ] = text.split('|')
    m.reply(`Tunggu sebentar...`)
    let res = await fetch(`https://api.betabotz.org/api/search/c-ai?prompt=${prompt}?&char=${logic}&apikey=${lann}`)
    let json = await res.json()
    m.reply(json.message)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat menjalankan perintah.')
  }
}

handler.command = handler.help = ['c-ai','character-ai']
handler.tags = ['ai']
handler.premium = false
handler.limit = 3
handler.group = false
handler.private = false

export default handler
