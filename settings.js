/*
===================================================================================================
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█   █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█   █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█   █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█
 
 █▀▀█ ░ █▀▀█ ░ █▀▀█   ░░   █░░▒█
 ░░▀▄ ░ ░░▀▄ ░ █▄▀█   ▀▀   ▒█▒█░
 █▄▄█ █ █▄▄█ █ █▄▄█   ░░   ░▀▄▀░ 
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
global.READ_MASSAGE = 'true'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94717069879'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃 ²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'on'
//👇 Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//👇 Auto react 
global.AUTO_REACT =  'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//👇 Your Bot Name
global.botnma =  '𝐒𝐇𝐀𝐃𝐎𝐖 𝐊𝐈𝐋𝐋𝐄𝐑 𝐌𝐃 𝐁𝐎𝐓 𝛁' 
//👇 Your name
global.ownernma =  '𝐌𝐑.𝐃𝐀𝐇𝐀𝐌 𝐏𝐀𝐍𝐒𝐈𝐋𝐔' 
//👇 Sticker package name
global.packname =  '𝐒𝐇𝐀𝐃𝐎𝐖 𝐊𝐈𝐋𝐋𝐄𝐑 𝐌𝐃 𝐁𝐎𝐓' 
//👇 Sticker Author Name
global.author =  '𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝙾𝙵𝙲' 
//👇 Kick And Auto Delete Group link Senders
global.antilink =  'true'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'INBOX NOT ALLOWED'
//👇 Owner React Imoji
global.OWNER_REACT =  '👩‍💻'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = '𝙶𝚒𝚝𝚑𝚞𝚋'
//👇 URL button 2 name
global.BUTTON2 = '𝚈𝚘𝚞𝚝𝚞𝚋𝚎'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://github.com/SKBOTZ/Queen-Elisa-MD-V2/'
//👇 Button 2 url
global.BUTTON2_URL = 'https://youtube.com/@shadowkillermodz'
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
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'pxVpxefA1K9eGJxEe5kgPzBv'
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `♡ 𝙷𝙴𝚈 𝙸 𝙰𝙼 𝙰𝙻𝙸𝚅𝙴 𝙽𝙾𝚆 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃 ♡`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `»»——⍟——««𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿»»——⍟——««`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || `https://i.ibb.co/3zY9zp4/IMG-20230130-WA0222.jpg`
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `»»——⍟——««𝙶𝙾𝙾𝙳 𝙱𝚈𝙴 𝙵𝚁𝙾𝙼 𝚂𝙷𝙰𝙳𝙾𝚆 𝙺𝙸𝙻𝙻𝙴𝚁 𝚆𝙰 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿»»——⍟——««`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `https://i.ibb.co/wYv1wgv/IMG-20230130-WA0230.png`
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Desable PM Block
global.NO_BLOCK = ["94717069879","94717069879"]







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['94717069879'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94717069879'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '𝐒𝐇𝐀𝐃𝐎𝐖 𝐊𝐈𝐋𝐋𝐄𝐑 𝐌𝐃 𝐁𝐎𝐓' // Your name ඔබේ නම 
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
    wait: '*♲ Shadow Killer Wa Bot Is Searching Your Result...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
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
global.alivelogo = `https://i.ibb.co/zfP3kV0/IMG-20220217-081502-038.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
