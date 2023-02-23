
const { gif } = require("./commands/gif.js");
const wednesday = require("./commands/wednesday.js");
const wok = require("./commands/wok.js");

const commands = { gif, wednesday, wok };
  

module.exports = async function gotMessage(msg) {
    let tokens = msg.content.split(' ');
    // Name gathering & Emoji Stripping
    // sender = msg.author.username;
    // sender.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    let command = tokens.shift();
    if (command.charAt(0) === "!") {
        command = command.substring(1);
        try {
            commands[command](msg, tokens);
        } catch (error) {
            console.log(`${msg.author.username} just tried !${command}`);
        }
        
    }
}
  
