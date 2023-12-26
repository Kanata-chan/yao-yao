import youtube from "yt-search";
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Url nya mana?'
  m.reply('_Proses..._')
  var search = await youtube(text);
  var convert = search.videos[0];
  let res = `https://aemt.me/youtube?url=${convert.url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`
  conn.sendMessage(m.chat, { video: { url: res }, mimetype: 'video/mp4' }, { quoted: m })
}
handler.command = handler.help = ['ytv']
handler.tags = ['downloader']
export default handler
