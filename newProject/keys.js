var Twitter = require('twitter');
var fs = require("fs");
var moment = require("moment-timezone");

var argTwo = process.argv.slice(3).join(" ");
var twitterTweetCount = process.argv[3] || 20;
var tweetText;

var randomTweetArray = ["hello", "this is a test", "lol"];
  function writeThis (textArg) {
    fs.appendFile('log.txt', textArg, function (err) {
      if (err) {
        console.log(err);
      }
    });
  };

var client = new Twitter({
  consumer_key: 'JxZA3gLEVxfUIYorVOsf02gHD',
  consumer_secret: 'q3O3yitBaIeotAiY9deNxtd32EVw4zRbElxPhqhQ5kzSjhjOFH',
  access_token_key: '957717777594253312-lNuivTc5TlKH7mkPAgF3Jb1LoXw8sOZ',
  access_token_secret: 'ok1sVVEfkmdrvCPVb808ik0nOZrfeqBG9uwySkxQft4ym'
});
 
var params = {screen_name: 'ryrycodes'};
console.log('testing')
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
   let tweetData = tweets;
   console.log(tweetData.length);
        for (var i = 0; i < tweetData.length; i++) {
          writeThis("\nThis entry was entered: " + moment().format('MMMM Do YYYY, h:mm:ss a') + "\n");
          console.log("Recently Tweeted:  ");
          writeThis("Recently Tweeted:  \n");
          console.log("@" + tweetData[i].user.screen_name + " Tweeted Out:");
          writeThis("@" + tweetData[i].user.screen_name + " Tweeted Out:\n");
          console.log('"' + tweetData[i].text + '"');
          writeThis('"' + tweetData[i].text + '"\n');
          console.log("Tweeted out on: " + tweetData[i].created_at);
          writeThis("Tweeted out on: " + tweetData[i].created_at+ "\n");
          console.log("This has been retweeted " + tweetData[i].retweet_count + " times.");
          writeThis("This has been retweeted " + tweetData[i].retweet_count + " times.\n");
        }
  }
});

