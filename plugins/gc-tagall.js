let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `⟶𝐌𝐞𝐬𝐬𝐚𝐠𝐞: ${pesan}`
let teks = `🗨⟶𝗥𝗲𝘃𝗶𝘃𝗮𝗻 𝗚𝗼𝗿𝗱𝗮𝘀⏤𝒕𝒆𝒏𝒆𝒎𝒐𝒔 𝒗𝒆𝒓𝒔𝒖! \n\n❏ ${oi}\n❏  ⟶𝐄𝐭𝐢𝐪𝐮𝐞𝐓𝐬: \n`
for (let mem of participants) {
teks += `ꪎ💎 @${mem.id.split('@')[0]}\n`}
teks += `➥𝑿𝒊𝒂𝒏𝑻⏤𝑩𝒐𝒕`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
