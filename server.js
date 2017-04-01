var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./')).listen(3000, function() {
  console.log('server now listening on port 3000...');
});
