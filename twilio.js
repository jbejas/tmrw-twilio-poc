var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var express = require("express");
var app = express();

// Substitute your Twilio AccountSid and ApiKey details
var ACCOUNT_SID = 'ACd917247087c91a3660a8ca6977790cf2';
var API_KEY_SID = 'SKf1037a513b0e35632d2d5de97e2ec5ec';
var API_KEY_SECRET = 'mlyuPBaH0skCYmYDGHvnCzKQkM4zr4cX';
const http_port = 8080;

app.get("/token", (req, res, next) => {
  res("Silence is golden!");
});

app.get("/token", (req, res, next) => {
  // Create an Access Token
  var accessToken = new AccessToken(
    ACCOUNT_SID,
    API_KEY_SID,
    API_KEY_SECRET
  );

  // Set the Identity of this token
  accessToken.identity = 'tmrw-poc-user';

  // Grant access to Video
  var grant = new VideoGrant();
  grant.room = 'TMRW POC Room';
  accessToken.addGrant(grant);

  // Serialize the token as a JWT
  var jwt = accessToken.toJwt();
  res.json({token: jwt});
  console.log(jwt);
});

app.listen(http_port, () => {
  console.log(`Server running on port ${http_port}`);
});
