/*
   Coded by amal-dx
*/
let handler = async m => m.reply(`
*βΏ DXTROX-v2 Whatsapp bot πΈ*
   *Developed by Amal*


πΌ *Here's Command Menu* πΌ
ποΈ *you can go to Each Section With adding Section's number after help* 

*Ex :* #help 1



π  *HELP SECTION 1* π
*π«Section - General* 
*Command :* help-1
*Aliases :* help sticker


π  *HELP SECTION 2* π
*π«Section - Sticker* 
*Command :* help-2

π  *HELP SECTION 3* π
π« *Section - Downloader* 
*Command :* help-3
*Aliases :* help media

π  *HELP SECTION 4* π
π« *Section - owner* 
*Command :* help-4
*Aliases :* help owner


π  *HELP SECTION 5* π
π« *Section - Admins* 
*Command :* help-5
*Aliases :* help admin

π  *HELP SECTION 6* π
π«Section - info
*Command :* help-6
*Aliases :* help info


`.trim()) // Tambah sendiri kalo mau
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^help$/i
// handler.customPrefix = /^.*help ?1$/i

module.exports = handler
