import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch(`https://api.waifu.pics/sfw/neko`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error!'
conn.sendFile(m.chat, json.url, '', 'istri kartun', m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = true
export default handler
