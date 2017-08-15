const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user.js')
require('./services/passport')

const keys = require('./config/keys')
const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongoURI);
//Generate a express application
const app = express();
app.use(
	cookieSession({
		maxAge: 30 * 24 * 6 * 60 * 1000,
		keys: [keys.cookieKey]

	})
);

app.use(passport.initialize());
app.use(passport.session())

//clientId 360784595279-ej1hr5gc4utpglq16u0kp3qq3l5em4aa.apps.googleusercontent.com
//clientSecret g6VdBqmeS829KrUqlLfhOiMU
authRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

