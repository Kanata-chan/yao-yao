var handler = async (m, {
	text,
	conn
}) => {
	if (!text) throw 'apikey louh'
	var v = (await axios.get(API('xzn', 'checkapikey', {
		apikey: text
	}))).data
	throw v
}
handler.command = ['cek', 'apikey'];
module.exports = handler;