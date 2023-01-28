/*
===================================================================================================
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█   █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█   █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█   █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█
 
 █▀▀█ ░ █▀▀█ ░ █▀▀█ ░░ █░░▒█
 ░░▀▄ ░ █▄▀█ ░ █▄▀█ ▀▀ ▒█▒█░
 █▄▄█ █ █▄▄█ █ █▄▄█ ░░ ░▀▄▀░
 
 𝑶𝒘𝒏𝒆𝒓 : 𝑴𝒓 𝑵𝒊𝒎𝒂
 𝑯𝒆𝒍𝒑𝒆𝒓𝒔 : 
 • 𝑷𝒂𝒔𝒊𝒅𝒖
 • 𝑻𝒉𝒊𝒏𝒖𝒓𝒂 
 • 𝑻𝒉𝒂𝒔𝒉𝒊
 • 𝑰𝒔𝒖𝒓𝒖

𝑨𝒏𝒅 𝑻𝒉𝒂𝒏𝒌𝒔 𝑭𝒐𝒓 𝑿𝒆𝒐𝒏 𝑭𝒐𝒓 𝒔𝒄𝒓𝒊𝒑𝒕 .
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94740804536'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 DINUWA USER BOT ²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'off'
//👇 Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//👇 Auto react 
global.AUTO_REACT =  'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//👇 Your Bot Name
global.botnma =  'DINUWA USER BOT 𝚳𝐃 3 𝛁' 
//👇 Your name
global.ownernma =  '𝑴𝒓 Dinuwa' 
//👇 Sticker package name
global.packname =  '𝕂𝕀ℕ𝔾 𝔻𝕀ℕ𝕌𝕎𝔸' 
//👇 Sticker Author Name
global.author =  '𝙼𝚁 𝔻𝕀ℕ𝕌𝕎𝔸 𝙾𝙵𝙲' 
//👇 Kick And Auto Delete Group link Senders
global.antilink =  'true'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '🚭'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = '𝙶𝚒𝚝𝚑𝚞𝚋'
//👇 URL button 2 name
global.BUTTON2 = 'whatsapp group'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://github.com/darkmakerofc/'
//👇 Button 2 url
global.BUTTON2_URL = 'https://chat.whatsapp.com/IKbvhlnSXFWDnW7ZxSWwLN'
//👇 Your Add Massage 
global.ADD_MSG = '*✅ Success add Group*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '🚭|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = ''
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//👇 Change Bot Language 
global.LANG = 'SI'







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://i.ibb.co/dMWvjWY/Picsart-22-12-14-08-57-00-919.jpg'
//other
global.pemilik = ['94740804536'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94740804536'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Dark 𝔻𝕀ℕ𝕌𝕎𝔸' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','/',''] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*මෙම විධානය බාවිතකර හැක්කේ ඇඩ්මින්ලට පමනි !*',
    botAdmin: '*කරුනාකර බොට් ඇඩ්මින්කරන්න !*',
    owner: '*කණගාටුයි , මෙම විධානය අයිතිකරුට පමනි !*',
    group: '*මෙම විධානය සමූහවල පමණක් බාවිතාකරහැක !*',
    private: '*මෙම විධානය Inbox පමනක් බාවිතාකර හැක !*',
    bot: '*මෙම විධානය බොට් නම්බර් එකෙන් පමණක් බාවිතාකර හැක !*',
    wait: '*♲ ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ ǫᴜᴇᴇɴ ᴇʟɪsᴀ ɪs ᴘʀᴏssᴇsɪɴɢ ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Elisa.jpg')
global.alivelogo = `https://i.ibb.co/dMWvjWY/Picsart-22-12-14-08-57-00-919.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
