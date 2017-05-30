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
      liked: false,
      createdAt: new Date()
    },
    {
      user: {
        username: 'loconluis',
        avatar: 'https://pbs.twimg.com/profile_images/867587108277538816/UnJj79Zi_400x400.jpg'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
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
      createdAt: new Date()
    }
  ];
  empty(main).appendChild(template(pictures));
})
