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
global.SEND_WELCOME = process.env.SEND_WELCOME || false
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
/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94715166712'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 ²⁰²³'
//👇 Your Bot Name
global.botnma =  '𝐐𝐔𝚵𝚵𝚴 𝚵𝐋𝚰𝐒𝚫 𝚳𝐃 3 𝛁' 
//👇 Your name
global.ownernma =  '𝑴𝒓 𝑵𝒊𝒎𝒂' 
//👇 Sticker Author Name
global.packname =  '𝙼𝚁 𝙽𝙸𝙼𝙰 𝙾𝙵𝙲' 
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
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `default`
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
global.GROUP_LINK = 'https://chat.whatsapp.com/FI3Ay8c1yRp4eWfcofo9EW'
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




























// DO NOT CHANGE THIS. ERROR WARNING දාන්න තැනක් නැතුව මෙතන දැම්මෙ.
global.rep = { // All Replies = 145
    K1: '🫢හායි😁❤️',
    K2: '🤭හූයි✌️💞🫶',
    K3: '😉🫶හායි😂',
    K4: '🥴හූයි😊',
    K5: '😂හේයි, හව් ආ යූ🥴✌️',
    K6: '😁Hey there💝 I am WhatsApp Bot😏',
    K7: '❣️ඇයි හලෝ😌',
    K8: '🙃මොකෝ හලෝ🥲',
    K9: '😒මොකෝ?',
    K10: '🥺ඇයි අනේ?❤️🫢',
    K11: '🌝❤️',
    K12: '😜හී හී😁හූ හූ',
    K13: '😁හී හී💞',
    K14: '😊හූ...',
    K15: 'ඇයි🥲',
    K16: '😂😂✌️',
    K17: '😐ආහ්',
    K18: 'චූටී තමයි😇',
    K19: '🥺🥺ඇයි සුදූ❤️💓',
    K20: 'කොහොමවත් නෑ ඉතිං😒',
    K21: '😁මන් දන්නෑ🥲',
    K22: 'හොඳයි තමා😌',
    K23: '😂😂මරු හැබැයි',
    K24: 'මලු🙃',
    K25: '😘😇❤️',
    K26: '😘😘මෙන්න ඔයාට💕',
    K27: '😊ඇත්තමද?❤️',
    K28: '☺️👻ඔය ඇත්තමද❤️',
    K29: 'ඇයි🙄',
    K30: '🥺✌️සිදෙනවද?',
    K31: '😐💔ඕවට එන්න එපා හරිත😒',
    K32: '😏අනේ මේ😒 යනෝ යන්න💔',
    K33: 'ඔයා තමයි හොරා😒 මගෙ හිත හොරකම් කළානෙ ඉතිං😌',
    K34: '😇මොකො හූම් ගාන්නෙ😒 බකමූනා',
    K35: '​😁😁මොකෝ හලෝ හූම් හූම් ගාන්නෙ?',
    K36: '😉නෑ අනේ මුකුත් නෑ😐🫠',
    K37: '😒ආහ්',
    K38: '✌️ඔව් නං එච්චරයි😌',
    K39: '😐හේ හේ නැද්ද?🫣',
    K40: '🙄මොනවටද ආස?',
    K41: '😌මාත් ආසයි😊💞',
    K42: 'එල😌',
    K43: 'බැරි නං නිකං ඉන්න😏',
    K44: '😂😂💔',
    K45: 'සුදුයි තමයි ඇයි මොකද?🙄',
    K46: '😇තාම කෑවෙ නෑ අනේ🥺',
    K47: 'බොන්නෑ😒',
    K48: 'නිදිමත නං දිදාගන්නකො වද දෙන්නැතුව😒😌❤️',
    K49: '😇දැම්ම නිදාගන්න බෑ අනේ😜 නිදිමත නෑ😁💞',
    K50: '😉මුකුත් නෑ අනේ🫡',
    K51: 'මොකද්ද දන්නෑ🥲',
    K52: '😝මම නං මුකුත් කරන්නෑ අනේ😁 ඔයාලා දිහා බලන් ඉන්නවා😌',
    K53: '🥺පාලුයි අනේ. අපි සෙල්ලමක් කරමුද?😊✌️',
    K54: '😌😁ආදරෙයි❤️',
    K55: '😌ආදලෙයි ඉතිං❤️❤️',
    K56: '🥺🥺ඇත්තද?',
    K57: '🥺අනේ ඒ මොකද?🥴',
    K58: '😒මටත් දුකයි ඒ ගැන😕',
    K59: '🤭ඉන්න බෑ අනේ😜',
    K60: '🫡මොකද අඬන්නෙ?😒',
    K61: '😉මොකද අයියෝ😂',
    K62: '😐මුකුත් දන්නැති අහින්සක මම😕💔',
    K63: '🚲හා යමු යමු😌',
    K64: '🥴දෙන්න බෑ😒',
    K65: '🙏පස්සෙ දෙන්නං🥲',
    K66: '😁බඩගිනි නෑ❤️😒',
    K67: '😳අම්මෝ හා හා🙏',
    K68: '😂ඇයි යකෝ😉😈',
    K69: '👻ඇයි හුයි😁 කෝං ගහේ නයි😂',
    K70: '🥲දන්නැත්තං නිකං ඉන්න😜',
    K71: '😂අපි තමයි හොඳටම කරේ🥲\n🤧රෙද්ද තමයි😂',
    K72: '🙄ආ හා 😏ගහපන් බලන්න💔👎',
    K73: 'හී😂😂😂💓',
    K74: 'වන්ඩර්පුල්🥲😂',
    K75: '😂ඕං බලන්නකො ඒකෙත් හැටි නේද🥴😂',
    K76: '😌එල',
    K77: '🥲මොකෝ ඩෝ😉❣️',
    K78: 'අඩෙහ්🙃😹',
    K79: 'ඔය කිව්වට ලොකු නෑ හොඳේ😏',
    K80: '😹මම නං පොඩී තමයි ඉතිං😌',
    K81: '🥴ටිකයි ද?😂',
    K82: '🥴ඒකි එහෙම නෑ බන්😅',
    K83: '🥲ඌ මොකද්ද කරේ?',
    K84: '😂එහෙම කියන්න එපා එයාලා පව්නෙ😐🤭',
    K85: 'හුම්ම්😌 පව් ඉතිං😂',
    K86: 'හා😒 කියනකං තමයි හිටියෙ🙏❣️',
    K87: 'මන් දන්නෑ🥲',
    K88: '  👀  ',
    K89: '🥺ගිහින් බේත් ගන්න',
    K90: '🥺ගොඩක් අමාරුද?☝️',
    K91: 'DSI පාරක් කන්න ආසද?😂',
    K92: 'කලිසම ගලවනෝකො ඉතිං😒',
    K93: 'අත ලෙප්ට්🥲',
    K94: '🫢🫢හරි නරකයි😒',
    K95: '😌මම නං කොහොමත් අහින්සකයි රටක් වටී😁❤️',
    K96: 'අතේ...🥲🥲🥲🥲🥲🥲',
    K97: '😐දාන්න බෑ😒',
    K98: '📱🔌පෝන එක චාජ් එකට ගහලා ඔය ළමයා ගිහින් වැඩක් කරගන්න😉',
    K99: '🫢🤭ඇයි? අසහනේ ද?🤨😏💔',
    K100: '💔පෙම් සිත රිදුනා සත්තලනේ🥺🤧',
    K101: '😹😹☝️',
    K102: 'බල්ලා පූසා මීයා හාවා නරියා අලියා😒',
    K103: '🥲උරුලා ගති තමා',
    K104: '😐කියන්න බෑ😒 ඇයි මොකෝ?🙄',
    K105: '😐අපි පැනල යමුද?🤭🫢',
    K106: '☝️ගියා නං ආයි එන්නෙපා😒',
    K107: '😅✌️😝',
    K108: '😂😂විහිලු නං කමක් නෑ😌',
    K109: 'මං තරහයි😒 ඇයි මොකෝ?👎',
    K110: 'ඇයි පකෝ🥲',
    K111: 'ලබ්බ😒',
    K112: 'මොන හුම්තක්ද යකෝ?🙄',
    K113: '😒පලෑන්න පොන්නය💔',
    K114: '🥲💔🙏',
    K115: '🥲🥲💔☝️',
    K116: '😏😑එන්නෙපා ගෑනි ගාගෙන🤨💔💔💔',
    K117: 'දැන්ම බෑ ළමයෝ🤭🤭 පස්සෙ දෙන්නං😝😒',
    K118: 'මොන පකක්ද?😒',
    K119: '😒👎',
    K120: 'එහෙම කියන්නෙපා පව්නෙ😒',
    K121: '🫢🙄',
    K122: 'අනේ තෝ හුකාගනිං🙂💔',
    K123: '😐උක්කමු😒😂😂',
    K124: 'ඇයි🙄 පුකද බලන්නෙ?',
    K125: 'උබේ දෙක ද?😂',
    K126: 'උබේ ද?😂',
    K127: '🥲මං ඇවිත් කටට ගන්නද?😒😝',
    K128: '😂😂හමෝ',
    K129: '😏ඕන්නැත්තං නිකං ඉන්න',
    K130: '🤭නිකං ඉන්න එපා ඇඳුමක් ඇඳගන්න😂❤️',
    K131: '😂😂🙏',
    K132: '😂🤭',
    K133: '😁',
    K134: '😏☝️',
    K135: 'අඬන්න එපා ඉතිං😒😝',
    K136: '🥴පිත්තු',
    K137: '🙂',
    K138: '😌😌',
    K139: '🥲🥲💔',
    K140: '😍🥰😘💞💕💓💗💖❣️❤️',
    K141: '😐🙄',
    K142: '🥺දුක් වෙන්න එපා ඉතිං❤️',
    K143: '🥺🥺😐',
    K144: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
    K145: '🫡🫠🤝',
    K146: '🎤දහසක් මල්🌸 විකසිත වන😊 මේ හිමිදිරි උදෑසනේ🌄 පතන්නම් ඔබ සැමට🙏 සුභම සුභ උදෑසනක් කියා...😃',
    K147: 'ලබන්නාවූ රාත්‍රිය හීනෙන් හොල්මන් පෙනෙන, මහ රෑ දාඩියෙන් තෙමී ඇහැරෙන, පෙරේතයන් ඇද යටට එන, කුම්භාණ්ඩයින් ජනෙල් වලින් එබී බලන, භයානක රාත්‍රියක් වේවා😂👻👻❤️'
    }






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
//global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
