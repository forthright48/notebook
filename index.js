const express = require('express');

const app = express();
const server = require('http').createServer(app);

app.set('port', 8002);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('*', function(req, res) {
  return res.status(404).send('Page not found\n');
});

if (require.main === module) {
  server.listen(app.get('port'), function() {
    console.log(`Server running at port ${app.get('port')}`);
  });
} else {
  module.exports = {
    server,
    app
  };
}
