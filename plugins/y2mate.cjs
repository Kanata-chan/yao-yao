/*var handler = async (m, { text, conn }) => {
  var delay = time => new Promise(res => setTimeout(res,time))
  if (!text) throw 'negara mana cuba';
  var body = text.replace(/\s+/g, '+')
  try {
    xzn = await axios.get(API('xzn','api/y2mate', {url: body}, 'apikey'));
    a = await xzn.data;
    b = await (await axios.get(a.links.video.auto.url)).data;
    await conn.sendFile(m.chat, b.dlink, '', b.title, m)
  } catch (e) {
   throw e
  };
};
handler.help = handler.command = ['y2mate'];
handler.tags = ['tiktok'];

module.exports = handler;*/