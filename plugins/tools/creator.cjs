import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let own1 = global.nomorown
let owname1 = global.nameown1
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Krey\nNICKNAME: ${owname1}\nORG: Krey\nTITLE:\nitem1.TEL;waid=${own1}:${own1}\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://google.com\nitem2.EMAIL;type=INTERNET: -\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: m })
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner)$/i

export default handler