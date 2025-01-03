const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`POWERED BY AMMY-MD`" 


global.devs = "2347025836462" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040694847";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2347025836462";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347025836462";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347025836462,2347025836462";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQwLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDc4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImg2S0JrQ2R3NU1YVTl3Uy8rbW51UVh6UnJWS21vSmQrUUhHMkZzbE5iQW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlSbC1DTUpJUTdlV0YxVEJFVS1BS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmFhZGI0MzEtMDY4Yy00OGMzLTk0NGEtNDExYmZmZjlhYjdjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMjIzLFxuICAgICAgNDMsXG4gICAgICA2LFxuICAgICAgMTUzLFxuICAgICAgMTY3LFxuICAgICAgMTc3LFxuICAgICAgMjEyLFxuICAgICAgMjUwLFxuICAgICAgNzMsXG4gICAgICAyMTksXG4gICAgICA1OSxcbiAgICAgIDE1MyxcbiAgICAgIDE4NSxcbiAgICAgIDE0MixcbiAgICAgIDE0NixcbiAgICAgIDg2LFxuICAgICAgMjU0LFxuICAgICAgMTIwLFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDE2MCxcbiAgICAgIDE2MSxcbiAgICAgIDM0LFxuICAgICAgODAsXG4gICAgICA3NCxcbiAgICAgIDQzLFxuICAgICAgMTY0LFxuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgMzYsXG4gICAgICA5OCxcbiAgICAgIDExLFxuICAgICAgMjE1LFxuICAgICAgMjM2LFxuICAgICAgNjMsXG4gICAgICA1OSxcbiAgICAgIDQxLFxuICAgICAgMjAyLFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJIQ1k3MzVYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzMTU1NDc2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzcxNDcxMzk0MDQwMjQ6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxEOVlFRUVOangyYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDT2YxZjV1NU9DYTlhcjN5WGt5OGZLRFR1TnVFakZQVFRlc1pnQWlVZEdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJzdlgrbXBjZkg2Rk5ueFh0bHVFMlM5Z3M1RTFUb0ZXNy9zWStMTDE1M1NJRlZ5Q1Exem12Rk90TFRDSTFBM1F6TU5ocStzZ3Rob3E3L1hHaVVzV0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk8zVGxLcUl5SURybC9IUXdBZ01JQjNRYjdMYy8vUlFYc0p6TGlwdllNdys3TGwwYnpvU2VWN2dOMkJqdlQzMjA3aG9lc1I2cnhzRGNqMTZ6ckFYUUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTMxNTU0NzY6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODE3NDM5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • AMMY TECH』*\n youtube.comhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "AMMY",
  packname: process.env.PACK_NAME || "AMMY_MD",
  botname : process.env.BOT_NAME  || "`AMMY_MD`",
  ownername:process.env.OWNER_NAME|| "BLESSED`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "BLESSED"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
