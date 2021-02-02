let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *ArdiGans*

Ketik di *[TERMUX]*
1) $termux-setup-storage
2) $pkg install ffmpeg && pkg install imagemagick
3) $cd /sdcard/Botku
4) $node index.js

_Bisa kalian liat tutorialnya di_
*Youtube kami:*
https://www.youtube.com/c/ArdiGans YT
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

