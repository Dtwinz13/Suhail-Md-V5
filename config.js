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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_19_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcwLFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQWgyNHNyUUVjWVRlblF5b21TVnZjZEFZKzErSThHUkVlWk9nVkZKMlhlQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGx3QjNXcllUSUN4SEdoeGZZeEQwUVwiLFxuICBcInBob25lSWRcIjogXCIxMmNjMTRjNi0wZDE1LTRhOGMtOGU1Mi01YzRjYzEyYWQyNTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgMTMxLFxuICAgICAgNDMsXG4gICAgICA5LFxuICAgICAgMjQwLFxuICAgICAgMyxcbiAgICAgIDE1OSxcbiAgICAgIDc4LFxuICAgICAgMTg0LFxuICAgICAgMTYyLFxuICAgICAgMTkxLFxuICAgICAgMTA0LFxuICAgICAgMTU2LFxuICAgICAgMjEzLFxuICAgICAgMTkwLFxuICAgICAgMTMxLFxuICAgICAgMTYyLFxuICAgICAgMTMzLFxuICAgICAgODQsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxMTcsXG4gICAgICA1MCxcbiAgICAgIDM3LFxuICAgICAgMTYsXG4gICAgICAyMzAsXG4gICAgICAyMTIsXG4gICAgICAzNCxcbiAgICAgIDE3NyxcbiAgICAgIDY5LFxuICAgICAgMjIxLFxuICAgICAgMTAwLFxuICAgICAgMjI5LFxuICAgICAgMTk3LFxuICAgICAgMjIsXG4gICAgICAxNTUsXG4gICAgICAxOTEsXG4gICAgICAxNTMsXG4gICAgICAxNzIsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEE4N1FSU05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjE2NTM2NjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwMzgyMjM2MTEwOTMwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUdidXNjR0VJM3ZpYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3T21icERIb2hNV1BvVmlYSjFjbFJQNkExcnhLRi9TazdEN1M1dERGZDA0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkd4elcxbWFwYUsxZXhaRk8xNDg4YjFpbi9UeE14emhRclZPcFhwZWtEdlUxM2kybStwY2pyTmdnU2V1MzZzZ3VaVXhQU1E3K2JBSWFVMXM5cEQ0RENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFWck8yT1dNcVcrT3RuS2FaVjMzUm5lQk4zTmJHdVlmbkFaWXdQcWpndE5IbTI0R1htSDV3SXhKOXd2Y0tJU2dEUmdGZ0gwN2d5dFo5NUpYR0dnT0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjE2NTM2NjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTA2Mzg2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 POWERED BY AMMY-MD 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • AMMY TECH』*\n youtube.com/@suhailtechinfo0"),
 
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
