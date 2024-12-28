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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_28_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjksXG4gICAgICAgIDg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoZFVKWGMxRVdzeHlzQVZRWWxjeFdBc29YbVFIT045ckorNGNOZkNqOTU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItZTR6bmNlNFNLbVBqSU9XczdwdWdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcyMTM2OTg1LWY2NjctNDI4Yy05NjEyLTU3ZjhhOTgwZGYyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDc4LFxuICAgICAgMjA0LFxuICAgICAgMTE3LFxuICAgICAgNSxcbiAgICAgIDE2LFxuICAgICAgMTYxLFxuICAgICAgOTYsXG4gICAgICA0MCxcbiAgICAgIDIxMyxcbiAgICAgIDMzLFxuICAgICAgMyxcbiAgICAgIDI5LFxuICAgICAgMTQwLFxuICAgICAgMTcsXG4gICAgICA4MyxcbiAgICAgIDUyLFxuICAgICAgMTUwLFxuICAgICAgNzksXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMTcsXG4gICAgICAxNTgsXG4gICAgICAxNTUsXG4gICAgICAxOTcsXG4gICAgICAyNTQsXG4gICAgICA5MyxcbiAgICAgIDE3NyxcbiAgICAgIDk2LFxuICAgICAgMjMsXG4gICAgICAxMzgsXG4gICAgICAyLFxuICAgICAgMTM0LFxuICAgICAgMjA3LFxuICAgICAgMTk4LFxuICAgICAgMTYyLFxuICAgICAgNjEsXG4gICAgICA0LFxuICAgICAgODAsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVIyNEVXNjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTMxNTU0NzY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzE0NzEzOTQwNDAyNDoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL0M5WUVFRU9DK3dic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNPZjFmNXU1T0NhOWFyM3lYa3k4ZktEVHVOdUVqRlBUVGVzWmdBaVVkR2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiakd0MkRRWE5vZzM3WHhRTlQ1UGFKSlYwZ21RR2VCUVpRU3phakhqZWlPclpLSVJSaU9kenUrSUVUTHJ2Yk9GeEhZeEI0Y2lsZklnTXFqa0JxQjd2RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3FOTG05RWtiZkFKRTNxNkcvMjZ3Ti9KUHFwK3RUMWlueFZtcEEyVERhSUFxRVRNc1YzbHJnWngvWVBJM0kzQU5yZDFwOHExdllYaFlLeW5vSkNGaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMzE1NTQ3NjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0MTc3MDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
