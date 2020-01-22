
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('songsTable').insert([
        { id: 1, name: 'intolerance', length: '4.53', albumsId: 1 },
        { id: 2, name: 'prison sex', length: '4.56', albumsId: 1 },
        { id: 3, name: 'sober', length: '5.06', albumsId: 1 },
        { id: 4, name: 'stinkfist', length: '5.11', albumsId: 2 },
        { id: 5, name: 'h', length: '6.07', albumsId: 2 },
        { id: 6, name: 'aenima', length: '6.39', albumsId: 2 },
        { id: 7, name: 'schism', length: '6.47', albumsId: 3 },
        { id: 8, name: 'parabola', length: '6.03', albumsId: 3 },
        { id: 9, name: 'lateralus', length: '9.24', albumsId: 3 },
        { id: 10, name: 'vicarious', length: '7.06', albumsId: 4 },
        { id: 11, name: 'the pot', length: '6.21', albumsId: 4 },
        { id: 12, name: 'right in two', length: '8.55', albumsId: 4 },
        { id: 13, name: 'fear inoculum', length: '10.20', albumsId: 5 },
        { id: 14, name: 'pnuema', length: '11.23', albumsId: 5 },
        { id: 15, name: 'invincible', length: '12.44', albumsId: 5 }
      ])
    });
};
