Parse.Cloud.define('notify', function(request, response) {
  var key = request.params.key;

  var query = new Parse.Query(Parse.Installation);
  query.equalTo('objectId', key);

  var text = request.params.text || 'Your command is complete.';

  Parse.Push.send({
    where: query,
    data: {
      alert: text,
    },
  }, {
      useMasterKey: true,
      success: function() {
        response.success('Notification sent');
      },
      error: function() {
        response.error('Error '+error.code +': '+error.message);
      }
   });
});

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
