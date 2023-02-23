// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token, testChannelID, prodChannelID } = require('./config.json');
// const { jsonDB } = require ('./dbFunctions.js');
const cron = require ('node-cron');
const commandHandler = require('./command');
const { getRandomGif } = require("./commands/gif.js");

const client = new Discord.Client();
client.login(token)

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log(`Hello, now logged in as ${client.user.tag}`);
}

client.on("message", commandHandler);


// All of these are schedules
// Figuring out times isn't easy! Take this: https://crontab.guru/
cron.schedule('0 9-23 * * TUE', () => {
  const channel = client.channels.cache.get(prodChannelID);
  if (channel) {
    getRandomGif("skeeter", channel);
  }
}, {
  scheduled: true,
  timezone: 'EST'
});

cron.schedule('0 8-23 28 JAN *', () => {
  const channel = client.channels.cache.get(prodChannelID);
  if (channel) {
    channel.send('https://cdn.discordapp.com/attachments/715369811693010947/1076257511839125635/9B4E4CE0-0DA8-4C4D-A1F0-9D10FAD79850.gif');
  }
}, {
  scheduled: true,
  timezone: 'EST'
});


/// TESTING TESTING TESTING
// cron.schedule('* * * * WED', () => {
//   const channel = client.channels.cache.get(testChannelID);
//   if (channel) {
//     getRandomGif("skeeter", channel);
//   }
// }, {
//   scheduled: true,
//   timezone: 'EST'
// });



// function triggerGifTuesday(channel) {
//   channel.send(`:slight_smile: It is Gif Tuesday, ${getDate()}. :slight_smile:`);
//   channel.send('https://cdn.discordapp.com/attachments/438083460997840899/1075961717516939304/39495EB2-3B43-448A-AA2D-3EB82FA53F9D.gif');
//   getGif(channel, "have a great day");
// }

// cron.schedule('30 7 * * TUE', () => {
//   const channel = client.channels.cache.get(prodChannelID);
//   if (channel) {
//     triggerGifTuesday(channel);
//   }
// }, {
//   scheduled: true,
//   timezone: 'EST'
// })



// client.on(Events.MessageReactionAdd, async (reaction, user) => {
//   if (reaction.partial) {
//     try {
// 			await reaction.fetch();
// 		} catch (error) {
// 			console.error('Something went wrong when fetching the message:', error);
// 			// Return as `reaction.message.author` may be undefined/null
// 			return;
// 		}
//   }
//   // define channel we want to send our messages to
//   const channel = await client.channels.fetch(prodChannelID);

//   if (reaction.count >= 1) {
//     console.log(`@${reaction.message.author.tag}'s message "${reaction.message.content}" gained a reaction!`);
//     await channel.send(`@${reaction.message.author.tag}'s message "${reaction.message.content}" gained a reaction!`)
//     var messageJSON = {
//       messageID: reaction.message.id,
//       author: reaction.message.author.tag,
//       message: reaction.message.content,
//       timeStamp: reaction.message.createdTimestamp
      
//     };
//     jsonDB.writeDb(messageJSON)
//     console.log(message)
//   }
//   console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
// });
