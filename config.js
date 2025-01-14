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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_43_01_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMyLFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuSUVmRzhpRkNrNHpYaEVpb1lFSmVDT1J0ck9pLzBDb3ZxS3lmSjM4SkZ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvX2N4VnFFZ1NiSzFiSHJQdjI2VVF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyYmY5ZGZkLTA0NjktNDgyNS1iZTM4LTJmNDMwMDA3YTc3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDEzOSxcbiAgICAgIDE1NixcbiAgICAgIDIxNSxcbiAgICAgIDExMCxcbiAgICAgIDY1LFxuICAgICAgMTg0LFxuICAgICAgMjMzLFxuICAgICAgMTk1LFxuICAgICAgMzIsXG4gICAgICAyNTEsXG4gICAgICAyOSxcbiAgICAgIDM0LFxuICAgICAgMjEzLFxuICAgICAgMjE3LFxuICAgICAgMTExLFxuICAgICAgNTEsXG4gICAgICAyMjksXG4gICAgICAxOTQsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxODIsXG4gICAgICAyMjEsXG4gICAgICAxNDQsXG4gICAgICAxMDYsXG4gICAgICAxODMsXG4gICAgICAxODAsXG4gICAgICAxNjAsXG4gICAgICAyNDEsXG4gICAgICAyMyxcbiAgICAgIDIwLFxuICAgICAgNDYsXG4gICAgICAyMDgsXG4gICAgICAxNjIsXG4gICAgICAxNTksXG4gICAgICA3LFxuICAgICAgOTIsXG4gICAgICAxODIsXG4gICAgICAxMjYsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUSjVERDhBSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwODY1MTQwNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDkxNDQxMDM2MjQ3ODQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaTZ1YlFFRUpEUm03d0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFqOGgvQTgwNHI4aEhuT3d1NS9WbWdxakpzOEUrSytjT3A3aXVGR1p6Z1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOFM5UFYyL2xla2ZGQmJROWJncFB2UU5LM1BOeGhzWk02ZVlrSzQ2VnZzdU45NmppOXZiZjV5aXQwclhpeUVIaXNvQVhqdE5jY21iYXIzdmdIMHR5RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1oxOWhLOEIzWHZwOFVSZDBFelFuU0ZyM1I3dzhQVUEvS3UzWTVJTWE3ME1jN1pYaDNnb0NJck9VTk05M2pzZURBUzA4Vk0zczd3UjB5amYrR21nQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwODY1MTQwNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM2ODk0NjEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlZHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGVkcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjTklJaW4xRmxsc1k0YlNQcGx4M0g2ei9PdVFONjNGNkZoSkE0NWxIZmtjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODM3MzUxNDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNjI0MjQ1OTg5MlwifSIKfQ=="  // PUT your SESSION_ID 


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
