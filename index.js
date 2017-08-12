const express = require('express');
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
//Generate a express application
const app = express();

//clientId 360784595279-ej1hr5gc4utpglq16u0kp3qq3l5em4aa.apps.googleusercontent.com
//clientSecret g6VdBqmeS829KrUqlLfhOiMU
authRoutes(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

