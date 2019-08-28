//Spotify Access Token
let spotifyToken =
"BQDV3hFl-j6tXxocjtKREehMdMzf0rWiVOEf_i820XCsHdfhKZ-sy1xAuNZcBRhuk8jTtJwRGiWJ6oV8cSl2w5iwJyFGqlnHtXIPrbEkoClzVpZK3fjBYvChR_mLQlt9DW34SUuh2fIbkrJKJIX86XYXplPkVxgepbWBTRWK9iphnM5JA9Kv4rr0";



  
// //function to check if an element is empty
// function isEmpty(element) {
//   return !$.trim(element.html());
// }

// //create the webplayback sdl
// window.onSpotifyWebPlaybackSDKReady = () => {
//   const player = new Spotify.Player({
//     name: "Web Playback SDK Quick Start Player",
//     getOAuthToken: cb => {
//       cb(spotifyToken);
//     }
//   });

//   // Error handling
//   player.addListener("initialization_error", ({
//     message
//   }) => {
//     console.error(message);
//   });
//   player.addListener("authentication_error", ({
//     message
//   }) => {
//     console.error(message);
//   });
//   player.addListener("account_error", ({
//     message
//   }) => {
//     console.error(message);
//   });
//   player.addListener("playback_error", ({
//     message
//   }) => {
//     console.error(message);
//   });

//   // Playback status updates
//   player.addListener("player_state_changed", state => {
//     console.log(state);
//   });

//   // Ready
//   player.addListener("ready", ({
//     device_id
//   }) => {
//     console.log("Ready with Device ID", device_id);
//   });

//   // Not Ready
//   player.addListener("not_ready", ({
//     device_id
//   }) => {
//     console.log("Device ID has gone offline", device_id);
//   });

//   //when the user clicks the track they want to play
//   $(document).on("click", ".apiPlayTrack", function () {
//     let play = ({
//       spotify_uri,
//       playerInstance: {
//         _options: {
//           getOAuthToken
//         }
//       }
//     }) => {
//       //fetch request
//       getOAuthToken(access_token => {
//         fetch(`https://api.spotify.com/v1/me/player/play`, {
//           method: "PUT",
//           body: JSON.stringify({
//             uris: [spotify_uri]
//           }),
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + spotifyToken
//           }
//         });
//       });
//     };

//     //play the song in the sdk
//     play({
//       playerInstance: player,
//       spotify_uri: "spotify:track:" + $(this).data("request")
//     });

//     //set the track the user selected to a variable
//     let playerTrack = $(this).data("track");

//     // shorten the lenfth of the song in the player if too long
//     if (playerTrack.length > 25) {
//       playerTrack = playerTrack.substring(0, 25) + "...";
//     } else {
//       playerTrack === playerTrack;
//     }

//     //grab duration of the song and increase slightly to control scroll animation
//     let duration = $(this).data("duration");
//     duration = parseInt(duration) * 1.3;
//     console.log(duration);

//     songSearch = $(this)
//       .data("track")
//       .replace(/[.,\/#!$%\"^&\*;:{}=\-_`~()]/g, "");

    

//   // Connect to the player!
//   player.connect();

//   //play on click
//   $(".play").on("click", function () {
//     player.resume().then(() => {
//       console.log("Resumed!");
//     });
//   });

//   //pause on click
//   $(".pause").on("click", function () {
//     player.pause().then(() => {
//       console.log("Paused!");
//     });
//   });
// };

// // when the user searches
// $(document).on("click", "#searchButton", function (event) {
//   //change the max height of the lyrics div
//   $("#lyrics").css("max-height", "");
//   event.preventDefault();
//   //grab the user input
//   let query = $("#searchInput")
//     .val()
//     .trim()
//     .replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()]/g, "");
//   $("#searchInput").val("");
//   console.log(query);
//   $.ajax({
//     type: "GET",
//     url: "https://api.spotify.com/v1/search?q=" + query + "&type=track&limit=3",
//     headers: {
//       Authorization: "Bearer " + spotifyToken
//     }
//   }).done(function (res) {
//     console.log(res);
//         //adding image and buttons
//     $("#spotify").append(
//       $("<div>")
//       .addClass("searchResult animated slideInUp")
//       .append("<img src='" + res.tracks.items[0].album.images[1].url + "'>")
//       .append(
//         $("<button>")
//         .addClass("controlButton apiPlayTrack")
//         .attr("data-artist", res.tracks.items[0].artists[0].name)
//         .attr("data-track", res.tracks.items[0].name)
//         .attr("data-cover", res.tracks.items[0].album.images[2].url)
//         .attr("data-request", res.tracks.items[0].id)
//         .attr("data-duration", res.tracks.items[0].duration_ms)
//         .append("<i>")
//         .addClass("far fa-play-circle fa-4x")
//       )
//       .append(
//         $("<button>")
//         .addClass("controlButton favouriteButton")
//         .append("<i>")
//         .attr("data-artist", res.tracks.items[0].artists[0].name)
//         .attr("data-track", res.tracks.items[0].name)
//         .attr("data-request", res.tracks.items[0].id)
//         .addClass("far fa-heart fa-4x")
//       )
//       .append(
//         "<span class='playTrack'>" + res.tracks.items[0].name + "</span>"
//       )
//       .append(
//         "<span class='playArtist'>" +
//         res.tracks.items[0].artists[0].name +
//         "</span>"
//       )
//     };