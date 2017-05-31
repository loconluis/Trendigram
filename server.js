var express = require('express');
var app = express();
//Libreria para la carga de archivos MULTER en NPM
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now()+'.'+ext(file.originalname))
  }
})
//storage donde se guardan las imagenes
var upload = multer({ storage: storage }).single('picture')


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

app.get('/api/pictures', function(req, res){
  var pictures = [
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 45,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-10)
    },
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: false,
      createdAt: new Date().getTime()
    }
  ];
  setTimeout(function(){
    res.send(pictures);
  }, 2000)
});

//Ruta donde se suben las fotos
app.post('/api/pictures', function(req, res){
  upload(req, res, function(err){
    if(err){return res.send(500, 'ERROR uploading file');}

    res.send('File Uploaded')
  })
})

//Se escucha el servidor
app.listen(3000, function(err){
  if(err) return console.log('Hubo un error'), process.exit(1);

  console.log('Trendigram listo en http://localhost:3000/');
});
