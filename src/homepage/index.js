const page = require('page');

page('/', function(ctx, next){
  const main = document.getElementById('main-container');
  main.innerHTML = '<a href="/signup">Signup</a>'
})
