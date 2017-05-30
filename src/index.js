const page = require('page');
require('moment/locale/es');
//define la ruta para homepage
require('./homepage');
//define la ruta para signup
require('./signup');
//define la ruta para signin
require('./signin')

//inicializar page
page();
