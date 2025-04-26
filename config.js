require('dotenv').config(); 
SESSION_ID={"noiseKey":{"private":{"type":"Buffer","data":"MFF2p/ZP+AsYfGfryDfAmiAPU2GOuKn6nozOZwbJR18="},"public":{"type":"Buffer","data":"VPOtkKIGT4lh/Fmjf0xI3LLQu3Z7kyeoIQUIXrs8wgE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GFsUakpd+nulGCHWEVftZEy0/pKrVb9auZk7CO2Ipko="},"public":{"type":"Buffer","data":"B7bAktevl7UsUc57Hc0ZVx1gsiRg7v/aVnK3ETI2OQk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"gPY0eOv7fic5yGYqwQvkHtsFiqznuCoCcv+K1pAJjXc="},"public":{"type":"Buffer","data":"0WY1AqNIy7EBSwnapuBi5vBmFFiMLW3q/yZbP2zP5DU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"ONqhOjJtoLaCjJ6sF559IqtA+rbhVhEx8Lw2EwQr4H4="},"public":{"type":"Buffer","data":"h/fGTQGUh4Nl07Viz42KAu1/s2fe49m1BCMfblDPB3U="}},"signature":{"type":"Buffer","data":"5sTGwZTGsevXJiuX/B2ubCtd52+8QDcW4v8ZZ+HmYPstVfssj9oStVuoRXUFIQvgk0dLHP1r3UTCVSAqm3F4jw=="},"keyId":1},"registrationId":233,"advSecretKey":"U/ZjXdLw5Pf7cS/1qPOyPUPwellnZJ6CrK/rYWTP7LU=","processedHistoryMessages":[],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"ItAOAyDbRP-rEUPPIzL1Ug","phoneId":"fa8ece4a-a378-4dce-a8d4-a10c4a06fbc9","identityId":{"type":"Buffer","data":"JMkWJrwwP5nJKGERosFVJSdJc28="},"registered":true,"backupToken":{"type":"Buffer","data":"nIWYrAyIquLn0XO42Bwk6Ws2+BM="},"registration":{},"pairingCode":"2DZ4ADSK","me":{"id":"18295595096:9@s.whatsapp.net","name":"ßlðÐ Ððþhêmï mþk"},"account":{"details":"CKevz+EBEMLMtcAGGAIgACgA","accountSignatureKey":"uo3aGbdeNoV5xi4smerMZcfa25BA0FeFCxqielJiqCw=","accountSignature":"xP0BUPcVHQ55lljKyAYfhrn25P3eVfmpujIGsMnAYOiYhpLVziSG4LvTVga/B+IVZt5cOl4V3EhMhW95fI2DDw==","deviceSignature":"JesBz+BB0K4emsXbZe1dFaTPA7rK9PhQw5ihYo2ObLt/A07vCWzPhWXNYmTZVkpt0HkHOahjhVNq47w5d5pMiA=="},"signalIdentities":[{"identifier":{"name":"18295595096:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbqN2hm3XjaFecYuLJnqzGXH2tuQQNBXhQsaonpSYqgs"}}],"platform":"smba","lastAccountSyncTimestamp":1745708624,"myAppStateKeyId":"AAAAAHEJ"}
global.owner = process.env.OWNER_NUMBER; 
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'true'; 
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};


global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
