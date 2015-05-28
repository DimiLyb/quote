angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Dr. Seuss',
    lastText: 'Dont cry because its over, smile because it happened. \n\rYou know youre in love when you cant fall asleep because reality is finally better than your dreams.',
    face: 'http://d.gr-assets.com/authors/1193930952p2/61105.jpg'
  }, {
    id: 1,
    name: 'Oscar Wilde',
    lastText: 'Be yourself, everyone else is already taken.',
    face: 'http://d.gr-assets.com/authors/1357460488p2/3565.jpg'
  },{
    id: 2,
    name: 'Albert Einstein',
    lastText: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
    face: 'http://d.gr-assets.com/authors/1429114964p2/9810.jpg'
  }, {
    id: 3,
    name: 'Frank Zappa',
    lastText: 'So many books, so little time.',
    face: 'http://d.gr-assets.com/authors/1315160559p2/22302.jpg'
  }, {
    id: 4,
    name: 'Mae West',
    lastText: 'You only live once, but if you do it right, once is enough.',
    face: 'http://d.gr-assets.com/authors/1198551937p2/259666.jpg'
  }];

  return {
    all: function() {
      return chats;
      
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
