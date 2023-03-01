/*
===================================================================================================
 
███╗░░░███╗░█████╗░██╗░░██╗██╗███╗░░░███╗░█████╗░
████╗░████║██╔══██╗██║░██╔╝██║████╗░████║██╔══██╗
██╔████╔██║███████║█████═╝░██║██╔████╔██║███████║
██║╚██╔╝██║██╔══██║██╔═██╗░██║██║╚██╔╝██║██╔══██║
██║░╚═╝░██║██║░░██║██║░╚██╗██║██║░╚═╝░██║██║░░██║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝
 𝑶𝒘𝒏𝒆𝒓 : 𝔩𝔦𝔢𝔲𝔱𝔢𝔫𝔞𝔫𝔱
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
global.READ_MASSAGE = true
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want desable use "false"
global.AUTO_BIO = true
//👇 Inbox massage block PM block
global.INBOX_BLOCK = true
//👇 Auto react 
global.AUTO_REACT = true
//👇 Bad word Auto delete ( denjigay )
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders
global.ANTI_G_LINK = false
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true 
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['14157614157'] 
//👇 Your Caption ( Image Video )
global.cap = 'https://files.fm/f/7fdxxbq9p'
//👇 Your Bot Name
global.botnma =  'makima' 
//👇 Your name
global.ownernma =  '𝔩𝔦𝔢𝔲𝔱𝔢𝔫𝔞𝔫𝔱' 
//👇 Sticker package name
global.packname =  'makima' 
//👇 Sticker Author Name
global.author =  '𝔩𝔦𝔢𝔲𝔱𝔢𝔫𝔞𝔫𝔱' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '🦊'
//👇 Song Download Massage 
global.SONG_DOWN = '```🦊 Saber your song is Downloading...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```🦊 Your Shitty song is here...```'
//👇 Menu imoji 
global.MENU_IMOJI = '🦊|🏴‍☠️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://files.fm/f/a4p8cwqqc`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `Do I look Dead🦊`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `welcome to makima's playground slave`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `you left we don't care 🙂🖕`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `https://files.fm/f/ph9zg9wz2`
//👇 Desable PM Block numbers
global.NO_BLOCK = [""]
global.S_CAP = ''
global.V_CAP = ''
global.YT_CAP = ''
global.IMG_BLOCKER = ["xxx","sex","mia"]






//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['14157614157'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['14157614157'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'lieutenant fox🦊' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['/','!','.'] 
global.sp = '🖕'


global.mess = {
    success: '🦊Done!',
    admin: '*Are you admin to use this command 🦊?*',
    botAdmin: '* admin the bot first !*',
    owner: '*are you owner?!*',
    group: '*Does this chat look like group? This command can only be used in groups !*',
    private: '*Does this chat look like inbox? command can only be used in Inbox !*',
    bot: '*oh so you are bot now? This command can only be used by bot number !*',
    wait: '*🙂sabar my friend 🦊 ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '🖕',
    ADD : '👋',
    LEAVE : '🖕',
    PROMOTE : '🎂',
    DEMOTE : '🤣'
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
global.alivelogo = `https://files.fm/f/keq5tnwk4`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
