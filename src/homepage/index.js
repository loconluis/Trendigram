const page = require('page');
const empty = require('empty-element');
const template = require('./template');
const title = require('title');

page('/', function(ctx, next){
  title('Trendigram');
  const main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
