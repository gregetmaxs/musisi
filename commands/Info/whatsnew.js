const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
const websiteSettings = require("../../dashboard/settings.json");
module.exports = {
  name: "whatsnew", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "whatsnew",
  aliases: ["what", "wn", "wha", "whats", "whatsn", "whatsne", "whatsnew", "whanew"],

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
          .setTitle(`New Updated 25 Sept 2021`)
          .setDescription(`:white_check_mark: | Fixed Not Showing Button`)
          .setImage(`https://media.discordapp.net/attachments/776782742058696724/888256031891808328/PicsArt_09-17-09.52.13.gif`)
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}