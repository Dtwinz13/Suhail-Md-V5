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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_51_01_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLWVNGQUJJNnltSXV2S3hjSWZPRjQ0ZlpISnc2YnBuc1htYkhUWk9PTW44PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUOVpldnE4LVIzQ0tKQ0E3SmNMbDdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3ZjAxYjVlLWFkMzktNDhlNS05MWM0LWUyNDYyYmUzYWMzY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDc4LFxuICAgICAgMTQxLFxuICAgICAgMTg3LFxuICAgICAgODcsXG4gICAgICAyNDgsXG4gICAgICAxMDgsXG4gICAgICAyMjksXG4gICAgICAxNjEsXG4gICAgICA1OCxcbiAgICAgIDQwLFxuICAgICAgMjA1LFxuICAgICAgMTc2LFxuICAgICAgNDEsXG4gICAgICAxMzEsXG4gICAgICAxMjQsXG4gICAgICAxMjQsXG4gICAgICA5MSxcbiAgICAgIDEyOSxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMTcxLFxuICAgICAgMjQsXG4gICAgICAxMDksXG4gICAgICAxMzYsXG4gICAgICAxODIsXG4gICAgICAxMzAsXG4gICAgICAyNTAsXG4gICAgICAxMjAsXG4gICAgICAxNjEsXG4gICAgICAxMjIsXG4gICAgICAyMjMsXG4gICAgICA2OSxcbiAgICAgIDIzMixcbiAgICAgIDEwNSxcbiAgICAgIDExNSxcbiAgICAgIDEyMyxcbiAgICAgIDU0LFxuICAgICAgNjksXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzg1OEFMOUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDg2NTE0MDU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA5MTQ0MTAzNjI0Nzg0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2k2dWJRRUVLR216N3dHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRajhoL0E4MDRyOGhIbk93dTUvVm1ncWpKczhFK0srY09wN2l1RkdaemdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZSWk8wenZ6VThPU0Exb3dPaXd3citYT05OWUlzRndaRVllT3FJeFhCWldkTnA4Uzc4bDBMTkJZMlpTNnJveThnbU1zOUNuc2dPaEE3Tjl0RDEyT0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh2bm1lTEMzclQyUHkyZHVxSk9QVnJSZGFyQnlweW92c0d6WTVyZXB0YytvcGxjc2I0VFVISHBYekp0eFdDaE5ZS3Z0RWd5UFNrVHpCWmd3b1pnMkJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDg2NTE0MDU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzc0MTA5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZWR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlZHLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
