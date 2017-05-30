let yo = require('yo-yo');
let translate = require('../translate');

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
                    <small class="right time">${translate.date.format(picture.createdAt)}</small>
                    <p>
                      <a href="#" class="left" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                      <a href="#" class="left" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
                      <span class="left likes">${translate.message('likes', { likes: picture.likes})}</span>
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
