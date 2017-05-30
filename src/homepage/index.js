const page = require('page');
const empty = require('empty-element');
const template = require('./template');
const title = require('title');

page('/', function(ctx, next){
  title('Trendigram');
  const main = document.getElementById('main-container');
  let pictures = [
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 45,
      liked: true
    },
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 24,
      liked: true
    },
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 4,
      liked: true
    },
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1024,
      liked: true
    }
  ];
  empty(main).appendChild(template(pictures));
})
