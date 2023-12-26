import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Masukan detail gambar!* `;
  try {
    conn.reply(m.chat, wait, m)
    const res = await fetch(`https://api.betabotz.org/api/maker/text2img?text=${text}&apikey=${lann}`).then(res => res.buffer());
    const textResult = res.toString();
    const prompt = textResult.split('Negative prompt: ')[1].split('Steps:')[0].trim();
    const additionalText = textResult.split('Lora hashes:')[1].split('Version:')[0].trim();
    conn.sendFile(m.chat, res, 'image.jpg', `Negative prompt: ${prompt}\n${additionalText}`, m);
  } catch (error) {
    m.reply(`Error: ${error.message}`);
  }
};

handler.command = handler.help = ['text2img'];
handler.tags = ['ai'];
handler.limit = 3;
export default handler;
