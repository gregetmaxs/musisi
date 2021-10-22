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
          .setDescription(`You can also request to add your playlist to the bot.\nJoin official discord and contact me\n[**Click Here to Join Official Discord!**](https://bit.ly/3EpuzHR)\n\n1. pop (Spotify)\n2. blues (Spotify)\n3. chill (Spotify)\n4. default (Spotify)\n5. heavymetal (Spotify)\n6. gaming (Spotify)\n7. jazz (Spotify)\n8. metal (Spotify)\n9. rock (Spotify)\n10. ncs (Spotify)\n11. remixes (Spotify)\n12. oldgaming (Youtube)\n13. charts (Youtube)\n14. magic release (Youtube)\n15. thefatrat (Youtube)\n16. random (Youtube)`)
          .setImage(`https://media.discordapp.net/attachments/776782742058696724/888256031891808328/PicsArt_09-17-09.52.13.gif`)
          .setFooter(`To Use Command, type: s?mix [MixList CMD NAME]`, ee.footericon)
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}