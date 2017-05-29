var yo = require('yo-yo');
//landing el template de la imagen
var landing = require('../landing')

//template del formulario
var signupBox = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="trendigram">Trendigram</h1>
      <form class="signup-form">
        <h2>Registrate para ver fotos de tus amigos en Trending</h2>
        <div class="section">
          <a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
          <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i>
Iniciar Sesión</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder="Correo Electronico">
          <input type="text" name="name" placeholder="Nombre Completo">
          <input type="text" name="username" placeholder="Nombre de Usuario">
          <input type="password" name="password" placeholder="Contraseña">
          <button type="submit" class="btn waves-effect waves-light btn-signup" name="button">Registrate</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿Tienes una cuena? <a href="/signin">Entrar</a>
    </div>
  </div>
</div>`;

module.exports = landing(signupBox);