const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["caseyrhodes","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 SIGMA-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs  SIGMA-MD -ʙᴏᴛ*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ :  SIGMA-MD s*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴍ ᴀᴡᴀɪs*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴀᴡᴀɪs xᴅ*
*┃★│* *ᴀɢᴇ : 18 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢SIGMA-MD *
*┃★│* *▢CHATGPT(OPENAI)*
*┃★│* *▢HACKLINK(ᴅᴀʀᴋ ᴅᴇᴠɪʟ⁷¹⁹)*
*┃★│* *▢SKY(TECH GENIOUS)*
*┃★│* *▢NICKY(MAESTRO)*
*┃★│* *▢LENOVO THINCENTRE*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ  SIGMA-MD ₂₅₄
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://i.ibb.co/m5Bcq64y/caseyrhodes-tech.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363302677217436@newsletter',
      newsletterName: 'CASEYRHODES-XMD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
