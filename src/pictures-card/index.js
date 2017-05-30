let yo = require('yo-yo');
//Libreria soportada por la mayoria excepto safari, se lo asignamos a safari
if (!window.Intl) {
   window.Intl = require('intl'); // polyfill for `Intl`
   require('intl/locale-data/jsonp/en-US.js')
   require('intl/locale-data/jsonp/es.js')
}
//Para formatear fechas
let IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

let rf = new IntlRelativeFormat('es');

module.exports = function pictureCard(pic){
  let el;

  function render(picture){
    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
                  <div class="card-image">
                    <img class="activator" src="${picture.url}">
                  </div>
                  <div class="card-content">
                    <a href="/${picture.user.username}" class="card-title">
                      <img src="${picture.user.avatar}" class="avatar left" alt="img-user">
                      <span class="username">${picture.user.username}</span>
                    </a>
                    <small class="right time">${rf.format(picture.createdAt)}</small>
                    <p>
                      <a href="#" class="left" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                      <a href="#" class="left" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
                      <span class="left likes">${picture.likes} me gusta</span>
                    </p>
                  </div>
              </div>`;
  }

  //funcion de like
  function like(liked){
      pic.liked = liked;
      pic.likes+= liked ? 1 : -1;
      let newEl = render(pic);
      yo.update(el, newEl);
      return false;
  }

  el = render(pic);
  return el;
}
