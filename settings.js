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


/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true "
global.READ_MASSAGE = false
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = true
//👇 Inbox massage block PM block
global.INBOX_BLOCK = false
//👇 Auto react 
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = false
//👇 Kick And Auto Delete Group link Senders
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = true
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = false
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94784749430'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚀🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ²⁰²³'
//👇 Your Bot Name
global.botnma =  '🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀' 
//👇 Your name
global.ownernma =  '💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰' 
//👇 Sticker package name
global.packname =  '𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽' 
//👇 Sticker Author Name
global.author =  'A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ ' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'hdc3esf4QprpDrkp8T4Hnj1r'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://i.ibb.co/GcBd0HS/meme.png`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `I'm LIVING🌚💗

🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 𝖔𝖜𝖓𝖊𝖉 𝖇𝖞 💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰
`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `HI..Welcome to the group...

🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 𝖔𝖜𝖓𝖊𝖉 𝖇𝖞 💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || `https://i.ibb.co/GcBd0HS/meme.png
`
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `Bye`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `https://i.ibb.co/GcBd0HS/meme.png`
//👇 Desable PM Block numbers
global.NO_BLOCK = ["94784749430","94719574492"]
global.S_CAP = '🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀'
global.V_CAP = '🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀'
global.YT_CAP = '🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀'
global.IMG_BLOCKER = ["xxx","sex","mia"]






//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://i.ibb.co/GcBd0HS/meme.png'
//other
global.pemilik = ['94784749430'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94784749430'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
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
global.alivelogo = `https://i.ibb.co/GcBd0HS/meme.png`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
