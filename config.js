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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_47_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5YmpxN3ZtMEEyS1VMcWc1M1c0ajgvUkttT3BvQkVJNlVsV0VPM20xaGNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3S0FocXF4dFQ2ZUVycHlucGNLTDdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVlYTdiOTE5LWFjMjktNDAxZC1hZDU1LWJkMmM2YWQ2Mjg5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDM3LFxuICAgICAgMTM0LFxuICAgICAgOTYsXG4gICAgICAxMzgsXG4gICAgICAyMyxcbiAgICAgIDIyLFxuICAgICAgMjUsXG4gICAgICA0MSxcbiAgICAgIDI0NixcbiAgICAgIDE1NCxcbiAgICAgIDc4LFxuICAgICAgMjUzLFxuICAgICAgMzMsXG4gICAgICAyNDQsXG4gICAgICAxMDEsXG4gICAgICAxNDksXG4gICAgICA4LFxuICAgICAgMjEyLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDIwMCxcbiAgICAgIDU0LFxuICAgICAgMTQwLFxuICAgICAgMTc2LFxuICAgICAgMTU3LFxuICAgICAgOTgsXG4gICAgICAxNCxcbiAgICAgIDE5LFxuICAgICAgMTQzLFxuICAgICAgMTI5LFxuICAgICAgODksXG4gICAgICAxNzcsXG4gICAgICAyMyxcbiAgICAgIDIyNyxcbiAgICAgIDI1NCxcbiAgICAgIDI1MixcbiAgICAgIDE4NCxcbiAgICAgIDExOCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCQlpBTlcxMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzE1NTQ3NjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MTQ3MTM5NDA0MDI0OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lERDlZRUVFTjZHeDdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ09mMWY1dTVPQ2E5YXIzeVhreThmS0RUdU51RWpGUFRUZXNaZ0FpVWRHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVK0hSTlkzQ3I2aE9WTHpKSThjeFNqZW1pRWlSSlk0TkNMbHhCNjZ0WTJ1V2kzMldERmFLM0xoWkhEeGJWdVQwZWJpMTRRUmpEdTI0a3hDL2FWZEtCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYSFQxUXRSaWh2V2lnajY2YmVXcnlqU0QwZWVLcTNnekdVYlprUUVzd3IzZG95NU95aUR5bk9LUE1UWkxQbkJRbEVhREZLOGZMZUdDSzZRc3NPdklpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEzMTU1NDc2OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUwODgzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA3MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDcyLmpzb24iOiAie1wia2V5RGF0YVwiOlwidmMwd3pmS21iV3JvSEFSUy9ETlVqVUJKblFmV29NYmpMWUhkSFJ3ODBuRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc3NzY0NDc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY BLESSED-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • AMMY TECH』*\n youtube.comhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "AMMY",
  packname: process.env.PACK_NAME || "AMMY_MD",
  botname : process.env.BOT_NAME  || "`AMMY_MD`",
  ownername:process.env.OWNER_NAME|| "`AMMY`",


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
