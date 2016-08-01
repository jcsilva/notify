var fs = require('fs');
var Parse = require('parse/node');

// Public parse keys
Parse.initialize(
  'T5rfG0KnZ2t7RCm1EcqKstuPqrt0RmfAz3Upcq9a',  // app id
  'ciKBKGafsYh7BgjfnbB332Fj7AY7l1t18HmewFLm'   // js key
);

Parse.serverURL = 'https://parseapi.back4app.com'

var getUserHome = function() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
};

module.exports = function(text) {
  // Fetch registration token
  var key = fs.readFileSync(getUserHome() + '/.notifyreg', {encoding: 'utf8'});

  Parse.Cloud.run('notify', {key: key, text: text}).then(function() {
    console.log('[notify] Successfully sent notification.');
  }, function(error) {
    console.log('[notify] Encountered an error:', error);
  });
};
