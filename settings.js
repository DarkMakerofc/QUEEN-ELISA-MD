/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█

WHATSAPP BOT BY MR THARUKA ( DARK MAKER OFC 2 )

WHATSAPP - 94712537138
SUPPORT GROUP - https://t.me/queenelisasupport
YOUTUBE - https://youtube.com/channel/UCA7zBtl4lI_nlx62klyY-NQ


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
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = true
//👇 Inbox massage block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = true
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = true
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = true
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = true
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
global.owner = ['94712537138'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝚎𝚗𝚊𝚛𝚊𝚝𝚎𝚍 𝙱𝚢 𝚃𝚑𝚊𝚛𝚞𝚔𝚊"𝚜 𝙱𝙾𝚃 ²⁰²³'
//👇 Your Bot Name
global.botnma =  '*𝚃𝚑𝚊𝚛𝚞𝚔𝚊* 𝚳𝐃 3 𝛁' 
//👇 Your name
global.ownernma =  '𝙼𝚁.𝚃𝚑𝚊𝚛𝚞𝚔𝚊' 
//👇 Sticker Author Name
global.packname =  '𝚃𝚑𝚊𝚛𝚞𝚔𝚊"𝚜 𝙱𝙾𝚃 ²⁰²³' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '👨‍💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'KvoMBaC8TaUnwMvrJm9H5crz'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://i.ibb.co/WsJ2210/Screenshot-25.png`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `🪀⃟𝙷𝙴𝚈 𝚃𝙷𝙴𝚁𝙴 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴 𝙽𝙾𝚆⃟🪀

🤖🪀 Tharuka’s MD BOT 🪀🤖

✅ 𝙷𝙴𝙻𝙻𝙾...👋
✅ 𝙸 𝙰𝙼 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝚂𝙴𝚁𝚅𝙸𝙲𝙴
✅ 𝙱𝙾𝚃 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 T̆̈h̆̈ă̈r̆̈ŭ̈k̆̈ă̈
✅ (24/7) 𝚆𝙾𝚁𝙺𝙸𝙽𝙶
✅ 𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝙾𝚄𝚁 𝚂𝙴𝚁𝚅𝙸𝙲𝙴

🪀🪀🪀🪀🪀🪀🪀🪀🪀🪀

☑ 𝙱𝙾𝚃 𝙾𝙽𝙻𝙸𝙽𝙴= .𝚊𝚕𝚒𝚟𝚎
☑ 𝙱𝙾𝚃 𝙼𝙴𝙽𝚄= .𝚖𝚎𝚗𝚞

® Tharuka’s MD BOT`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `WELCOME TO THIS *BOT GROUP*

▔▔𝐓𝐡𝐚𝐫𝐮𝐤𝐚'𝐬 𝐁𝐎𝐓 🤖 𝐆𝐫𝐨𝐮𝐩👨‍💻▔▔

🎯 *BOT online* da බැලීමට💫
♦️ *Menu / Alive*

🎯 ගීතයක් හෝ වීඩියෝවක් ගැනීමට💫
♦️ Video ecac ganna 👉 *video* 
♦️ Song ecac ganna 👉 *song* 
♦️ Video Quality ganna 👉 *ytv*
♦️ Video link ecac ganna 👉 *yt*

🎯 ඕනෑ ම photo හෝ video එකක් sticker එකක් විදිහට සාදාගැනීමට 💫
♦️ *Tag කර s*

🎯ඕනෑම photo එකක් BOT මගින් ගැනීමට 💫
♦️ *img*

🎯 *APP* එකක් ගැනීමට💫
♦️ *playstore*

🎯 FB Video එකක් Download කර ගැනීමට 💫
♦️ *fb*`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || `https://i.ibb.co/WsJ2210/Screenshot-25.png`
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `Good Bye 😥👋`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `https://i.ibb.co/WsJ2210/Screenshot-25.png`
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["94712537138","94776344642"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia","Sexy","Fuck"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" අයින් කරල ඉතුරු ටික දාන්න )
global.CHATGPT_API = 'qrEX1pM63UKZuVdAw1yjT3BlbkFJHy39hgAU0vQTALvn4IIj'
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = 'Admingen Illa Ganna 😂'
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
global.pemilik = ['94712537138'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94712537138'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '𝙼𝚁.𝚃𝚑𝚊𝚛𝚞𝚔𝚊' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = 'QUEEN ELISA 𝙱𝚢 𝚃𝚑𝚊𝚛𝚞𝚔𝚊'

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
