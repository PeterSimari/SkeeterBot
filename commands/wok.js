
module.exports = function (msg) {
    var d = new Date();
    if (msg.author.username === "petis" || msg.author.username === "PeterW") {
        logWok(msg.author.username);
        msg.channel.send("https://tenor.com/view/stirring-cooking-chef-gif-14816120");
    } else if (d.getDay() === 2) {
        logWok(msg.author.username);
        msg.channel.send("https://tenor.com/view/stirring-cooking-chef-gif-14816120");
    }
}

function logWok(name) {
    console.log(`Wok triggered by ${name}`);
}