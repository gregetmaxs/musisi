const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
const websiteSettings = require("../../dashboard/settings.json");
module.exports = {
  name: "mixlist", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "mixlist",
  aliases: ["mixl", "mixli", "mixlis", "mixlist"],

  cooldown: 1, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Sends a Mix List", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
    try {
      message.reply({
        embeds: [
          new MessageEmbed()
          .setColor(ee.color)
          .setTitle(`Mix Playlist Available :`)
          .setDescription(`You can also request to add your playlist to the bot.\nJoin official discord and contact me\n[**Click Here to Join Official Discord!**](https://bit.ly/3EpuzHR)`)
          .addField("1. pop", "(Spotify)", true)
          .addField("10. ncs", "(Spotify)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("2. blues", "(Spotify)", true)
          .addField("11. remixes", "(Spotify)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("3. chill", "(Spotify)", true)
          .addField("12. oldgaming", "(Youtube)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("4. default", "(Spotify)", true)
          .addField("13. charts", "(Youtube)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("5. heavymetal", "(Spotify)", true)
          .addField("14. magic release", "(Youtube)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("6. gaming", "(Spotify)", true)
          .addField("15. thefatrat", "(Youtube)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("7. jazz", "(Spotify)", true)
          .addField("16. random", "(Youtube)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("8. metal", "(Spotify)", true)
          .addField("17. cooming soon", "(Youtube)", true)
          .addField("\u200b", `\u200b`, true)
          .addField("9. rock", "(spotify)", true)
          .addField("18. cooming soon", "(Youtube)", true)
          .addField("\u200b", `\u200b`, true)
          .setImage(`https://media.discordapp.net/attachments/776782742058696724/888256031891808328/PicsArt_09-17-09.52.13.gif`)
          .setFooter(`To Use Command, type: s?mix [MixList CMD NAME]`, ee.footericon)
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}