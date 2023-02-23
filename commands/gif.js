const { tenorKey } = require('../config.json');
const randomWords = require('random-words');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports =  { gif , getRandomGif };

async function gif(msg, args) {
    var d = new Date();
    if (d.getDay() === 2 || msg.author.username === 'petis') {
        if (args != "") {
            getGif(sender, msg.channel, args);
        } else {
            getRandomGif(sender, msg.channel);
        }
    }
}

async function getGif(user, chan, args) {
    url = `https://tenor.googleapis.com/v2/search?q=${args}&key=${tenorKey}&client_key=my_test_app&ContentFilter=off`

    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    if (index < 1) {
        chan.send(`No gifs found for: ${args} :pensive:`);
    } else {
        logGif(`User: ${user}`, getDate(), args);
        chan.send(json.results[index].url);
    }
}

function getRandomGif(trigger, chan) {
    strong = randomWords({ exactly: 2, join: ' ' });
    getGif(trigger, chan, strong);
}
  
function logGif(who, date, msg) {
    console.log(who + ", " + date + ", " + msg);
}

function getDate() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
}


