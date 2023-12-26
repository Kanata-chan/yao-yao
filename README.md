## Yao Yao Bot Powered By [skizo.tech](https://skizo.tech)

---------

<p align="center">
<img src="https://media1.giphy.com/media/tXwHTbQuyjo1q/giphy.gif" width="128" height="128"/>


</p>
<p align="center">
<a href="#"><img title="Yao Yao" src="https://img.shields.io/badge/Yao-Yao-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/Kanata-chan/yao-yao"><img title="Author" src="https://img.shields.io/badge/Kanata-chan-red.svg?style=for-the-badge&logo=github"></a>
</p>


<p align='center'>
   <a href="https://wa.me/6283825144098?text=hello"><img height="30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc_3WgZjWOtqdKZQbdkxUl5A31GZ_YC35zQ&usqp=CAU"></a>
</P>
</p>
</div>

---

## Yao Yao Bot whatsapp 
> Yao Yao Bot whatsapp using a Baileys library. Jika kamu menemukan semacam bug, harap untuk memberitahu saya di [group whatsapp](https://chat.whatsapp.com/BvJNDpjSPfUIcGcoyNalr1)
>

---------

## Information
> This Bot is Powered by [skizo.tech API](https://skizo.tech)

> Get Apikey On [whatsapp](https://wa.me/6282331033919)

---------

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker command)

# Instalasi

---------

### RUN ON REPLIT
1. Kunjungi web [ini](https://replit.com)
2. Login atau register
3. Tekan Create Repl
4. Tekan `import for github`
5. Cari Repo ini atau ketikkan `findme-19/milkita`
6. Language Cari/Ketik `nix Bash` jangan nodejs
7. Tekan `Import from Github`
8. Edit `config.js` ganti nomer owner dengan nomermu atau edit yang lainnya
9. Geser ke Kanan cari tulisan `Shell` lalu klik
10. Ketikkan `npm install` untuk menginstall module
11. Tunggu hingga proses install module selesai
12. Jalankan Bot dengan ketikkan ini
```bash
node . --server
```


---------


### FOR TERMUX USER
1. Type mentioned below given commands one by one in Termux.
```sh
$ pkg upgrade && pkg update && pkg install git nodejs ffmpeg imagemagick nano bash mc -y
$ git clone https://github.com/Kanata-chan/yao-yao
$ cd milkita
$ npm install -g npm@6.14.14 && npm install
$ node .
```
2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Join `Multi Device Beta` > Click on `link device`)
4. Now your bot is ready to rock n roll.

---------

# On Termux With Ubuntu

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & milkita ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/Kanata-chan/yao-yao
cd milkita
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Kanata-chan/yao-yao
cd milkita
npm install
npm update
```

---------

## Run

```bash
node .
```

---------
# Arguments `node . [--options]`

### `--use_phone`

Activate bot using phone number (no scan qr)

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--db`

pass mongodb url or cloud url to connect to database, by the default it will connect to database.json

---------
### Stop the Bot

```bash
> ctrl + c
```
--------
## Edit file
- Change All Config on [this section](https://github.com/findme-19/milkita/blob/main/config.js)
- You can add fiture on [this section](https://github.com/findme-19/milkita/tree/main/plugins)


after running it you need to scan the qr

## Donate
- [Chat Me](https://wa.me/6283825144098)

# Official Group
- [Official Group](https://chat.whatsapp.com/BvJNDpjSPfUIcGcoyNalr1)


---------
## How To Add new Feature
```js
var handler = async (m, {
	command,
	args,
	text,
	usedPrefix
}) => {
 // taruh di sini kodemu
}

handler.command = ['perintah'] // add di sini command nya
handler.help = ['perintah'] // menampilkan command ini di menu
handler.tags = ['main'] // menampilkan di menu di kategori tag main
handler.group = true // isi true untuk command yang tidak bisa di akses di private chat
handler.admin = true // isi true jika command hanya bisa di akses admin group
handler.botAdmin = true // bisa di akses jika bot termasuk admin group (true)
handler.limit = 1 // 1 limit akan di pakai
handler.level = 12 // dapat di akses jika user sudah level 12
handler.owner = true // hanya dapat di akses owner
handler.disabled = true // tidak dapat di akses siapapun
handler.premium = true // hanya dapat di akses user premium
module.exports = handler //atau export default handler
```

---------
## How To Customise Message Display

### Send Message
```js
conn.reply(m.chat, 'text', m)
//without reply message
conn.reply(m.chat, 'text', null) // hanya perlu ubah "m" ke null, bisa di terapkan di conn.sendFile
```

### Send Message With Tag
```js
conn.reply(m.chat, 'text @628111111111', m, {
	mentions: ['628111111111@s.whatsapp.net']
})

// or

m.reply('anu @62628111111111', null, {
	mentions: ['628111111111@s.whatsapp.net']
})

// use thumbnail & tag

m.reply('anu @62628111111111', null, {
	contextInfo: {
		mentionedJid: ['628111111111@s.whatsapp.net'],
		externalAdReply: await thumb(buffer_image, ['title', 'body'], [true, true])
	}
})

conn.reply(m.chat, 'anu @628111111111', m, {
	contextInfo: {
		mentionedJid: ['628111111111@s.whatsapp.net'],
		externalAdReply: await thumb(buffer_image, ['title', 'body'], [true, true])
	}
})
```

### Simple Send Message
```js
m.reply('text')
```

### Send All Type File
```js
conn.sendFile(m.chat, 'buffer', 'filename.jpg', 'caption', m)

// mode document
conn.sendFile(m.chat, 'buffer', 'filename.jpg', 'caption', m, null, {
	asDocument: true
})

// mode document and thumbnail
conn.sendFile(m.chat, 'buffer', 'filename.jpg', 'caption', m, null, {
	asDocument: true,
	contextInfo: {
		externalAdReply: await thumb(buffer_image, ['title', 'body'], [true, true])
	}
})

// mode document and thumbnail and tag
conn.sendFile(m.chat, 'buffer', 'filename.jpg', 'caption @628111111111', m, null, {
	asDocument: true,
	contextInfo: {
		mentionedJid: ['628111111111@s.whatsapp.net'],
		externalAdReply: await thumb(buffer_image, ['title', 'body'], [true, true])
	}
})
```

### Send All Type File With Caption Tag
```js
conn.sendFile(m.chat, 'buffer', 'filename.jpg', 'caption @628111111111', m, null, {
mentions: ['628111111111@s.whatsapp.net']
})

//use thumbnail
conn.sendFile(m.chat, 'buffer', 'filename.jpg', 'caption @628111111111', m, null, {
	contextInfo: {
		mentionedJid: ['628111111111@s.whatsapp.net'],
		externalAdReply: await thumb(buffer_image, ['title', 'body'], [true, true])
	}
})

```

### Edit Message
```js
var a = await m.reply('text')
conn.editMessage(m.chat, a.key, 'text', m)

// or

var a = await conn.reply(m.chat, 'text', m)
conn.editMessage(m.chat, a.key, 'text', m)
```
### React Message
```js
m.react('🤑')
```
---------

### Thanks To 
**Allah SWT**
**Nabi Muhammad Shallalahu Alaihi Wasallam**

[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)
[![XZNsenpai](https://github.com/xznsenpai.png?size=100)](https://github.com/xznsenpai)
#### Contributor
[![XZNsenpai](https://github.com/xznsenpai.png?size=100)](https://github.com/xznsenpai)
[![ME](https://github.com/Kanata-chan.png?size=100)]
(https://github.com/Kanata-chan)

---------
