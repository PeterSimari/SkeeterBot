

module.exports = function (msg) {
    var d = new Date();
    if (d.getDay() === 3) {
        if (msg.author.username === "loaf" || msg.author.username === "petis") {
            console.log(`Wednesday triggered by ${msg.author.username}`);
            msg.channel.send(`https://media.tenor.com/ATYLM3TJsykAAAAC/ahhhh-its-wednesday-my-dudes.gif`);
            msg.channel.send(`https://gfycat.com/comfortablelamebangeltiger-bandwagon-normie-4chan-movie-shrek-dank`);
        }
    }
}