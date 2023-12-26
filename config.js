import fs, {
	watchFile,
	unwatchFile
} from 'fs'
import {
	fileTypeFromBuffer,
	fileTypeStream
} from 'file-type'
import chalk from 'chalk'
import {
	fileURLToPath
} from 'url'
import moment from 'moment-timezone'
import md5 from 'md5';
import {
	protoType,
	serialize
} from './lib/simple.js';
protoType();
global.md5 = md5;
global.fromBuffer = fileTypeFromBuffer
global.stream = fileTypeStream
global.moment = moment
/*============= WAKTU =============*/
global.owner = [
	//	['6283825144098'],
	['6283825144098'],
	['628811524907'],
	['6283825144098'],
	['6289687889645', 'Neko', true]
	// [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.botName = 'Whatsapp-Bot'
global.ram_usage = 6000000000 // 600 MB in this example [Ram Limiter (if your server ram is 1GB put 900MB in bytes, later the server will auto restart before using 1GB ram)]
global.packname = 'I ʜᴏᴘᴇ Yᴏᴜ\'ʀᴇ ғɪɴᴇ'
global.author = '@tohruoffc'
global.wm = '©Credits'
global.no_wallet = '083825144098'
global.nomorown = '083825144098'
global.xznkey = 'keydb' // chat atmin buat dapetin apikeynya
global.profil = fs.readFileSync("./src/profil.jpg")
global.anunya = fs.readFileSync("./src/anunya.jpg")
global.log = function log() {
	var args = [].slice.call(arguments);
	console.log.apply(console, args);
}
global.APIs = { // API Prefix
	// name: 'https://website'
	xzn: 'https://skizo.tech/'
}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://skizo.tech/': xznkey
}
global.multiplier = 69
// Function untuk menghitung keuntungan berdasarkan persentase
function calculateProfit(originalPrice, profitPercentage) {
	if (originalPrice <= 0 || profitPercentage <= 0) {
		return 0; // Mengembalikan 0 jika harga asli atau persentase keuntungan tidak valid
	}

	var profitAmount = (originalPrice * profitPercentage) / 100; // Menghitung jumlah keuntungan
	var totalPrice = originalPrice + profitAmount; // Menghitung harga total

	return {
		profitAmount: profitAmount,
		totalPrice: totalPrice
	};
}
global.getbuffer = async function getBuffer(url, options) {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
// profit via persentase
var file = fileURLToPath(
	import.meta.url)
watchFile(file, () => {
	unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	import(`${file}?update=${Date.now()}`)
})

function ucapan() {
	var time = moment.tz('Asia/Jakarta').format('HH')
	var res
	res = tiny("Selamat pagi ")
	if (time >= 4) {
		res = tiny("Selamat pagi ")
	}
	if (time > 10) {
		res = tiny("Selamat siang ")
	}
	if (time >= 15) {
		res = tiny("Selamat sore ")
	}
	if (time >= 18) {
		res = tiny("Selamat malam ")
	}
	return res
}

// Message filter
var usedCommandRecently = new Set()

/**
 * Check is number filtered.
 * @param {String} from 
 * @returns {Boolean}
 */
global.isFiltered = (from) => {
	return !!usedCommandRecently.has(from)
}

/**
 * Add number to filter.
 * @param {String} from 
 */
global.addFilter = (from) => {
	usedCommandRecently.add(from)
	setTimeout(() => {
		return usedCommandRecently.delete(from)
	}, 3000) // 5 seconds delay, I don't recommend below that.
}

global.thumb = async function thumb(url, text, attribute) {
	return {
		mediaType: 1,
		description: '',
		title: text && text.length > 0 ? text[0] : "",
		mediaUrl: "",
		body: text && text.length > 1 ? text[1] : "",
		thumbnailUrl: "",
		thumbnail: Buffer.isBuffer(url) ? url : { url },
		sourceUrl: Buffer.isBuffer(url) ? '' : attribute.length > 2 ? url : '',
		showAdAttribution: attribute && attribute.length > 0 ? attribute[0] : false, // false
		renderLargerThumbnail: attribute && attribute.length > 1 ? attribute[1] : false // false
	}
}
global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
	emoticon(string) {
		string = string.toLowerCase()
		let emot = {
			role: '🏅',
			level: '🧬',
			limit: '🌌',
			health: '❤️',
			exp: '✉️',
			money: '💵',
			potion: '🥤',
			diamond: '💎',
			common: '📦',
			uncommon: '🎁',
			mythic: '🗳️',
			legendary: '🗃️',
			pet: '🎁',
			trash: '🗑',
			armor: '🥼',
			sword: '⚔️',
			pickaxe: '⛏️',
			fishingrod: '🎣',
			bow: '🏹',
			wood: '🪵',
			rock: '🪨',
			string: '🕸️',			
			iron: '⛓️',
			gold: '👑',
			emerald: '💚',
			bibitmangga: '🌾',
			bibitanggur: '🌾',
			bibitjeruk: '🌾',
			bibitpisang: '🌾',
			bibitapel: '🌾',
			mangga: '🥭',
			anggur: '🍇',
			jeruk: '🍊',
			pisang: '🍌',
			apel: '🍎',			
			orca: '🐋',
			paus: '🐳',
			lumba: '🐬',
			hiu: '🦈',
			ikan: '🐟',
			lele: '🐟',
			bawal: '🐡',
			nila: '🐠',
			kepiting: '🦀',
			lobster: '🦞',
			gurita: '🐙',
			cumi: '🦑',
			udang: '🦐',
			steak: '🍝',
			sate: '🍢',
			rendang: '🍜',
			kornet: '🥣',
			nugget: '🍱',
			bluefin: '🍲',
			seafood: '🍛',
			sushi: '🍣',
			moluska: '🥘',
			squidprawm: '🍤',
			rumahsakit: '🏥',
			restoran: '🏭',
			pabrik: '🏯',
			tambang: '⚒️',
			pelabuhan: '🛳️'
		}
		let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
		if (!results.length) return ''
		else return emot[results[0][0]]
		}
	},
	
global.pmenus = ["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "⛥", "✗", "⚜", "⚚", "♪"].getRandom()
global.htjava = ["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"].getRandom()
global.cmenut = htjava + "───『"
global.cmenuh = "』───" + htjava
global.cmenub = "│" + pmenus
global.cmenuf = "╰──────────⳹"
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS

global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''