/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█

WHATSAPP BOT BY MR NIMA ( DARK MAKER OFC )

WHATSAPP - 94719574492
SUPPORT GROUP - https://t.me/queenelisasupport
YOUTUBE - http://youtube.com/MRNIMAOFC


ℹ️ SPECIAL INFORMATION ℹ️

Welcome to Queen Elisa Whatsapp Bot settings.js.
Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using Sex Video Downloader, you need to get permission from Bot Devoper. 

*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true " , මැසේජ් සීන් කරන්න ඔනි නම් true දාන්න ඔනි නැත්තම් false දාන්න
global.READ_MASSAGE = true
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply යවන්න ඔනි නම් true දාන්න 
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = false
//👇 Inbox massage block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = false
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = true
global.SEND_GOODBYE = true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = true
//👇 Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = true
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = true
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = true
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = false
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = true



/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94789003663'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙷𝙳𝚃𝙸 𝚂𝚈𝚂𝚃𝙴𝙼 ²⁰²³'
//👇 Your Bot Name
global.botnma =  '𝙷𝙳𝚃𝙸 𝚂𝚈𝚂𝚃𝙴𝙽 𝙼𝙳 3 𝛁' 
//👇 Your name
global.ownernma =  'ᴛʜᴀʀɪ.ʙʀᴏ' 
//👇 Sticker Author Name
global.packname =  '𝙼𝚁 𝚃𝙷𝙰𝚁𝙸.𝙱𝚁𝙾' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '🥰'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `20211010_102939.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `👋🄷🄴🄻🄻🄾 🄸🄰🄼  🄷🄳🅃🄸 🅂🅈🅂🅃🄴🄼

🎻⏰Hey There! I m Online 24 🪄

🎻🎯 ʜᴅᴛɪ ꜱyꜱᴛᴇᴍ ᴡʜᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ
┏━━━━━━━━━━━━━━━━➣
┃➣✘My name : ʜᴅᴛɪ ꜱyꜱᴛᴇᴍ
┃
┃➣✘Developer: ᴍʀ ᴛʜᴀʀɪ.ʙʀᴏ 
┃
┃➣✘ Contact me : ❰ wa.me/94789003663 ❱ 
┃
┃➣✘Platfrom: Heroku 
┃
┃➣✘🄱🄾🅃🄾🄽🄻🄸🄽🄴 : ❮ .𝗮𝗹𝗶𝘃𝗲 ❯
┃
┃➣✘🄲🄾🄼🄼🄰🄽🄳 : ❮ .𝗺𝗲𝗻𝘂 ❯
┃
┃➣✘🄱🄾🅃🅂🄴🄴🄿🄳 : ❮ .𝗽𝗶𝗻𝗴 ❯
┃➣✘ ᴍᴀɪɴ ʙᴏᴛ ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/JA4qpXs92slDqgOwVR3zjt
┗━━━━━━━━━━━━➣

ʜᴅᴛɪ ꜱyꜱᴛᴇᴍ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `*WELCOME TO HDTI MUSIC OFFICIAL BOT SERVICE 💗🎧*
ᴍᴀɪɴ ɢʀᴏᴜᴩꜱ 💗🔥 :

1)https://chat.whatsapp.com/JA4qpXs92slDqgOwVR3zjt

2)https://chat.whatsapp.com/JH9DWPS1MbH2CsgoofE8GA

ᴏᴛʜᴇʀ ɢʀᴏᴜᴩꜱ ♥️💫 :

1)https://chat.whatsapp.com/HmxRz9BbzcBDS7IG43XZGw

2)https://chat.whatsapp.com/LRcXY6XEiY30bbDm5dDkPM


*_ᴩᴏᴡᴇʀᴇᴅ ʙy ʜᴅᴛɪ ꜱyꜱᴛᴇᴍ_*`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `*Link share කොරලා sup එකක් දෙන්න ළමයි හොමෝම 🌝❤️*

ᴍᴀɪɴ ɢʀᴏᴜᴩꜱ 💗🔥 :

1)https://chat.whatsapp.com/JA4qpXs92slDqgOwVR3zjt

2)https://chat.whatsapp.com/JH9DWPS1MbH2CsgoofE8GA

ᴏᴛʜᴇʀ ɢʀᴏᴜᴩꜱ ♥️💫 :

1)https://chat.whatsapp.com/HmxRz9BbzcBDS7IG43XZGw

2)https://chat.whatsapp.com/LRcXY6XEiY30bbDm5dDkPM


*_ᴩᴏᴡᴇʀᴇᴅ ʙy ʜᴅᴛɪ ꜱyꜱᴛᴇᴍ_*`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["94715166712","94719574492"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" අයින් කරල ඉතුරු ටික දාන්න )
global.CHATGPT_API = ''
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = 'https://chat.whatsapp.com/JA4qpXs92slDqgOwVR3zjt'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
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
    IMG_BLOCK : "This Word is Ban from image downloader",
    DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups",
    ONLY_SEX_GROUP : "Adult Video Download Only Allowed On This Group \n\n https://chat.whatsapp.com/JYAg2lMpRTF2bgkeFCxsvf",
    DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
    BAD_DETECT : '*Bad word detected ⚠️*',
    BLOCK : '*Number successfully blocked 🚫*',
    UNBLOCK : '*Number successfully unblocked ☑️*',
    KICK : '*Admin kicked by user ⛔*',
    ADD : '*Admin added by user 👤*',
    LEAVE : '*Admin leaved 😢*',
    PROMOTE : '*Successfully promoted user 🕊️*',
    DEMOTE : '*Successfully demoted user ❎*'
}




//other
global.pemilik = ['94789003663'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94789003663'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Thari.bro' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = 'QUEEN ELISA'

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

//global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
