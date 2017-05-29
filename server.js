var express = require('express');
var app = express();

//El motor de vistas en express
app.set('view engine', 'pug');
//Express le indicamos donde se encuentran los archivos estaticos
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index', { title: 'Trendigram'});
});

app.get('/signup', function(req, res){
  res.render('index', { title: 'Trendigram - Registro'});
});
app.get('/signin', function(req, res){
  res.render('index', { title: 'Trendigram - Inciar Sesión'});
});

//Se escucha el servidor
app.listen(3000, function(err){
  if(err) return console.log('Hubo un error'), process.exit(1);

  console.log('Trendigram listo en http://localhost:3000/');
});
