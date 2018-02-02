
var keysLink = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require("request");
var moment = require('moment');
var fs = require("fs");

var argTwo = process.argv.slice(3).join(" ");
var twitterTweetCount = process.argv[3] || 20;
var tweetText;
var randomTweet = randomTweetArray [Math.floor(Math.random()
  * randomTweetArray.length)];
  var waitForTweet = 0;

  var randomTweetArray = ["hello", "this is a test", "lol"];
  function writeThis (textArg) {
    fs.appendFile('log.txt', textArg, function (err) {
      if (err) {
        console.log(err);
      }
    });
  };
  
  function liriOutputs () {
    let argOne = process.argv[2];
    if (argOne === "my-tweets") {
      myTweets();
    }
    else if (argOne === "tweet-this") {
      tweetThis();

    }
    else if (argOne === "spotify-this-song") {
      spotifyThis();
    }
    else if (argOne === "movie-this") {
      movieRequest();
    }
    else if (argOne === "do-what-it-says") {
      readFromTxt();
    }
    else {
      console.log("Not a valid command.  Try again.");
    }
  };

  function myTweets () {
    let client = new Twitter(keysLink.twitKeys);
    let params = {screen_name: 'ryrycodes', count: twitterTweetCount};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        
        let tweetData = tweets;
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
        if (waitForTweet === 1) {
          console.log("");
        }
        else {
        console.log("Review the log.txt file to see a log of your actions");
      }
      }
    });
  };
 d
  liriOutputs ();

  function tweetThis () {
    let T = new Twitter(keysLink.twitKeys);
    let status = argTwo || randomTweet
    let tweet = {
      status: (status) }
      T.post('statuses/update', tweet, tweeted)
      function tweeted(err, data, response) {
        if(err){
          console.log(err);
          console.log("Something went wrong! Maybe try adding in text for your tweet.");
        }
        else{
          console.log("Your tweet went through!  It has been posted to @scriptscrawler's feed.");
          console.log("Tweet: " + status);
          writeThis("\nThis entry was entered: " + moment().format('MMMM Do YYYY, h:mm:ss a') + "\n");
          writeThis("Account name Tweeted From: @scriptscrawler\n Tweet: " + status + "\n");
          if (waitForTweet === 1) {
            console.log("");
          }
          else {
          console.log("Review the log.txt file to see a log of your actions");
        }
          if (waitForTweet === 1) {
            twitterTweetCount = 1;
            liriOutputs("my-tweets");

            twitterTweetCount = process.argv[3] || 20;
          }
        }
      }
    };
    
    function spotifyThis () {
      let spotify = new Spotify(keysLink.spotty);
      spotify.search({ type: 'track', query: (argTwo || "Ace of Base The Sign") }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        else {
          let entireObject = data;
          writeThis("\nThis entry was entered: " + moment().format('MMMM Do YYYY, h:mm:ss a') + "\n");
          console.log("Your Music Selection: ");
          writeThis("Your Music Selection: \n");
          for (var outside in data) {
            var data = (data[outside].items)[0];
            console.log("Artist: " + data.artists[0].name);
            writeThis("Artist: " + data.artists[0].name + "\n");
            console.log("Album: " + data.album.name);
            writeThis("Album: " + data.album.name + "\n");
            console.log("Song Name: " + data.name);
            writeThis("Song Name: " + data.name + "\n");
            if (!(data.preview_url === null)) {
              console.log("Link to Preview: " + data.preview_url);
              writeThis("Link to Preview: " + data.preview_url + "\n");
            }
            console.log("Popularity Rating: " + data.popularity);
            writeThis("Popularity Rating: " + data.popularity + "\n");
            if (waitForTweet === 1) {
              console.log("Review the log.txt file to see a log of your actions");
            }
            else {
            console.log("Review the log.txt file to see a log of your actions");
          }


          };

        }
      });

    };
    // This section controls movie requests
    function movieRequest () {
      searchCrit = argTwo || "Mr.+Nobody";
      request('http://www.omdbapi.com/?apikey=40e9cece&t=' + searchCrit + `&tomatoes=true`, function (error, response, body) {
        let movieObj = JSON.parse(body);
        if (movieObj.Title === undefined && movieObj.Plot === undefined) {
          console.log("Try a different title.");
        }
        else {
          writeThis("\nThis entry was entered: " + moment().format('MMMM Do YYYY, h:mm:ss a') + "\n");
          console.log("Your movie Selection: ");
          writeThis("Your movie Selection: \n");
          console.log("Title: " + movieObj.Title);
          writeThis("Title: " + movieObj.Title + "\n");
          console.log("Year: " + movieObj.Year);
          writeThis("Year: " + movieObj.Year + "\n");
          console.log("Rating: " + movieObj.Rated);
          writeThis("Rating: " + movieObj.Rated + "\n");
          console.log("Country Produced In: " + movieObj.Country);
          writeThis("Country Produced In: " + movieObj.Country + "\n");
          console.log("Language: " + movieObj.Language);
          writeThis("Language: " + movieObj.Language + "\n");
          console.log("Plot: " + movieObj.Plot);
          writeThis("Plot: " + movieObj.Plot + "\n");
          console.log("Actors/Actresses: " + movieObj.Actors);
          writeThis("Actors/Actresses: " + movieObj.Actors + "\n");
          console.log("Rotten Tomatoes URL: " + movieObj.tomatoURL);
          writeThis("Rotten Tomatoes URL: " + movieObj.tomatoURL + "\n");
          if (waitForTweet === 1) {
            console.log("");
          }
          else {
          console.log("Review the log.txt file to see a log of your actions");
        }
        }
      });

    };

    
    function readFromTxt () {
      waitForTweet = 1;
      fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
          return console.log(err);
        }
        else {
          textArr = []
          textArr = data.split(", ");
          
          argTwo = textArr[1].trim();
          argTwo = argTwo.replace(/["]+/g, '');
          liriOutputs(textArr[0].trim());
          argTwo = textArr[3].trim();
          argTwo = argTwo.replace(/["]+/g, '');
          whatToShow(textArr[2].trim());
          argTwo = randomTweet;
          whatToShow(textArr[4].trim());
        }
      });

    };