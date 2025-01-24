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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_58_01_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDczLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA2MixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY003MWtUTkVQSEVkWXJSOFcvMG9KbUZsYTlSQnMvN2ZweFVESStpeEFZQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnFKbmF2c2JUVnVudnJIZTg4bkxKQVwiLFxuICBcInBob25lSWRcIjogXCI0MmYyNjQ2MS05YzhkLTQwZGUtODg3My1kZjk5ZWZjZDM2ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAyMjksXG4gICAgICAxMjgsXG4gICAgICA4OCxcbiAgICAgIDIwNSxcbiAgICAgIDEzNixcbiAgICAgIDEwLFxuICAgICAgNTUsXG4gICAgICAyNTEsXG4gICAgICAxMzIsXG4gICAgICAzOSxcbiAgICAgIDUsXG4gICAgICA2NixcbiAgICAgIDU4LFxuICAgICAgMTgwLFxuICAgICAgMTk5LFxuICAgICAgMTI1LFxuICAgICAgMTA0LFxuICAgICAgMTI4LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAyMjAsXG4gICAgICAxMTYsXG4gICAgICAyNixcbiAgICAgIDYwLFxuICAgICAgNDIsXG4gICAgICAxOTUsXG4gICAgICAyNTIsXG4gICAgICAxMzksXG4gICAgICAxNTQsXG4gICAgICAyMjgsXG4gICAgICA4LFxuICAgICAgMjA2LFxuICAgICAgNTcsXG4gICAgICAxNzIsXG4gICAgICA5MSxcbiAgICAgIDE2NixcbiAgICAgIDk2LFxuICAgICAgOCxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxMjc1VDFFUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNTc5MzIyMDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFub255bW91cyBCb3NzXCIsXG4gICAgXCJsaWRcIjogXCIxNTM3ODE5MDgwNDk5Mzk6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1hleGFZRUVMMnB6N3dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpNHJSNUtSMS9OSzgxNjhEUWt3eGxWWWJQaTdlZFJlcWZ6UDEraE0wbmwwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndMbFIrMlYrSGVvOUlFaDJ5TTNYV2F0c0JEK1M1SE10ZVZGWGNveTJNaXRwVVZLMXlldDFrZC80OWVoclh5ZnlOV1k2S1R3L05BeEVKbnZuS0IrdUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1Sc2Q4b0FGSWx6MEhLbVY2VCtnbnpxQ3E0eGREZk1mUjRTUS81bG8yeGFva0VEMkQ1MU5zZTFteERhaVNYb1BhcWcvOUw1TmhHckFzckljWEJJZ2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjU3OTMyMjA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3NzQxNTA2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDhlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQOGUuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
