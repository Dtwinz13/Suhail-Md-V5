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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_30_01_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhtaTR1MFJNbXR2Z1E1T2VzS0RkVW5acjNsaUl6UlNhL2t4eTdIeHBxZDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlVNlJuUkNOVHB5V0RhckFRSGpKaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjcwZTA5MjgtZTU4Yy00MWNiLThjZTEtOTc2NjBkZGQ5NTI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMjMzLFxuICAgICAgMTYyLFxuICAgICAgOTksXG4gICAgICA3LFxuICAgICAgMyxcbiAgICAgIDEyNCxcbiAgICAgIDI0MixcbiAgICAgIDI1LFxuICAgICAgMTA4LFxuICAgICAgMTI4LFxuICAgICAgMjQ3LFxuICAgICAgMTQ2LFxuICAgICAgOTUsXG4gICAgICAzMSxcbiAgICAgIDg3LFxuICAgICAgNzQsXG4gICAgICAxNDYsXG4gICAgICA3NCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDIyMixcbiAgICAgIDEzNSxcbiAgICAgIDE3OSxcbiAgICAgIDEyNyxcbiAgICAgIDE3NyxcbiAgICAgIDEwNCxcbiAgICAgIDIzNCxcbiAgICAgIDkwLFxuICAgICAgMTc4LFxuICAgICAgMTk3LFxuICAgICAgMjI1LFxuICAgICAgMjUxLFxuICAgICAgMTA5LFxuICAgICAgNTEsXG4gICAgICAyMjYsXG4gICAgICAxODUsXG4gICAgICA2MSxcbiAgICAgIDI2LFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlWNU42M01EXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzE2NDc3OTQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkLhtI/Jql/htIfhtIvhtIdcIixcbiAgICBcImxpZFwiOiBcIjI0OTczMTQyNzA5NDY3ODo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05TMnFhc0NFTW1aNzdzR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaHFkb2t1QWcxblRIVlhrdGZ2eE5NWXF2SWJRTG53dTEwNStFVXJ1T1hUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDdUJDSWUvUkdkeEYwbnhwWURySzhEd1VodUVxR2dqYmNoMW5kWmJLNjlxK1c3S3M0WndJb3l3Z0ZvTFdaU29QT1BmVjF1dS9tNXB1bXA5UWVsME1BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5RWxTaEh2aFV4djQ2SlBob3RxTmlZVEZOZU9lSmpqMkMxMTVaaE1GVW1uMVd2MXdrdFJKWnIzcnJyU1VyeklyRFpFbjEyYUQxSVh6Qk9ubS85dWFDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzE2NDc3OTQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzYxNjY2MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBKzNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUErMy5qc29uIjogIntcImtleURhdGFcIjpcIkkwWkh0Kys2d2RsMG1RTHR4RWprZFRnY0wwUVVtdnZDbnpNdm5lR1dVSms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjI3NzI3MTg4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
