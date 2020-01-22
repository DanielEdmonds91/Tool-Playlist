
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songsTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('songsTable).insert([
        { id: 1, name: 'intolerance', length: '4:53', album_id: '111'},
        { id: 2, name: 'prison sex', length: '4:56', album_id: '122'},
        { id: 3, name: 'sober', length: '5:06', album_id: '133'},
        { id: 4, name: 'stinkfist', length: '5:11', album_id: '211'},
        { id: 5, name: 'h', length: '6:07', album_id: '222'},
        { id: 6, name: 'aenima', length: '6:39', album_id: '233'},
        { id: 7, name: 'schism', length: '6:47', album_id: '311'},
        { id: 8, name: 'parabola', length: '6:03', album_id: '322'},
        { id: 9, name: 'lateralus', length: '9:24', album_id: '333'}
        { id: 10, name: 'vicarious', length: '7:06', album_id: '411'},
        { id: 11, name: 'the pot', length: '6:21', album_id: '422'},
        { id: 12, name: 'right in two', length: '8:55', album_id: '433'},
        { id: 13, name: 'fear inoculum', length: '10:20', album_id: '511'},
        { id: 14, name: 'pnuema', length: '11:23', album_id: '522'},
        { id: 15, name: 'invincible', length: '12:44', album_id: '533'}
      ]);
    });
};
