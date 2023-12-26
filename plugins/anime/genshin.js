
let handler = async (m, { conn, command, usedPrefix, args}) => {
 let type = (args[0] || '').toLowerCase()
 const krktr = ` List Karakter : \n\nExample : .charagi keqing\n\n-jean\n-amber\n-lisa\n-kaeya\n-barbara\n-diluc\n-razor\n-venti\n-klee\n-bennet\n-noelle\n-fischl\n-sucrose\n-mona\n-diona\n-thoma\n-albedo\n-rosaria\n-eula\n-mika\n-xiao\n-beidou\n-ningguang\n-xiangling\n-xingqiu\n-chongyun\n-qiqi\n-keqing\n-tartaglia\n-zhongli\n-xinyan\n-ganyu\n-hutao\n-yanfei\n-shenhe\n-yunjin\n-yelan\n-yaoyao\n-baizhu\n-ayaka\n-kazuha\n-yoimiya\n-sayu\n-raiden\n-sara\n-kokoumi\n-arrataki\n-gorou\n-yaemiko\n-ayato\n-kuki\n-heizou\n-kirara\n-tighnari\n-collei\n-dori\n-cyno\n-candace\n-nilou\n-nahida\n-layla\n-wanderer\n-faruzan\n-alhaitam\n-dehya\n-kaveh\n-lyney\n-lynette\n-freminet\n-neuvillette\n-wriothesley\n-charlotte\n-furina\n-navia\n-lumine\n-aether`
     try {
    if (/charagi/i.test(command)) {
  switch(type) {
   case 'jean':
    let biodata = `*KSATRIA DANDELION*
*NAMA:* Jean Gunnhildr
*HARI ULANG TAHUN:* 14 Maret
*KONSTELASI:* Singa Kecil 
*WILAYAH:*
Mondstadt
*AFILIASI:* 
• Knights of Favonius 
• Empat Angin
*Klan:* Gunnhildr
*HIDANGAN SPESIAL:* Pizza yang Menyegarkan
*KARTU NAMA* Jean: Kursus Angin`
    let gambar = 'https://telegra.ph/file/f32149583e0db0ad36051.jpg'
      conn.sendMessage(m.chat, { image : {url: gambar}, caption: biodata}, {quoted:m})
        break
        case 'amber':
        let amber = `*JUARA MELUNCUR*
*Nama:* Amber
*ULANG TAHUN:* 10 Agustus
*KONSTELASI:* Kelinci
*WILAYAH:*
Mondstadt
*AFILIASI:* Ksatria Favonius
*HIDANGAN SPESIAL:* Steak Juara Outrider!
*KARTU NAMA* Amber: Kelinci`
   let kelinci = 'https://telegra.ph/file/d9093037daa45aae16dfe.jpg'
    conn.sendMessage(m.chat, {image: {url:kelinci}, caption: amber}, {quoted:m})
    break
    case 'lisa': 
   let lisa = `*PENYIHIR MAWAR UNGU*
*Nama:* Lisa Minci
*HARI ULANG TAHUN:* 9 Juni
*KONSTELASI:* Tempus Fugit
*AFILIASI:* 
•Ksatria of Favonius
•Spantamad (sebelumnya)
*HIDANGAN SPESIAL:* Bolognese yang Misterius
*KARTU NAMA* Lisa: Tempus Fugit`
  let witch = 'https://telegra.ph/file/46d54394b7ab8c1b18116.jpg'
    conn.sendMessage(m.chat, { image: {url: witch}, caption: lisa}, {quoted:m})
    break
    case 'kaeya':
      let kaeya = `*PENDEKAR PEDANG ANGIN FROST*
*NAMA:* Kaeya Alberich
*HARI ULANG TAHUN:* 30 November
*KONSTELASI:* Burung Merak
*Wilayah:*
• Mondstadt
• Khaenri'ah
*AFILIASI:*
• Knights of Favonius
• Khaenri'ah
*Klan:* Alberich
*HIDANGAN SPESIAL:* Tusuk Sate Buah
*KARTU NAMA* Kaeya: Burung Merak`
  let burung = 'https://telegra.ph/file/0a91a5d7d6e0fabab2404.jpg'
   conn.sendMessage(m.chat, { image: {url: burung}, caption: kaeya}, {quoted:m})
   break
   case 'barbara':
     let barbara = `*IDOLA BERSINAR*
*Nama:* Barbara Pegg 
 *HARI ULANG TAHUN:* 5 Juli
*KONSTELASI:* Kawah
*WILAYAH:* Mondstadt
*AFILIASI:* Gereja Favonius
*HIDANGAN SPESIAL:* Rebusan Pedas
*KARTU NAMA* barbara: Mengalir`
   let maid = 'https://telegra.ph/file/a966761f15a10621d622a.jpg'
    conn.sendMessage(m.chat, { image: {url: maid}, caption: barbara}, {quoted:m})
  break
  case 'diluc': 
    let diluc = `*SISI GELAP FAJAR*
*NAMA:* Diluc Ragnvindr
*ULANG TAHUN:* 30 April
*KONSTELASI:* Burung Hantu Noktua
*WILAYAH:*
Mondstadt
*AFILIASI:*
•Pabrik Anggur Dawn
• Organisasi intelijen yang tidak disebutkan namanya
• Ksatria Favonius (sebelumnya)
*Klan:* Ragnvindr
 *HIDANGAN SPESIAL:* 
"Suatu Saat di Mondstadt"
 *KARTU NAMA* Diluc: Api`
   let Aapi = 'https://telegra.ph/file/f87369e2e83513c596efc.jpg'
     conn.sendMessage(m.chat, {image : {url:Aapi}, caption: diluc}, {quoted:m})
     break
   case 'razor':
     let razor = `*BOCAH SERIGALA*
*NAMA:* Razor 
*HARI ULANG TAHUN:* 9 September
*KONSTELASI:* Lupus Kecil
*WILAYAH:* Mondstadt
*AFILIASI:* Wolvendom (Andrius)
*HIDANGAN SPESIAL:*
Anak Anjing Hash Brown
*KARTU NAMA* Razor: Serigala Sprint`
   let serigala = 'https://telegra.ph/file/8a60d86aae56ac66bf8d6.jpg'
     conn.sendMessage(m.chat, { image: {url: serigala}, caption: razor}, { quoted:m })
     break
    case 'venti':
      let venti = `*PENYAIR YANG DITULARKAN ANGIN*
*NAMA:* Venti
*HARI ULANG TAHUN:* 16 Juni
*KONSTELASI:* Nyanyian Tuhan
*WILAYAH:* Mondstadt
*AFILIASI:*
• Mondstadt 
•The Seven Archon
*HIDANGAN SPESIAL:* Angin sepoi-sepoi
*KARTU NAMA* Angin: Langit Biru`
  let ventilasi = 'https://telegra.ph/file/c851c2b97e082d497949d.jpg'
    conn.sendMessage(m.chat, {image: {url: ventilasi}, caption: venti}, {quoted: m })
  break
   case 'klee':
     let klee = `*MELARIKAN DIRI DARI SINAR MATAHARI*
*NAMA:* Klee
*ULANG TAHUN:* 27 Juli
*KONSTELASI:* trifolium
*WILAYAH:* Mondstadt
*AFILIASI:*
Ksatria Favonius
*HIDANGAN SPESIAL:* Roti Bakar Rasa Ikan
*KARTU NAMA* Klee: Meledak`
 let lolihunter = 'https://telegra.ph/file/b32aba6d90dac67f46f7f.jpg'
   conn.sendMessage(m.chat, { image: {url: lolihunter}, caption: klee}, {quoted:m})
    break
   case 'bennet': 
     let bennet = `*UJI COBA DENGAN API*
*Nama:* Bennett
*HARI ULANG TAHUN:* 29 Februari
*KONSTELASI:* Bencana Roda
*WILAYAH:*
Mondstadt
*AFILIASI:*
• Guild Petualang
• Tim Petualangan Benny
*HIDANGAN SPESIAL:* Telur Gosong Teyvat
*KARTU NAMA* Bennett: Pengakuan`
 let pengakuan = 'https://telegra.ph/file/ca8d4ff2e078706693dbd.jpg'
  conn.sendMessage(m.chat, {image : { url: pengakuan}, caption: bennet}, {quoted:m})
   break
 case 'noelle':
  let noele = `*BUNGA KSATRIA*
*NAMA:* Noelle
*HARI ULANG TAHUN:* 21 Maret
*KONSTELASI:* Hati Parma
*WILAYAH:* Mondstadt
*AFILIASI:* Ksatria Favonius
*HIDANGAN SPESIAL:* Pancake Lebih Ringan Dari Udara
*KARTU NAMA* Noelle: Pelindung`
 let pelindung = 'https://telegra.ph/file/5d8e568b4cce60d368c8d.jpg' 
  conn.sendMessage(m.chat, {image: {url: pelindung}, caption: noelle }, {quoted:m })
    break
   case 'fischl':
     let fischl = `*PANGERAN VERURTEILUNG!*
*NAMA:* Fischl
*HARI ULANG TAHUN:* 27 Mei
*KONSTELASI:* Corvus
*WILAYAH:* Mondstadt
*AFILIASI:* Persekutuan Petualang
*HIDANGAN SPESIAL:* Simfoni Suci
*KARTU NAMA* Fischl: Gagak Malam`
 let gagak = 'https://telegra.ph/file/f165124f52c615a477184.jpg'
  conn.sendMessage(m.chat, {image: {url:gagak}, caption: fischl }, {quoted:m })
    break
     case 'sucrose':
      let sucrose = `*SAYANG YANG TIDAK BERBAHAYA*
*NAMA:* Sucrose
*HARI ULANG TAHUN:* 26 November
*KONSTELASI:* Ampula
*WILAYAH:* Mondstadt 
*AFILIASI:* Ksatria Favonius
*HIDANGAN SPESIAL:* Makanan Bergizi
*KARTU NAMA* Sucrose: Bio-Alkimia` 
  let alkimia = 'https://telegra.ph/file/675e8169b0fb5915f8992.jpg'
    conn.sendMessage(m.chat, {image: {url:alkimia}, caption: sucrose}, {quoted:m })
    break
     case 'mona':
      let mona = `*REFLEKSI ASTRAL*
*NAMA:* Astrologist Mona Megistus
*HARI ULANG TAHUN:* 31 Agustus
*KONSTELASI:* Astrolabos
*WILAYAH:* Mondstadt
*AFILIASI:*
• Mondstadt
• Burung Uap
*HIDANGAN SPESIAL:* Kesimpulan Akhir Kebijaksanaan (Kehidupan)
*KARTU NAMA* Mona: Langit Berbintang`
 let langit = 'https://telegra.ph/file/25d28e624fc24d23a2311.jpg'
  conn.sendMesaage(m.chat, {image: {url:langit}, caption : mona}, {quoted:m})
   break
    case 'diona':
     let diona = `*KÄTZLEIN COCKTAIL*
*NAMA:* Diona
*HARI ULANG TAHUN:* 18 Januari
*KONSTELASI:* Tembakan
*WILAYAH:*
Mondstadt
*AFILIASI:* 
• Ekor Kucing
• Garis Darah Kätzle
*HIDANGAN SPESIAL:* Jelas Bukan Makanan Bar!
*KARTU NAMA* Diona: Meong!` 
 let cat = 'https://telegra.ph/file/55da574072947c27dfd56.jpg'
  conn.sendMessage(m.chat, {image : {url: cat}, caption: diona}, {quoted:m})
   break
     case 'albedo': 
       let albedo = `*Kepala Alkemis Ksatria of Favonius*
*NAMA:* Albedo
*HARI ULANG TAHUN* 13 September
*KONSTELASI:* Princeps Cretaceus
*WILAYAH:* Mondstadt
*AFILIASI:*
• Ksatria Favonius
• Rumah Penerbitan Yae
*HIDANGAN SPESIAL:* Mimpi Hutan
*KARTU NAMA* Albedo: Bunga Matahari`
  let bunga = 'https://telegra.ph/file/9e1d1e8e7954617b8b429.jpg'
   conn.sendMessage(m.chat, {image: {url: bunga}, caption: albedo}, {quoted:m})
    break 
      case 'rosaria':
        let rosaria = `*KEBAJIKAN YANG BERDURI*
*NAMA:* ROSARIA
*HARI ULANG TAHUN*
24 Januari
*KONSTELASI:* Mahkota Tulang Belakang
*WILAYAH:*
Mondstadt
*AFILIASI:*
• Gereja Favonius
*HIDANGAN SPESIAL:*
Makan Malam Penghakiman
*KARTU NAMA*
Rosaria: Perjanjian`
  let perjanjian = 'https://telegra.ph/file/bad62785f6335fa52d33d.jpg'
   conn.sendMessage(m.chat, {image: {url:perjanjian}, caption: rosaria}, {quoted:m})
     break
   case 'eula':
     let eula = `*TARIAN GELOMBANG BERKILAUAN*
*NAMA:* Eula Lawrence
*HARI ULANG TAHUN:* 25 Oktober
*KONSTELASI:* Aphros Delos
*WILAYAH:*
Mondstadt
*AFILIASI:*
• Knights of Favonius
*Klan:* Lawrence
*HIDANGAN SPESIAL:* Pai Stormcrest
*KARTU NAMA* Eula: Tersegel Es`
  let es = 'https://telegra.ph/file/7254d6327853afcd9788c.jpg'
   conn.sendMessage(m.chat, {image: {url:es}, caption: eula}, {quoted:m})
    break
     case 'mika': 
      let mika = `*KOORDINAT EMBUN BEKU YANG JELAS*
*NAMA:* Mika schmidt
*HARI ULANG TAHUN:* 11 Agustus
*KONSTELASI:*
Tulang punggung
*WILAYAH:* Mondstadt
*AFILIASI:*
•Ksatria Favonius
*HIDANGAN SPESIAL:* Sandwich Sarapan Surveyor
*KARTU NAMA* Mika: Indeks`
  let indeks = 'https://telegra.ph/file/cc529f44cf16ea9088db4.jpg'
    conn.sendMessage(m.chat, { image: {url: indeks}, caption: mika}, {quoted:m})
     break
      case 'xiao': 
       let xiao = `*YAKSA YANG WASPADA*
*NAMA:* Xiao
*HARI ULANG TAHUN:* 17 April
*KONSTELASI:* Alatus Nemeseos
*WILAYAH:* Liyue
*AFILIASI:*
• Liyue Adeptus
• Yaksha
*HIDANGAN SPESIAL:*
"Mimpi indah"
*KARTU NAMA* Xiao: Topeng`
  let topeng = 'https://telegra.ph/file/11a799b0b537fc5eb6e36.jpg'
    conn.sendMessage(m.chat, {image: {url: topeng}, caption: xiao}, {quoted:m})
    break
     case 'beidou':
      let beidou = `*PENGUASA LAUTAN TANPA MAHKOTA* 
*NAMA:* Beidou
*HARI ULANG TAHUN:* 14 Februari
*KONSTELASI:* Victor Mare
*WILAYAH:* Liyue
*AFILIASI:*
• The Crux
*HIDANGAN SPESIAL:*
Filet Goreng Flash
*KARTU NAMA*
Beidou: Menimbang Jangkar`
  let jangkar = 'https://telegra.ph/file/c313d3647c02449f803eb.jpg'
    conn.sendMessage(m.chat, {image: {url:jangkar}, captipn: beidou}, {quoted:m})
     break
      case 'ningguang':
       let ningguang = `*GERHANA BINTANG*
*NAMA:* Ningguang
*HARI ULANG TAHUN:* 26 Agustus
*KONSTELASI:* Keseimbangan Opus
*WILAYAH:* Liyue
*AFILIASI:*
• Liyue Qixing
*HIDANGAN SPESIAL:*
Daging Qiankun Mora
*KARTU NAMA*
Ningguang: Phoenix`
  let phoenix = 'https://telegra.ph/file/4b0f139b9afd98ffcb536.jpg'
    conn.sendMessage(m.chat, {image: {url: phoenix}, caption: ningguang}, {quoted:m})
     break
      case 'xiangling':
       let xiangling = `*KELEZATAN YANG LUAR BIASA*
*NAMA:* Xiangling
*HARI ULANG TAHUN:* 2 November
*KONSTELASI:* Trulla
*WILAYAH:* Liyue
*AFILIASI:*
• Restoran Wanmin
• The cruxx
*HIDANGAN SPESIAL:*
Ikan Rebus Restoran Wanmin
*KARTU NAMA*
Xiangling: Baru saja keluar dari panci`
 let panci = 'https://telegra.ph/file/08760447c32b470fc30ff.jpg'
  conn.sendMessage(m.chat, {image: {url:panci}, caption: xiangling}, {quoted:m})
   break
    case 'xingqiu':
      let xingqiu = `*GALANT REMAJA*
*HARI ULANG TAHUN:* 9 Oktober
*KONSTELASI:* Tekstil Fabulae
*WILAYAH:* Liyue
*AFILIASI:*
• Serikat Dagang Feiyun
• Klan Guhua
• Rumah Penerbitan Yae (sebagai Zhenyu)
*HIDANGAN SPESIAL:*
Paket Serba Kelezatan
*KARTU NAMA*
Xingqiu: Pelangi`
  let pelangi = 'https://telegra.ph/file/8f74d569b0656721f41c3.jpg'
   conn.sendMessage(m.chat, {image: {url:pelangi}, caption: xingqiu}, {quoted:m})
    break 
     case 'chongyun':
      let chongyun = `*SEMANGAT BEKU*
*NAMA:* Chongyun
*HARI ULANG TAHUN:* 7 September
*KONSTELASI:* Nubis Kaisar
*WILAYAH:* Liyue
*AFILIASI:*
• Ahli Taurat Tianheng
*HIDANGAN SPESIAL:*
Mie Dingin dengan Hidangan Gunung yang Lezat
*KARTU NAMA*
Chongyun: Pedang Roh`
  let roh = 'https://telegra.ph/file/d7a80268349ce57f0938e.jpg'
   conn.sendMessage(m.chat, {image: {url:roh}, caption: chongyun}, {quoted:m})
    break
     case 'qiqi':
      let qiqi = `*KEBANGKITAN ES*
*HARI ULANG TAHUN:* 3 Maret
*KONSTELASI:* Pristina Nola
*WILAYAH:* Liyue
*AFILIASI:*
• Apotek Bubu
• Adeptus (pembawa energi) 
*HIDANGAN SPESIAL:*
Tidak besok
*KARTU NAMA*
Qiqi: Penyimpanan Dingin`
  let kulkas = 'https://telegra.ph/file/c543641b1a9c303e786af.jpg'
   conn.sendMessage(m.chat, {image: {url:kulkas}, caption: qiqi}, {quoted:m})
    break
     case 'keqing': 
      let keqing = `*MENGENDARAI GUNTUR*
*NAMA:* Keqing
*HARI ULANG TAHUN:* 20 November
*KONSTELASI:*
Trulla Sementarii
*WILAYAH:* Liyue
*AFILIASI*
• Liyue Qixing
*HIDANGAN SPESIAL:*
Ikan Bakar Kelangsungan Hidup
*KARTU NAMA*
Keqing: Stiletto Petir`
 let petir = 'https://telegra.ph/file/066e435faeae9271f8b6f.jpg'
  conn.sendMessage(m.chat, {image : {url:petir}, caption: keqing}, {quoted:m})
   break
    case 'tartaglia':
      let tartaglia = `*TUAN MUDA*
*NAMA:* Tartaglia
*HARI ULANG TAHUN:* 20 Juli
*KONSTELASI:* Monoceros Caeli
*WILAYAH:* Salju
*AFILIASI:*
• Fatui
• Sebelas Pertanda Fatui
*HIDANGAN SPESIAL:*
Tangkapan Hadiah
*KARTU NAMA*
Childe: Foul Legacy`
 let legacy = 'https://telegra.ph/file/920d369eec195d56ba271.jpg'
   conn.sendMessage(m.chat, {image: {url:legacy}, caption :tartaglia}, {quoted:m})
    break
     case 'zhongli':
      let zhongli = `*VAGO MUNDO*
*NAMA:* Zhongli
*HARI ULANG TAHUN:* 31 Desember
*KONSTELASI:* Lapis Dei
*WILAYAH:* Liyue
*AFILIASI:*
• Liyue Harbor
• Whangseng Funeral Parlor
• The Seven Archon
• Adeptus
*HIDANGAN SPESIAL:*
Sup Rebung Bambu yang di Masak Lambat
*KARTU NAMA* Zhongli: Planet Menimpa`
 let planet = 'https://telegra.ph/file/46c69c218abf4e7bdbcb6.jpg'
  conn.sendMessage(m.chat, {image: {url:planet}, caption: zhongli}, {quoted:m})
   break
    case 'xinyan': 
     let xinyan = `*RIFF YANG MENYALA-NYALA*
*NAMA:* Xinyan
*HARI ULANG TAHUN:* 16 Oktober
*KONSTELASI:* Kabel Api
*WILAYAH:* Liyue
*AFILIASI:* "Benang Merah"
*HIDANGAN SPESIAL:*
Ayam Riffin yang Mengguncang!
*KARTU NAMA*
Xinyan: Lagu Berakhir`
 let benang = 'https://telegra.ph/file/d5d8d2fdec6d552953ca5.jpg'
   conn.sendMessage(m.chat, {image: {url:benang}, caption: xianyian}, {quoted:m})
    break
     case 'ganyu':
      let ganyu = `*TATAPAN PLENILUNE*
*NAMA:* Ganyu
*HARI ULANG TAHUN:* 2 Desember
*KONSTELASI:* Sinae Unicornis
*WILAYAH:* Liyue
*AFILIASI:*
• Paviliun Yuehai
• Karyawan Liyue Qixing
• Adeptus
*HIDANGAN SPESIAL:*
Perdamaian Sejahtera
*KARTU NAMA:* Ganyu: Qilin` 
 let qilin = 'https://telegra.ph/file/b71172822b815cd603b18.jpg'
   conn.sendMessage(m.chat, {image: {url: qilin}, caption : ganyu}, {quoted:m})
    break
      case 'hutao': 
        let hutao = `*WEWANGIAN DALAM PENCAIRAN*
*NAMA:* Hu Tao
*HARI ULANG TAHUN:* 15 Juli
*KONSTELASI:*
kupu-kupu charontis
*WILAYAH:* Liyue
*AFILIASI:*
• Ruang Tamu Pemakaman Wangsheng
• Keluarga Hu
*HIDANGAN SPESIAL:*
Maret Hantu
*KARTU NAMA:*
Hu Tao: Penenang Jiwa`
  let hantu = 'https://telegra.ph/file/a2429f1752d2c0dd72810.jpg'
    conn.sendMessage(m.chat, {image: {url:hantu}, caption :hutao}, {quoted:m})
     break
      case 'yanfei':
       let yanfei = `*KEPOLOSAN YANG BIJAKSANA*
*NAMA:* Yanfei
*HARI ULANG TAHUN:* 28 Juli
*KONSTELASI:* Binatang kesenangan
*WILAYAH:* Liyue
*AFILIASI:*
• Konsultasi Hukum Yanfei
• Adeptus
*HIDANGAN KHUSUS:*
Jalanku
*KARTU NAMA* Yanfei: Tidak memihak` 
 let liyue = 'https://telegra.ph/file/343d39fe98b7e8e1412ea.jpg'
   conn.sendMessage(m.chat, {image: {url:liyue}, caption: yanfei}, {quoted:m})
    break
     case 'shenhe':
      let shenhe = `*TRANSENDENSI YANG KESEPIAN*
*NAMA:* Shenhe
*HARI ULANG TAHUN:* 10 Maret
*KONSTELASI:*
Puncak Rasa Sakit
*WILAYAH:* Liyue
*AFILIASI:*
• Tempat Tinggal Cloud Retainer
• Adeptus
*HIDANGAN SPESIAL:*
Mie Hati
*KARTU NAMA* Shenhe: Sisir`
 let sisir = 'https://telegra.ph/file/82b5cfd1146fd0ec3a304.jpg'
  conn.sendMessage(m.chat, {image: {url: sisir}, caption: shenhe}, {quoted:m})
   break
     case 'yunjin':
       let yunjin = `*PANGGUNG LUCIDA*
*NAMA:* Yun Jin
*HARI ULANG TAHUN:* 21 Mei
*KONSTELASI:* Karya bagus
*WILAYAH:* Liyue
*AFILIASI:*
• Rombongan Opera Yun-Han
• Rumah Teh Heyu
Keluarga Yun
*HIDANGAN SPESIAL:* Giok Terselubung Awan
*KARTU NAMA* Yun Jin: Sajak`
  let sajak = 'https://telegra.ph/file/31f8272df71e8b4175d64.jpg'
    conn.sendMessage(m.chat, {image: {url:sajak}, caption:yunjin}, {quoted:m})
     break
      case 'yelan':
       let yelan = `*ANGGREK LEMBAH*
*NAMA:* Yelan
*HARI ULANG TAHUN* 20 April
*KONSTELASI:* Anggrek Umbrabilis
*WILAYAH:* Liyue
*AFILIASI:*
• Kedai Teh Yanshang (di profil)
• Kementerian Urusan Sipil
*HIDANGAN SPESIAL:* Udang yang Dicelup Embun
*KARTU NAMA* Yelan: Lempar`
  let lempar = 'https://telegra.ph/file/e0d7da9be6de4a8489546.jpg'
   conn.sendMessage(m.chat, {image: {url:lempar}, caption : yelan}, {quoted:m})
    break
      case 'yaoyao':
        let yaoyao = `*RAHMAT YANG BERKEMBANG*
*NAMA:* Yaoyao
*HARI ULANG TAHUN:* 6 Maret
*KONSTELASI:* RASIO Osmanthus
*WILAYAH:* Liyue
*AFILIASI:* 
• Tempat tinggal pengembara jalanan
*HIDANGAN SPESIAL:*
Hidangan Rumah Tangga Qingce
*KARTU NAMA* Yaoyao: Pohon salam`
  let salam = 'https://telegra.ph/file/7bc92e41579ceb65cf4f8.jpg'
   conn.sendMessage(m.chat, {image: {url:salam}, caption : yaoyao }, {quoted:m})
    break
     case 'baizhu':
       let baizhu = `*MELAMPAUI KEMATIAN*
*NAMA:* Baizhu
*HARI ULANG TAHUN:* 25 April
*KONSTELASI:* Lagenaria
*WILAYAH:* Liyue
*AFILIASI:* 
• Apotek Bubu
*HIDANGAN SPESIAL:*
Sup Peredam Panas
*KARTU NAMA:* Baizhu: Lega`
  let lega = 'https://telegra.ph/file/5de8c0ec318b45e4774b6.jpg'
   conn.sendMessage(m.chat, {image: {url:lega}, caption: baizhu}, {quoted:m})
    break
     case 'ayaka':
      let ayaka = `*BANGAU KEPINGAN BEKU* 
*NAMA:* Kamisato Ayaka
*HARI ULANG TAHUN:* 28 September
*KONSTELASI:* Bangau Salju
*WILAYAH:* Inazuma
*AFILIASI:*
• Komisi Yashiro
• Klan Kamisato
*HIDANGAN SPESIAL:* "Salju di Perapian"
*KARTU NAMA* Kamisato Ayaka: Kipas Lipat` 
  let kipas = 'https://telegra.ph/file/f69528b6e91a723fae8ed.jpg'
   conn.sendMessage(m.chat, {image: {url:kipas}, caption: ayaka }, {quoted:m})
     break
    case 'kazuha':
      let kazuha = `*DAUN MERAH MENGEJAR GELOMBANG LIAR*
*NAMA:* Kaedehara Kazuha
*HARI ULANG TAHUN:*
29 Oktober
*KONSTELASI:*
Acer Palmatum
*WILAYAH:* Inazuma
*AFILIASI:*
• The Crux
• Klan Kaedehara
• Tentara Watatsumi (sebelumnya)
*HIDANGAN SPESIAL:*
Kecantikan Segala Cuaca
*KARTU NAMA*
Kaedehara Kazuha: Pemandangan Maple Musim Gugur`
  let maple = 'https://telegra.ph/file/43a72a756f7fb014c411f.jpg'
    conn.sendMessage(m.chat, {image: {url:maple}, caption: kazuha}, {quoted:m})
     break
       case 'yoimiya':
        let yoimiya = `*API YANG BERKOBAR*
*NAMA:* Naganohara Yoimiya
*HARI ULANG TAHUN:* 21 Juni
*KONSTELASI:*
Carassius Berlapis Emas
*WILAYAH:* Inazuma
*AFILIASI:*
• Kembang Api Naganohara
*HIDANGAN SPESIAL:*
Ikan Festival Musim Panas
*KARTU NAMA*
Yoimiya: Auratus Spark`
  let spark = 'https://telegra.ph/file/aaa283a4eb5541a1d94ec.jpg'
   conn.sendMessage(m.chat, {image: {url:spark}, caption: yoimiya}, {quoted:m})
 break
  case 'sayu':
    let sayu = `*NINJA MUJINA*
*NAMA:* Sayu
*HARI ULANG TAHUN* 19 Oktober
*KONSTELASI:* Nyctereutes Kecil
*WILAYAH:* Inazuma
*AFILIASI:* 
• Shuumatsuban
*HIDANGAN SPESIAL:*
Pusing-Hilang no Jutsu
*KARTU NAMA:*
Sayu: Muji-Muji Daruma`
  let daruma = 'https://telegra.ph/file/60a08596622438f312c38.jpg'
   conn.sendMessage(m.chat, {image: {url:daruma}, caption: sayu}, {quoted:m})
    break
     case 'reiden':
       let reiden = `*PLANE OF EUTHYMIA*
*NAMA:* Raiden Shogun
*NAMA ASLI:* Raiden Ei
*HARI ULANG TAHUN:* 26 Juni
*KONSTELASI:* Imperatrix Umbrossa
*WILAYAH:* Inazuma
*AFILIASI:*
• Kota Inazuma
• Keshogunan Inazuma
• The Seven Archon
*HIDANGAN SPESIAL:*
Tidak ada
*KARTU NAMA:* Raiden Shogun: Pencerahan`
  let shogun = 'https://telegra.ph/file/b17a74ac3bb7fc5629017.jpg'
   conn.sendMessage(m.chat, {image: {url:shogun}, caption: reiden}, {quoted:m})
    break
     case 'sara':
       let sara = `*KABURAYA BULU GAGAK*
*NAMA:* Kujou Sara
*HARI ULANG TAHUN:* 14 Juli
*WILAYAH:* Inazuma
*AFILIASI:*
• Komisi Tenryou
*HIDANGAN SPESIAL:* Iman Abadi
*KARTU NAMA* Kujou Sara: Tengu`
  let tengu = 'https://telegra.ph/file/fdba8540ffdd6ce073913.jpg'
   conn.sendMessage(m.chat, {image: {url:tengu}, caption: sara}, {quoted:m})
    break
     case 'koukoumi' :
      let kokoumi = `*MUTIARA KEBIJAKSANAAN*
*NAMA:* Sangonomiya Kokomi
*HARI ULANG TAHUN:* 22 Februari
*WILAYAH:* Inazuma
*AFILIASI:*
• Pulau Watatsumi
• Klan Sangonomiya
• Tentara Watatsumi
*HIDANGAN SPESIAL:* Sebuah Strategi yang Menakjubkan
*KARTU NAMA* Sangonomiya Kokomi: Yang Dalam`
  let strategi = 'https://telegra.ph/file/10cbf1052118e40129124.jpg'
   conn.sendMessage(m.chat, {image: {url:strategi}, caption: kokoumi}, {quoted:m})
    break
     case 'arrataki':
      let arrataki = `*KEPAHLAWANAN HANAMIZAKA*
*NAMA:* Arataki Itto
*HARI ULANG TAHUN:* 1 Juni
*KONSTELASI:* Taurus Iracundus
*WILAYAH:* Inazuma
*AFILIASI:* 
• Arataki Gang
*HIDANGAN SPESIAL:* Jalan yang Kuat
*KARTU NAMA* Itto: Wajah Oni`
 let oni = 'https://telegra.ph/file/0b4b528cfaa908f5efdce.jpg'
  conn.sendMessage(m.chat, {image: {url:oni}, caption: arrataki}, {quoted:m})
   break
    case 'gorou':
     let gorou = `*Prajurit Anjing*
*NAMA:* Gorou
*HARI ULANG TAHUN:* 18 Mei
*KONSTELASI:* Canis Bellatoris
*WILAYAH:* Inazuma
*AFILIASI:*
• Pulau Watatsumi
• Tentara Watatsumi
• Rumah Penerbitan Yae (sebagai Nona Hina)
*HIDANGAN SPESIAL:* Legenda Kemenangan
*KARTU NAMA* Gorou: Anjing Santai`
  let santai = 'https://telegra.ph/file/b072af2bcd94bb724955b.jpg'
   conn.sendMessage(m.chat, {image: {url:santai}, caption : gorou}, {quoted:m})
    break
     case 'yaemiko':
      let yaemiko = `*HIBURAN YANG CERDIK*
*NAMA:* Yae Miko
*HARI ULANG TAHUN:* 27 Juni
*KONSTELASI:* Divina Vulpes
*WILAYAH:* Inazuma
*AFILIASI:*
• Kuil Agung Narukami
• Rumah Penerbitan Yae
*HIDANGAN SPESIAL:* Fuukuchi Udon
*KARTU NAMA* Yae Miko: Mimpi Kitsune`
  let mimpi = 'https://telegra.ph/file/84da6527106e261bb465c.jpg'
   conn.sendMessage(m.chat, {image: {url:mimpi}, caption: yaemiko}, {quoted:m})
    break
     case 'ayato':
      let ayato = `*PILAR KETABAHAN*
*NAMA:* Kamisato Ayato
*KONSTELASI:* Cypressus Custos
*WILAYAH:* Inazuma
*AFILIASI:*
• Komisi Yashiro
• Klan Kamisato
• Shuumatsuban
*HIDANGAN SPESIAL:* Keanggunan yang Tenang
*KARTU NAMA* Kamisato Ayato: Riak`
       let repple = 'https://telegra.ph/file/7cb5b96ad83308dd23dd5.jpg'
       conn.sendMessage(m.chat, {image: {url:repple}, caption: ayato}, {quoted:m})
       break
        case 'kuki':
         let kuki = `*PENANGKAL KESENGSARAAN*
*NAMA:* Kuki Shinobu
*KONSTELASI:* Tribulatio Demptio
*WILAYAH:* Inazuma
*AFILIASI:*
• Arataki Gang
• Klan Kuki
• Kuil Agung Narukami
*HIDANGAN SPESIAL:* Omurice Waltz
*KARTU NAMA* Kuki Shinobu: Net`
          let bersih = 'https://telegra.ph/file/f02923766da96e823a9df.jpg'
           conn.sendMessage(m.chat, {image: {url:bersih}, caption: kuki}, {quoted:m})
            break
            case 'heizou':
            let heizou = `*HARMONI ANALITIK*
*NAMA:* Shikanoin Heizou
*KONSTELASI:* Cervus Kecil
*WILAYAH:* Inazuma
*AFILIASI:* 
• Komisi Tenryou
• Agen Detektif Bantan Sango
*HIDANGAN SPESIAL:* Satu-satunya Kebenaran
*KARTU NAMA* Shikanoin Heizou: Temari`
            let temari = 'https://telegra.ph/file/e15def30db0a4118887d4.jpg'
             conn.sendMessage(m.chat, {imahe: {url:temari}, caption: heizou}, {quoted:m})
              break
             case 'thoma':
              let thoma = `*PELINDUNG DARI JAUH*
*NAMA:* Thoma
*HARI ULANG TAHUN:* 9 Januari
*KONSTELASI:* Rubeum Scutum
*WILAYAH:* 
• Inazuma
• Monstadt
*AFILIASI:*
• Komisi Yashiro
• Monstadt
*HIDANGAN SPESIAL:* Kehangatan
*KARTU NAMA* Thoma: Penjaga yang Berkobar`
              let penjaga = 'https://telegra.ph/file/47a5b30cf324efb3ec3fd.jpg'
               conn.sendMessage(m.chat, {imahe: {url:penjaga}, caption: thoma }, {quoted:m})
                break
             case 'kirara':
              let kirara = `*KUCING DI ATAS ATAP*
*NAMA:* Kirara
*HARI ULANG TAHUN:* 22 Januari
*KONSTELASI:* Rasio Arcella
*WILAYAH:* Inazuma
*AFILIASI:*
•Komaniya Express
*HIDANGAN SPESIAL:*
Bento yang memberi energi
*KARTU NAMA* Kirara: Kotak Neko`
              let kotak = 'https://telegra.ph/file/3870ac05f180480b03106.jpg'
               conn.sendMessage(m.chat, {image: {url:kotak}, caption:kirara}, {quoted:m})
                break
                 case 'tighnari':
                  let tighnari = `*STRIDER HIJAU*
*NAMA:* Tighnari
*HARI ULANG TAHUN:* 29 Desember
*KONSTELASI:* Rubah Zerda
*WILAYAH:* Sumeru
*AFILIASI:*
• Gandharva Ville
• Penjaga Hutan
• Amurta (lulusan)
*HIDANGAN SPESIAL:*
Pilihan Pengamat Hutan
*KARTU NAMA*
Tighnari : Dicium Embun`
                  let embun = 'https://telegra.ph/file/9a2503df32fc0df656c2b.jpg'
                   conn.sendMesaage(m.chat, {image: {url:embun}, caption: tighnari}, {quoted:m})
                    break
                     case 'collei':
                      let collei = `*TUNAS KELAHIRAN KEMBALI*
*NAMA:* Collei
*HARI ULANG TAHUN:* 8 Mei
*KONSTELASI:* Leptailurus Cervarius
*WILAYAH:* Sumeru
*AFILIASI:*
• Gandharva Ville
• Penjaga Hutan
*HIDANGAN SPESIAL:* Kerinduan
*KARTU NAMA*
Collei: Kebajikan Baik`
                      let baik = 'https://telegra.ph/file/cf61eea0ac2a1b7c0a773.jpg'
                       conn.sendMessage(m.chat, {image: {url:baik}, caption: collei}, {quoted:m})
                        break
                case 'dori':
                 let dori = `*HARTA TAMAN IMPIAN*
*NAMA:* Dori
*HARI ULANG TAHUN:* 21 Desember
*KONSTELASI:* Lentera Ajaib
*WILAYAH:* Sumeru
*AFILIASI:* 
•Istana Alcazarzaray
*HIDANGAN SPESIAL:*
Tunjukkan padaku Moranya
*KARTU NAMA* Dori : Ginny`
                 let giny = 'https://telegra.ph/file/c5f21b06f28fd630f77f4.jpg'
                  conn.sendMessage(m.chat, {image: {url:giny}, caption: dori}, {quoted:m})
                   break
                 case 'cyno':
                  let cyno = `*HUKUM RAHASIA*
*NAMA:* Cyno
*HARI ULANG TAHUN:* 23 Juni
*KONSTELASI:* Lupus Aureus
*WILAYAH:* Sumeru
*AFILIASI:*
• Kuil Keheningan
• Matra
• Spantamad[1]
*HIDANGAN SPESIAL*
Duel Jiwa
*KARTU NAMA*
Cyno: Diam`
                  let diam = 'https://telegra.ph/file/30a2d74947b276b0700aa.jpg'
                   conn.sendMessage(m.chat, {image: {url:diam}, caption: cyno}, {quoted:m})
                    break
                  case 'candace':
                   let camdace = `*Sumpah EMAS*
*NAMA:* Candace 
*HARI ULANG TAHUN:* 3 Mei
*KONSTELASI:* Perisai Panah
*WILAYAH:* Sumeru
*AFILIASI:* 
• Desa Aaru
*HIDANGAN SPESIAL:*
Kepedulian Seutuhnya
*KARTU NAMA* Candace: Bangau Abu-abu`
                   let bangau = 'https://telegra.ph/file/30160b380af38187ce73c.jpg'
                    conn.sendMessage(m.chat, {image: {url:bangau}, capiton: candace}, {quoted:m})
                     break
                   case 'nilou':
                    let nilou = `*TARIAN CAHAYA TERATAI* 
*HARI ULANG TAHUN:* 3 Desember
*KONSTELASI:*
Tidur Teratai
*WILAYAH:* Sumeru
*AFILIASI:*
• Teater Zubayr
*HIDANGAN SPESIAL:*
Langkah Berputar
*KARTU NAMA* Nilou: Tarian Teratai`
                    let tarian = 'https://telegra.ph/file/db3037fa93ff4a1e94c67.jpg'
                     conn.sendMessage(m.chat, {image: {url:tarian}, caption: nilou}, {quoted:m})
                      break
                    case 'nahida':
                     let nahida = `*KMURNIAN FISIKA*
*NAMA:* Nahida
*HARI ULANG TAHUN:* 27 Oktober
*KONSTELASI:* Kebijaksanaan Oromasdis
*WILAYAH:* Sumeru
*AFILIASI:*
• Kota Sumeru
• The Seven Archon
• Sumeru Akademiya 
*HIDANGAN SPESIAL:*
■ Halvamazd
*KARTU NAMA*
Nahida : Bulan Sabit`
                     let sabit = 'https://telegra.ph/file/38fe1d2713a4d9889e8a9.jpg'
                      conn.sendMessage(m.chat, {image: {url:sabit}, caption: nahida}, {quoted:m})
                       break
                    case 'layla':
                     let layla = `*BINTANG MALAM YANG FANTASTIS*
*NAMA:* Layla
*HARI ULANG TAHUN:* 19 Desember
*KONSTELASI:* Bayangan malam
*WILAYAH:* Sumeru
*AFILIASI:*
• Penganut Rtawahi
*HIDANGAN SPESIAL:*
Tidur yang Luar Biasa
*KARTU NAMA*
Layla: Lamunan`
                     let lamunan = 'https://telegra.ph/file/f295abbd0adaa9a0b8556.jpg'
                      conn.sendMessage(m.chat, {image: {url: lamunan}, caption: layla}, {quoted:m})
                       break
                   case 'wanderer':
                    let wanderer = `*RIBUAN TAHUN TERPAUT*
*NAMA:* Wanderer
*HARI ULANG TAHUN:* 3 Januari
*KONSTELASI:* Peziarah
*WILAYAH:*
• Sumeru
• Snezhnaya
• Inazuma
*AFILIASI:*
• Tidak ada
• Vahumana (sebagai Pria Topi)[1]
*HIDANGAN SPESIAL:* Shimi Chazuke
*KARTU NAMA* Pengembara: Balada Drifter`
                    let balada = 'https://telegra.ph/file/9dbec2a3125662db724d7.jpg'
                     conn.sendMessage(m.chat, {image: {url:balada}, capiton: wanderer}, {quoted:m})
                      break
                   case 'faruzan':
                    let faruzan = `*MASINIS YANG PENUH TEKA-TEKI*
*NAMA:* Faruzan
*HARI ULANG TAHUN:* 20 Agustus
*KONSTELASI:* Bunga yang Terjalin
*WILAYAH:* Sumeru
*AFILIASI:* 
• Harvatat
*HIDANGAN SPESIAL:* Kue Ajilenakh Panggang Arang Buatan Tradisional
*KARTU NAMA* Faruzan: Rahasi Tertutup`
                    let ajilenakh = 'https://telegra.ph/file/fb4baa59126f54c5aa2e7.jpg'
                     conn.sendMessage(m.chat, {image: {url: ajilenakh}, caption:faruzan}, {quoted:m})
                      break
                   case 'alhaitam':
                    let alhaitam = `*INSTRUKSI PERINGATAN*
*NAMA:* Alhaitham
*HARI ULANG TAHUN:* 11 Februari
*KONSTELASI:* Hering Terbang
*WILAYAH:* Sumeru
*AFILIASI:*
• Akademi Sumeru
• Haravatat
*HIDANGAN SPESIAL:* Keadaan Ideal
*KARTU NAMA*
Alhaitham: Pencerahan`
                    let ideal = 'https://telegra.ph/file/7476e44b22606aba24574.jpg'
                    conn.sendMessage(m.chat, {image: {url: ideal}, caption:alhaitam},{quoted:m})
                     break
                  case 'dehya':
                   let dehya = `*SURAI API*
*NAMA:* Dehya
*HARI ULANG TAHUN:* 7 April
*KONSTELASI:* Mantichora
*WILAYAH:* Sumeru
*AFILIASI:*
• The Eremites
• Korps Tiga Puluh (sebelumnya)
*HIDANGAN SPESIAL:*
Tajine Api Emas
*KARTU NAMA*
Dehya: Memurnikan Api`
                   let memurnikan = 'https://telegra.ph/file/44680d3da1f0e810a8a95.jpg'
                    conn.sendMessage(m.chat, {image: {url:memurnikan}, caption: dehya}, {quoted:m})
                     break
                  case 'kaveh':
                   let kaveh = `*REFLEKSI KARYAWAN*
*NAMA:* Kaveh
*HARI ULANG TAHUN:* 9 Juli
*KONSTELASI*: Paradisaea
*WILAYAH:* Sumeru
*AFILIASI:*
• Studio Desain Independen
• Kshahrewar
*HIDANGAN SPESIAL:* Usaha
*KARTU NAMA* Kaveh: Lapangan Berkubah`
                   let berkubah = 'https://telegra.ph/file/35589ef31be4c26391346.jpg'
                   conn.sendMessage(m.chat, {image: {urlberkubah}, capution: kaveh}, {quoted:m})
                    break
                  case 'lyney':
                   let lyney = `*TONTONAN PHANTASMAGORIA*
*NAMA:* Lyney
*HARI ULANG TAHUN:* 2 Februari
*KONSTELASI:* Kucing Hitam
*WILAYAH:* Fontaine
*AFILIASI:* 
• Hotel Bouffes d'ete
• Rumah Perapian
*HIDANGAN SPESIAL:* Trik Kubik
*KARTU NAMA* Lyney: Berpura-pura`
                   let pura = 'https://telegra.ph/file/553638d5ce487b6f9c202.jpg'
                    conn.sendMessage(m.chat, {image: {url:pura}, caption: lyney}, {quoted:m})
                     break
                   case 'lynette':
                    let lynette = `*KEANGGUNAN DALAM BAYANGAN*
*NAMA:* Lynette
*HARI ULANG TAHUN* 2 Februari
*KONSTELASI:* Kucing Putih
*WILAYAH:* Fontaine
*AFILIASI:*
• Hotel Bouffes d'ete
• Rumah Perapian
*HIDANGAN SPESIAL:*
Seteguk Santai
*KARTU NAMA*
Lynette: Kesungguhan`
                    let kesungguhan = 'https://telegra.ph/file/d8242e48c5f4e0e642b35.jpg'
                     conn.sendMessage(m.chat, {image: {url:kesungguhan}, caption: lynette}, {quoted:m})
                      break
                    case 'freminet':
                     let freminet = `*KERINDUAN AKAN KEDALAMAN YANG TAK TERLIHAT*
*NAMA:* Freminet
*HARI ULANG TAHUN* 24 September
*KONSTELASI:* Robot
*WILAYAH:* Fontaine
*AFILIASI:*
• Hotel Bouffes d'ete
• Rumah Perapian
*HIDANGAN SPESIAL:*
"Persinggahan Burung Laut"
*KARTU NAMA* Freminet: Kemajuan`
                     let kemajuan = 'https://telegra.ph/file/134dc125c24ef2a694790.jpg'
                      conn.sendMessage(m.chat, {image: {url:kemajuan}, caption: freminet}, {quoted:m})
                       break
                    case 'neuville':
                     let neuville = `*PENAHBIS PENGHAKIMAN YANG TAK TERELAKKAN*
*NAMA:* Neuvillette
*HARI ULANG TAHUN* 18 Desember
*KONSTELASI:* Hakim Leviathan
*WILAYAH:* Fontaine
*AFILIASI:*
• Pengadilan Fontaine
• Marechaussee Phantom
• Istana Mermonia
• Tujuh Penguasa
*HIDANGAN SPESIAL:*
“Konsumsi Haluskan”
*KARTU NAMA*
Neuvillette: Lonjakan`
                     let lonjakan = 'https://telegra.ph/file/c7e34a659e84cd258cb8c.jpg'
                      conn.sendMessage(m.chat, {image : {url:lonjakan}, caption: neuville}, {quoted:m})
                       break
                    case 'wriothesley':
                     let wriothesley = `*UTUSAN KEJAHATAN SOLITER*
*NAMA:* Wriothesley
*HARI ULANG TAHUN* 23 November
*KONSTELASI:* Cerberus
*WILAYAH:* Fontaine
*AFILIASI:*
• Benteng Meropide
*HIDANGAN SPESIAL:*
Iga BBQ Saus Rahasia
*KARTU NAMA* Wriothesley: Penahanan`
                     let penahanan = 'https://telegra.ph/file/d64b34db0b3f3fb6ff6d8.jpg'
                      conn.sendMessage(m.chat, {image: {url: penahann}, caption: wriothesley}, {quoted:m})
                       break
                    case 'charlotte':
                     let charlotte = `*LENSA KEBENARAN*
*NAMA:* Charlotte
*HARI ULANG TAHUN:* 10 April
*KONSTELASI:* Haulina Veritas 
*WILAYAH:* Fontaine
*AFILIASI:*
• Burung Uap
*HIDANGAN SPESIAL:* Scoop Eksklusif: Kolom Gourmet
*KARTU NAMA*
Charlotte: Eksklusif`
                     let ekslusif = 'https://telegra.ph/file/14b3672ac99f5373dc686.jpg'
                      conn.sendMessage(m.chat, {image: {url:ekslusif}, caption : charlotte}, {quoted:m})
                       break
                    case 'furina':
                     let furina = `*KESENDIRIAN YANG TAK BERUJUNG*
*NAMA:* Furina
*NAMA ASLI:* Furina de Fontaine[1][2]
*HARI ULANG TAHUN:* 13 Oktober
*KONSTELASI:* Animula Choragi
*WILAYAH:* Fontaine
*AFILIASI:*
• Pengadilan Fontaine
• Opera Epiclese (sebelumnya)
• The Seven (sebagai perwakilan, sebelumnya) [Catatan 1]
*HIDANGAN SPESIAL:*
"Untuk Keadilan"
*KARTU NAMA*
Furina: Perjamuan`
                     let perjamuan = 'https://telegra.ph/file/40072c6e7ba87e0a0f72e.jpg'
                      conn.sendMessage(m.chat, {image: {url:perjamuan}, caption: furina}, {quoted:m})
                       break
                    case 'navia':
                     let navia = `*Navia*
*HELM MAWAR BERCAHAYA*
*NAMA ASLI Navia Caspar [1]*
*ULANG TAHUN:* 16 Agustus
*KONSTELASI:* Rosa Multiflora (trnslt ae diri)
*WILAYAH:* Fontaine
*AFILIASI:* Duri Rosula
*HIDANGAN SPESIAL:* "Pilih Yang Kamu Suka!"
*KARTU NAMA:* Kapal Rosula`
                     let rosula = 'https://telegra.ph/file/b58a93195070ebf1a86be.jpg'
                      conn.sendMessage(m.chat, {image: {url:rosula}, caption: navia}, {quoted:m})
                       break
                    case 'lumine':
                     let lumine = `*Lumine*
*TRAVELER*
*OUTLANDER*
*KONSTELASI:* VIATRIX`
                     let viartix = 'https://telegra.ph/file/949ef3c3fb8971d633c54.jpg'
                      conn.sendMessage(m.chat, {image: {url:viartix}, caption: lumine}, {quoted:m})
                       break
                     case 'aether':
                      let aether  = `*Aether*

*Traveler*
*OUTLANDER*
*KONSTELASI:* Viator`
                      let viator = 'https://telegra.ph/file/b0cdf11f0d5f0bbc1d15c.jpg'
                       conn.sendMessage(m.chat, {image: {url:viator}, caption: aether}, {quoted:m})
                        break
        default:
          return conn.reply(m.chat, krktr, m)
          }
        }
      }
    catch (e) {
     conn.reply(m.chat, krktr, m)
     console.log(e)
    }
  }  
handler.command = ['charagi']
handler.tags = ['anime']
handler.help = ['charagi']

export default handler
