const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js')

//Generate a express application
const app = express();

//clientId 360784595279-ej1hr5gc4utpglq16u0kp3qq3l5em4aa.apps.googleusercontent.com
//clientSecret g6VdBqmeS829KrUqlLfhOiMU
passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback'
	}, 
	(accessToken, refreshToken, profile, done) =>{
		console.log("accessToken", accessToken);
		console.log("refreshToken", refreshToken);
		console.log("profile",profile);
		console.log("done:",done);

	})
);

app.get('/auth/google', passport.authenticate('google', {
	scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);

