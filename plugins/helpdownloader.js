/*
   Coded by amal-dx
*/
let handler = async m => m.reply(`
πDownloader command π


π *Command :* ytmp3 (url)
*Usage :* Downloads Audio of yt video
*Alternative :* yta , mp3

π *Command :* ytmp4 (url)
*Usage :* Downloads YT video
*Alternative :* ytv

π *Command :* ytsearch
*Usage :* Search YouTube videos 
*alternative :* yts

π *Command :* fb (url)
*Usage :* Facebook downloader 

π *Command :* ig (url)
*Usage :* Instagram dl

π *Command :* ighighlight [username]
*Usage :* Downloads insta. highlight story

π *Command :* igstalk [username]
*Usage :* Stalk

π *Command :* igstory [username]
*Usage :* insta story dl

π *Command :* play [query]
*Usage :* plays a song

π *Command :* play2 [query]
*Usage :* plays a song


`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-3|downloader|download)$/i
module.exports = handler
