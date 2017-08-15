// keys.js -- figure out waht set of creds to return

if (process.env.NODE_ENV === 'production') {
// in prod -- return the prod set of keys
module.exports = require('./prod');

} else {
// in dev -- return the dev keys
	module.exports = require('./dev');
}