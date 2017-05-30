var yo = require('yo-yo');

module.exports = function (pic){
     return yo `<div class="card">
                   <div class="card-image">
                     <img class="activator" src="${pic.url}">
                   </div>
                   <div class="card-content">
                     <a href="/${pic.user.username}" class="card-title">
                       <img src="${pic.user.avatar}" class="avatar left" alt="img-user">
                       <span class="username">${pic.user.username}</span>
                     </a>
                     <small class="right time">Hace 1 dia</small>
                     <p>
                       <a class="left" href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                       <span class="left likes">${pic.likes} me gusta</span>
                     </p>
                   </div>
               </div>`;
}
