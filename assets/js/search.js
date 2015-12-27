var content = [{
    title: 'Just'
  }, {
    title: 'The'
  }, {
    title: 'Sloop'
  }
  // etc
];

$(function() {
  $('.ui.search')
    .search({
      source: content
    });
});
