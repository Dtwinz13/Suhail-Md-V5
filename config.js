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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_36_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3LFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjExLFxuICAgICAgICAzMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVGZBTzVuY1dIcG9oOFROSk1Gcms3b0x0UGVHclhrK2dXdXlEa3laR0tURT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib2VCemxCQW5TVGljeGRHUWRmMUJtd1wiLFxuICBcInBob25lSWRcIjogXCJkOGUzNmE1MS0wMTBjLTQyMWYtYWRiZC00NTIyZDU4OWJkNzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMjA4LFxuICAgICAgMzksXG4gICAgICAyMDYsXG4gICAgICA2MCxcbiAgICAgIDQxLFxuICAgICAgOTAsXG4gICAgICAxMzcsXG4gICAgICAyMDIsXG4gICAgICAyMDcsXG4gICAgICAyMzUsXG4gICAgICA3NixcbiAgICAgIDMxLFxuICAgICAgMTk3LFxuICAgICAgMTY2LFxuICAgICAgNzcsXG4gICAgICAyMzAsXG4gICAgICAyMTUsXG4gICAgICAxNTMsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAyMDMsXG4gICAgICAxNTYsXG4gICAgICAyMDksXG4gICAgICAxOTksXG4gICAgICAxODEsXG4gICAgICAxMDcsXG4gICAgICAxODEsXG4gICAgICA1NixcbiAgICAgIDk2LFxuICAgICAgMTgwLFxuICAgICAgMTgyLFxuICAgICAgMjUzLFxuICAgICAgMjQ5LFxuICAgICAgMjQsXG4gICAgICAyMixcbiAgICAgIDEwLFxuICAgICAgNzAsXG4gICAgICA1NixcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4NjM1Q0xUUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4NjYzNjcxODo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9yZW9sdXdh4oCiXCIsXG4gICAgXCJsaWRcIjogXCIyNDIxMjQ4ODkwMTgzNzA6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTERIaGE0REVNTEp4cnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyNmI1cHZ2cjRzbWFkbTJDdnhtelk2R2tJdUMzNjF6a0tHS1Frc21xYXhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJobjh3OWZUOVZkeHpIRHVHVnlxRFhWelFQbGhyL1JSNXFxb0xZNVh4UzVEUWRRaHZKdTRmMVJ5SkNMTHdIbkxxMVVaNHVRUUJkMjJCb0M2MVlTNURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdzRmpQV1lYNUpENmVZek41ZTdGRW0yQndiM1FYUHdXRGxwYmhuNFpQbmc1VkRrMjN5N2d1TjB1WGwzYVFuMXJsSFBNbTVjNHB3M21yOFZVZXo4OWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODY2MzY3MTg6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUwMTAwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU93RVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3dFLmpzb24iOiAie1wia2V5RGF0YVwiOlwidkFpMC9zc1lzZlNvZzRGaHd5c1g3VzF5MGhmTDcxTU5aUGZhUXNRdFhwST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDE4NjY0MTUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
