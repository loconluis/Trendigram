//Libreria soportada por la mayoria excepto safari, se lo asignamos a safari
if (!window.Intl) {
   window.Intl = require('intl'); // polyfill for `Intl`
   require('intl/locale-data/jsonp/en-US.js')
   require('intl/locale-data/jsonp/es.js')
}
//Para formatear fechas
let IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
//Para formatear mensajes
let IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

let es = require('./es');
let en = require('./en-US');

let MESSAGES = {};
MESSAGES['es'] = es;
MESSAGES['en-US'] = en;
let locale = 'en-US';

//recibe el mensaje
module.exports = {
    message: function(text, opts){
      opts = opts || {};
      let msg = new IntlMessageFormat(MESSAGES[locale].likes, locale, null);
      return msg.format(opts);
    },
    date: new IntlRelativeFormat(locale)
}
