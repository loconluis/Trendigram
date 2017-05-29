var yo = require('yo-yo');
//landing el template de la imagen
var landing = require('../landing')

//template del formulario
var signinBox = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="trendigram">Trendigram</h1>
      <form class="signup-form">
        <div class="section">
          <a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
          <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar Sesión</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="text" name="username" placeholder="Nombre de Usuario">
          <input type="password" name="password" placeholder="Contraseña">
          <button type="submit" class="btn waves-effect waves-light btn-signup" name="button">Inicia Sesion</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿No tienes una cuena? <a href="/signup">Regístrate</a>
    </div>
  </div>
</div>`;

module.exports = landing(signinBox);
