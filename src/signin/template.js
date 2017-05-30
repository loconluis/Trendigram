let yo = require('yo-yo');
//landing el template de la imagen
let landing = require('../landing');
let translate = require('../translate');

//template del formulario
var signinBox = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="trendigram">Trendigram</h1>
      <form class="signup-form">
        <div class="section">
          <a href="" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
          <a href="" class="btn btn-fb hide-on-med-and-up">${translate.message('signup.text')}</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="text" name="username" placeholder="${translate.message('username')}">
          <input type="password" name="password" placeholder="${translate.message('password')}">
          <button type="submit" class="btn waves-effect waves-light btn-signup" name="button">${translate.message('signup.text')}</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.text')}</a>
    </div>
  </div>
</div>`;

module.exports = landing(signinBox);
