
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('albumsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('albumsTable').insert([
        {id: 1, title: 'undertow', year: '1993' },
        {id: 2, title: 'aenima', year: '1996'},
        {id: 3, title: 'lateralus', year: '2001'},
        {id: 4, title: '10,000 days', year: '2006'},
        {id: 5, title: 'fear inoculum', year: '2019'}
      ]);
    });
};
