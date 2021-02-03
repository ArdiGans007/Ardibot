let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [088235435804]
│ • Telkomsel [085282996146]
│ • Gopay [081357302007]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285282996146
 Power By ArdiGans YT
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
