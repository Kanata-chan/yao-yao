let handler = async(m, {
	conn,
	text,
	command
}) => {
	let yh = global.arcive
	let url = yh[Math.floor(Math.random() * yh.length)]
	conn.sendMessage(m.chat, {
		image: {
			url: url
		},
		caption: "ʀᴀɴᴅᴏᴍ ʙʟᴜᴇ ᴀʀᴄɪᴠᴇ - ɪѕ ᴄᴜᴛᴇ 🥺"
	}, {
		quoted: m
	});
}
handler.command = /^(bluearcive)$/i
handler.tags = ['anime']
handler.help = ['bluearcive']
export default handler

global.arcive = [
 "https://telegra.ph/file/5b160a14baaf8324f7824.jpg",
   "https://telegra.ph/file/8b8da6bb3f83709eb42e2.jpg",
   "https://telegra.ph/file/61f32df01a1cd2edfe2d4.jpg",
   "https://telegra.ph/file/e5e5db82370983682427a.jpg",
   "https://telegra.ph/file/2ed8a6237387b8b4929c2.jpg",
   "https://telegra.ph/file/0122e88bf15703c4e61e5.jpg",
   "https://telegra.ph/file/3f7bbc6c0c172251c09ce.jpg",
   "https://telegra.ph/file/3e274a4b75716356edad6.jpg",
   "https://telegra.ph/file/cf2fd21717ce82fac150d.jpg",
   "https://telegra.ph/file/dee536c466a1f0124a9bb.jpg",
   "https://telegra.ph/file/99b76b5a73807d0618cfb.jpg",
   "https://telegra.ph/file/15dd01fac168f3d59c8a0.jpg",
   "https://telegra.ph/file/a681094644059b3e8e996.jpg",
   "https://telegra.ph/file/5928679192ebe60ec1933.jpg",
   "https://telegra.ph/file/7912c3775d6b8fda80609.jpg",
   "https://telegra.ph/file/b54563c1aeea827863593.jpg",
   "https://telegra.ph/file/4aea73ce72e66cbb7cdfa.jpg",
   "https://telegra.ph/file/5666e8dc7476b418541d7.jpg",
   "https://telegra.ph/file/ee72302a3d331db29bc81.jpg",
   "https://telegra.ph/file/3cea5fe026416605ae088.jpg",
   "https://telegra.ph/file/9b806b97451c752214450.jpg",
   "https://telegra.ph/file/89378d0f3116b98b00b7e.jpg",
   "https://telegra.ph/file/6e5ec129a770666c95d47.jpg",
   "https://telegra.ph/file/1318734ca629be132e569.jpg",
   "https://telegra.ph/file/82df9bc68c2239bd19d12.jpg",
   "https://telegra.ph/file/2a5ee0e9aa0a75bfecaf6.jpg",
   "https://telegra.ph/file/f9128b6c5f1dd699d76cb.jpg",
   "https://telegra.ph/file/6e1c9e70477a59e9ca12b.jpg",
   "https://telegra.ph/file/21fbc3ee94cfe0a8ec41a.jpg",
   "https://telegra.ph/file/d745e0163b2ff677fb867.jpg",
   "https://telegra.ph/file/ac80fa30e163c7b51a07b.jpg",
   "https://telegra.ph/file/50357c59d771bc00d1718.jpg",
   "https://telegra.ph/file/a27be2e9959584fbcfa8f.jpg",
   "https://telegra.ph/file/7afee419b7d99a9e51cac.jpg",
   "https://telegra.ph/file/73e1d710eb82623a65aec.jpg",
   "https://telegra.ph/file/a2fd8b7dfc602bc565194.jpg",
   "https://telegra.ph/file/58899ec15f17ec7128bf6.jpg",
   "https://telegra.ph/file/aa64fbdb810d21876fea7.jpg",
   "https://telegra.ph/file/0f1657e8d18d6b1ba4eee.jpg",
   "https://telegra.ph/file/8d43d78f9caf954a3fc42.jpg",
   "https://telegra.ph/file/f29f6e3ed2710790e0861.jpg",
   "https://telegra.ph/file/a459c75751e5b854796e5.jpg",
   "https://telegra.ph/file/5fc62e7e49504337c7bd3.jpg",
   "https://telegra.ph/file/e9e3c2c7c20d11ce14736.jpg",
   "https://telegra.ph/file/ebaedb80500af206b1eb5.jpg",
   "https://telegra.ph/file/f415f21d90fa34302c4a5.jpg",
   "https://telegra.ph/file/07b668ae37f6682c29b26.jpg",
   "https://telegra.ph/file/39f72f5514395f19d427c.jpg",
   "https://telegra.ph/file/b52823feaddb307c17f30.jpg",
   "https://telegra.ph/file/466ada22af4d70adb910d.jpg",
   "https://telegra.ph/file/e3b1184fb607d1a144ad9.jpg",
   "https://telegra.ph/file/c088d3b389d94e176d136.jpg",
   "https://telegra.ph/file/7b7c9ddb1f87dc64cad46.jpg",
   "https://telegra.ph/file/2ec8ce9413bfcd595346d.jpg",
   "https://telegra.ph/file/fdce6e3fc996261313a77.jpg",
   "https://telegra.ph/file/ec680c56e6642e432091c.jpg",
   "https://telegra.ph/file/ef971ed073ab2f747f822.jpg",
   "https://telegra.ph/file/0de92ff731cfc7baaf790.jpg",
   "https://telegra.ph/file/dc204db9a2f58d2429e37.jpg",
   "https://telegra.ph/file/da0153d781e8b43545455.jpg",
   "https://telegra.ph/file/d77a896cc52a4336eac17.jpg",
   "https://telegra.ph/file/1eb9f016445522e26e29c.jpg",
   "https://telegra.ph/file/b2b4108a4136f27f95080.jpg",
   "https://telegra.ph/file/eb01b0eb9f97e29a7c234.jpg",
   "https://telegra.ph/file/9742af9f486226a935853.jpg"
]