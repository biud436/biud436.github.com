// The client ID is obtained from the Google API Console
// at https://console.developers.google.com/.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
var OAUTH2_CLIENT_ID = '482677543982-s375a4hcr0ldi3bbg3tcpegmhmifa4dc.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
}

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
    }, handleAuthResult);
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}

// Define some variables used to remember state.
var playlistId, nextPageToken, prevPageToken;

// After the API loads, call a function to get the uploads playlist ID.
function handleAPILoaded() {
  requestUserUploadsPlaylistId();
}

// Call the Data API to retrieve the playlist ID that uniquely identifies the
// list of videos uploaded to the currently authenticated user's channel.
function requestUserUploadsPlaylistId() {
    // See https://developers.google.com/youtube/v3/docs/channels/list
    var request = gapi.client.youtube.channels.list({
      mine: true,
      part: 'contentDetails'
    });
    request.execute(function(response) {
      playlistId = response.result.items[0].contentDetails.relatedPlaylists.uploads;
      requestVideoPlaylist(playlistId);
    });
  }

  // Retrieve the list of videos in the specified playlist.
function requestVideoPlaylist(playlistId, pageToken) {
    var requestOptions = {
      playlistId: playlistId,
      part: 'snippet',
      maxResults: 10
    };
    if (pageToken) {
      requestOptions.pageToken = pageToken;
    }
    var request = gapi.client.youtube.playlistItems.list(requestOptions);
    request.execute(function(response) {
      // Only show pagination buttons if there is a pagination token for the
      // next or previous page of results.
      nextPageToken = response.result.nextPageToken;
      prevPageToken = response.result.prevPageToken
  
      var playlistItems = response.result.items;
      if (playlistItems) {
        playlistItems.forEach(item => {
            displayResult(item.snippet);
        })

      } else {
       
      }
    });
  }
  
  // Create a listing for a video.
  function displayResult(videoSnippet) {
    var title = videoSnippet.title;
    var videoId = videoSnippet.resourceId.videoId;
    console.log(videoSnippet);
  }
  
  // Retrieve the next page of videos in the playlist.
  function nextPage() {
    requestVideoPlaylist(playlistId, nextPageToken);
  }
  
  // Retrieve the previous page of videos in the playlist.
  function previousPage() {
    requestVideoPlaylist(playlistId, prevPageToken);
  }