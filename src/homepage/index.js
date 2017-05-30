const page = require('page');
const empty = require('empty-element');
const template = require('./template');
const title = require('title');
let request = require('superagent');
let header = require('../header');

page('/', header, loadPictures, function(ctx, next){
  title('Trendigram');
  const main = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));
})

//funcion que va a traer las imagenes desde el servidor
//ctx comparte datos entre los middlewares
function loadPictures(ctx, next){
  request
    .get('/api/pictures')
    .end(function(err, res){
      if(err) return console.log(err);

      ctx.pictures = res.body;
      next();
    });
}
