const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=rnYWhDyY#AFP7He2n8YH_QZw1Gil2cTrWWrzLs56IRTmPqlMqjWc",
MODE: process.env.MODE || "privet",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", // true or false
BOT_NAME: process.env.BOT_NAME || "𝙲𝚁𝙰𝚆𝙻 𝙼𝙳",
AUTO_VOICE: process.env.AUTO_VOICE || "false", // true or false
AUTO_STICKER: process.env.AUTO_STICKER || "false", // true or false
AUTO_REPLY: process.env.AUTO_REPLY || "true", // true or false
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // true or false
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false", // true or false
ANTI_LINK: process.env.ANTI_LINK || "false", // true or false
ANTI_BAD: process.env.ANTI_BAD || "false",// true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "false", // true or false
AUTO_REACT: process.env.AUTO_REACT || "false", // true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true or false
FILENAME: process.env.FILENAME || "𝙲𝚁𝙰𝚆𝙻 𝙼𝙳 𝙱𝙾𝚃",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/53sJy4w/2831.jpg", 
CHANNEL_NAME: process.env.CHANNEL_NAME || "💀 𝙲𝚁𝙰𝚆𝙻 𝙼𝙳 𝙱𝙾𝚃 💀",
NEWSLETTER_ID: process.env.NEWSLETTER_ID || "120363303242803015@newsletter",
TITLE: process.env.TITLE || "𝙲𝚁𝙰𝚆𝙻 𝙼𝙳 𝙱𝙾𝚃",
BODY: process.env.BODY || "ℂℝ𝔼𝔸𝕋𝔼𝔻 𝔹𝕐 ℂℝ𝔸𝕎𝕃 📍",
WEBURL: process.env.WEBURL|| "https://github.com/Niroshan112",
BOT_IMG: process.env.BOT_IMG || "https://i.ibb.co/53sJy4w/2831.jpg"     
};
