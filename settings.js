/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█
WHATSAPP BOT BY ༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉* ( Btfu OFC )

WHATSAPP - 923245643588
SUPPORT GROUP - https://chat.whatsapp.com/J4XGGrTJMewKvqAGrEZbth
YOUTUBE - https://youtube.com/@mad_675?si=xKhFO-Cp2P1n6Lec


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
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = false
//👇 Inbox massage block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = false
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = false
//👇 Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = false
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = false
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = false
global.SEND_GOODBYE = false
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
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
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
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
global.AUTO_SEEN_STATUS = false



/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['923245643588'] 
//👇 Your Caption ( Image Video )
global.cap = 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉*'
//👇 Your Bot Name
global.botnma =  '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫MD👑 ' 
//👇 Your name
global.ownernma =  '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉*' 
//👇 Sticker Author Name
global.packname =  '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '🌞'
//👇 Song Download Massage 
global.SONG_DOWN = '' 
//👇 Song Uplode massage 
global.SONG_UP = ''
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Karachi'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `I am Alive`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* 

_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ 
_Cʀєαtєd вყ :༫᳀֎𝕸𝖆𝖐𝖐𝖎֎⸔༫👑҉*_
_If any query : wa.me/923460777483E = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["923460777483"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" අයින් කරල ඉතුරු ටික දාන්න )
global.CHATGPT_API = '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'
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['null']
//👇 Your Bot Group Link
global.GROUP_LINK = 'https://chat.whatsapp.com/J4XGGrTJMewKvqAGrEZbth'
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
    botAdmin: '*Admin the bot first idiot !*',
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
global.pemilik = ['923245643588'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['923245643588'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉*' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = [','] 
global.sp = '🌞'
global.weem = '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔MD༫👑'

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
