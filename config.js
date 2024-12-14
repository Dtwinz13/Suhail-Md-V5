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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_20_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOa2RFYkNHOW8wUnY0RVUwbmdsWHdXRjBOZm5kSnFDa1Y5ZHBXcXRramlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5TXpVeTdiOVFRMnUzUEh5UXdiOE53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFlZjViMWE5LWYwZjQtNDRjZi05NmQwLWZhOTZjNDkxOTA5NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAxMzAsXG4gICAgICAxMTMsXG4gICAgICAxNTMsXG4gICAgICA4OSxcbiAgICAgIDIyMyxcbiAgICAgIDEwOSxcbiAgICAgIDIwNCxcbiAgICAgIDk3LFxuICAgICAgMTU5LFxuICAgICAgMTY1LFxuICAgICAgMTIzLFxuICAgICAgOTAsXG4gICAgICA1NyxcbiAgICAgIDEwMCxcbiAgICAgIDI0OCxcbiAgICAgIDE0OCxcbiAgICAgIDQ3LFxuICAgICAgMjM2LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTk5LFxuICAgICAgMjQ5LFxuICAgICAgNjcsXG4gICAgICAxOSxcbiAgICAgIDc5LFxuICAgICAgOTUsXG4gICAgICA1MyxcbiAgICAgIDE2OCxcbiAgICAgIDIwOCxcbiAgICAgIDEzOCxcbiAgICAgIDE5NixcbiAgICAgIDMwLFxuICAgICAgMTM5LFxuICAgICAgMTM4LFxuICAgICAgMTc1LFxuICAgICAgODYsXG4gICAgICA3MyxcbiAgICAgIDI0MSxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVYVEVMNkQ4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1ODM2NDYyOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjQyMDEwMTIxNTAzMjk6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0dlbDVzQkVNZTM5Ym9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwTmxHQk1peEZ1TlpJWXE2VklnNTJkd1dJUjNwTmk0bmF3OGVsMnAwdGdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm4vUXpadENwL0tocGNES0JqaURHKzQ0ZTk4YmI1eDZObDlrMkFlQTM3YjlObFZLZWJMTzFITnMweENkNDVEWjYzNUgwb3FDUnN5TmgycnM4TTN3ZkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImE5eGJ1VnVtMS9xYzZuTFBQUlVuUk1qa2tkallJT3QyaU5paUJMeVplY3k4U0EzQ2U4RUJQUDM3ZE8yOWx1amxFWTh5VHVCUUcwMk9Pd29EY1lhV2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjU4MzY0NjI6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MTcxNTk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
