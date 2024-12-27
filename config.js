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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_44_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTYwLFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU4LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0NlBuR0NCQS96clU4bER1ak5Qam9hVDZBMVpyeWdPTkVITnVIUWRFK3o4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWYmY0cG92WlJucXJzeXhCemg3b1JBXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxOWIzYzg2LTdhZDItNDNhMi05YzEzLWFjZjMxNWFjN2VjM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDI0MCxcbiAgICAgIDE0NSxcbiAgICAgIDExMSxcbiAgICAgIDEyNSxcbiAgICAgIDIwNSxcbiAgICAgIDIxMixcbiAgICAgIDE1NSxcbiAgICAgIDM5LFxuICAgICAgMjE1LFxuICAgICAgMjA5LFxuICAgICAgMTY4LFxuICAgICAgNTQsXG4gICAgICA4LFxuICAgICAgNjQsXG4gICAgICAxMzIsXG4gICAgICAyMzksXG4gICAgICAxODksXG4gICAgICAyMDUsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDIwOCxcbiAgICAgIDc5LFxuICAgICAgMTQ1LFxuICAgICAgMTM4LFxuICAgICAgNDksXG4gICAgICAyMjQsXG4gICAgICAxMDksXG4gICAgICA1LFxuICAgICAgMTk1LFxuICAgICAgMjM5LFxuICAgICAgMTc0LFxuICAgICAgNTgsXG4gICAgICAxNTMsXG4gICAgICA5MCxcbiAgICAgIDIzNCxcbiAgICAgIDE3LFxuICAgICAgMTExLFxuICAgICAgMjEwLFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVNVEtUWFFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEzMTU1NDc2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzcxNDcxMzk0MDQwMjQ6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDdDOVlFRUVJK211cnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDT2YxZjV1NU9DYTlhcjN5WGt5OGZLRFR1TnVFakZQVFRlc1pnQWlVZEdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk0yNVJ6VGZTN2J2a1RUQU5YRWRhRmUwdXhzeFpPK2JsU05DeG5GSW04SzROcVR0MnpIOVN2S3VqSTJiSmVjNHBJemQxdStVMlk2QWdWUFE1bW04ZUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImEyZ3V0anVQeTE2V2FRVk1zdHY5RlkxL2lsSnEvK0tYczVUS01nU2xpMjI5Y2xNTTEzd3BxOW1ycktRVkhRNmloVDU4S3hhVW5yTlJaN1JGQTB0T0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTMxNTU0NzY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1Mjk5ODYwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
