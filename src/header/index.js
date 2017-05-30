let yo = require('yo-yo');
let translate = require('../translate');
let empty = require('empty-element')

let el = yo`<nav class="header">
    <div class="nav-wrapper">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 offset-m1">
            <a href="/" class="brand-logo trendigram">Trendigram</a>
          </div>
          <div class="col s2 m6 push-s10 push-m10">
            <a herf="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <ul id="drop-user" class="dropdown-content">
              <li><a href="#">${translate.message('logout')}</a></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  </nav>`;

module.exports = function header(ctx, next){
  let container = document.getElementById('header-container');
  empty(container).appendChild(el);
  next();
}
