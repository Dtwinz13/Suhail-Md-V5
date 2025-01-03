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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_03_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDk1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICAzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImcyanpOZ1UyVUxRUXhnSHV1eVp6TUE1cm1uYnBoRFNhK3hNdEFuNk00dFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlUcFo0MjRVVHY2c2RabHdBVjFVNmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTFlZTM0MGEtZTg2MC00MWFmLWE0YWQtY2Q3MTkzYWQ3OGM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDIzOSxcbiAgICAgIDIxNyxcbiAgICAgIDE3MSxcbiAgICAgIDE2MSxcbiAgICAgIDE4MSxcbiAgICAgIDE4NixcbiAgICAgIDM1LFxuICAgICAgNDYsXG4gICAgICAxMjMsXG4gICAgICAxOTUsXG4gICAgICAxMjUsXG4gICAgICAxNjcsXG4gICAgICAyMjAsXG4gICAgICAxMDMsXG4gICAgICAxNyxcbiAgICAgIDIsXG4gICAgICA5OSxcbiAgICAgIDYsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTksXG4gICAgICA5LFxuICAgICAgMjExLFxuICAgICAgMjA0LFxuICAgICAgMzMsXG4gICAgICA4OCxcbiAgICAgIDQ3LFxuICAgICAgMTEsXG4gICAgICA3NyxcbiAgICAgIDMzLFxuICAgICAgOSxcbiAgICAgIDIyNCxcbiAgICAgIDEyMixcbiAgICAgIDIzLFxuICAgICAgMjQxLFxuICAgICAgMTY4LFxuICAgICAgMjgsXG4gICAgICAyMyxcbiAgICAgIDY2LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzE4QUNIM1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA2OTQ4NDc6ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MDI2MTQ0NTg5NDIzNTo4NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeUU2NUVGRUtQNDM3c0dHQnNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9FV1BQUElrMjZ3Z3NTWTlVYU1aaWNOZmVQME9TM3psbFEybUM5OFpOaVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVjdQNVpPVFA0L0NBc1orR2hoT1A1emxGQU1BVzdtcGlLUzdMcklQT1hVR0ErMUdZQ3V4R3c5dXNOUEZwNE1EYTJ5blR4SG9iOWs2VGd0dWRvTzBFRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSGpqOUMzNTNXRk5iMVg3RUVFSlFKUnJ0cmhBZGtOVVEyWGpndTlvR3VnOXc2RjVLYjY1RWZ2aHM2L0Y5Q3JpbDdwdEVuSkN0enFMQTRobTRZUDljaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0MDY5NDg0Nzo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU5MTY1ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdGpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF0ai5qc29uIjogIntcImtleURhdGFcIjpcIkhnb1BNS3lLV0tjT29XZGpCN3FFNkhNR2ZkUnpiMGlGNHB3d1YyRXBkM1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3OTU4MjU4OCxcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE0LDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
