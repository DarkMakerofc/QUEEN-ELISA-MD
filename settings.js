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
global.READ_MASSAGE = false
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply යවන්න ඔනි නම් true දාන්න 
global.VOICE_REPLY = true
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = false
//👇 Inbox massage block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = false
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = false
//👇 Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = true
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94763516471'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 ༄●⃝𝐌𝐫_𝐎𝐳 _ 𝐗𝐗𝐗 𝟗 ∆ ²⁰²³'
//👇 Your Bot Name
global.botnma =  '༄●⃝𝐌𝐫_𝐎𝐳 _ 𝐗𝐗𝐗 𝟗 𝛁' 
//👇 Your name
global.ownernma =  '༄●⃝𝐌𝐫_𝐎𝐳 _ 𝐗𝐗𝐗 𝟗 ∆' 
//👇 Sticker Author Name
global.packname =  '༄●⃝𝐌𝐫_𝐎𝐳 _ 𝐎𝐅𝐂 𝟗 ∆' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⏬ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⏫ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|⚠️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://i.postimg.cc/3RdhWDjx/IMG-20230712-192745-102.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `༄●⃝Mr_☯Z⁷᭄ _ 𝕆𝔽𝔽𝕀ℂ𝕀𝔸𝕃 _ 𝔹𝕆𝕋 _ 𝔾𝕣𝕠𝕦𝕡_ ⁰²³ـﮩﮩـ╬━🖤

ℍ𝕪🥰..... 𝕀'𝕞_𝕠𝕟𝕝𝕚𝕟𝕖_ℕ𝕠𝕨 😎

🦞□□□□□ 0%
🦞■□□□□ 20%
🦞■■□□□ 40%
🦞■■■□□ 60%
🦞■■■■□ 80%
🦞■■■■■ 100%

*​🇫​​🇴​​🇱​​🇱​​🇴​🇼 👇*

⌨️ 𝐏𝐥𝐞𝐚𝐬𝐞 𝐓𝐲𝐩𝐞 "*.𝐦𝐞𝐧𝐮*" 𝐓𝐨 𝐆𝐞𝐭 𝐀𝐥𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 📝
⌨️ කමාන්ඩ් ලිස්ට් එක ගන්න .menu කියලා ටයිප් කරන්න 📝

👥 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 𝐆𝐫𝐨𝐮𝐩 👉 *https://chat.whatsapp.com/GcJ5iJWGa48LU5TEOwknV4
📲𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐌𝐞 👉 *+94715652343


🥰​🇹​​🇭​​🇦​​🇳​​🇰​​🇸​ ​🇫​​🇴​​🇷​ ​🇺​​🇸​​🇮​​🇳​​🇬​ ​🇲​​🇾​ ​🇧​​🇴​​🇹🥰`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
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
global.GROUP_LINK = 'https://chat.whatsapp.com/Ih1udrdBNvX5xSu5mUVdql'
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
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['94715166712'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94715166712'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Dark Maker' // Your name ඔබේ නම 
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
