function dateStrFunct() {
  let date = new Date();
  let dateStr =
    ("00" + date.getDate()).slice(-2) +
    "." +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "." +
    date.getFullYear() +
    ", " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2);

  return dateStr;
}

function uniqeId () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

const comments = [
  {
      id: uniqeId(),
    profileFoto: {
      uri:
        "https://www.telugubulletin.com/wp-content/uploads/2019/11/Music.jpg",
    },
    name: "humblebrag",
    date: dateStrFunct(),
    comment:
      'Podpiram maske. Podpiram socialno distanciranje. Podpiram testiranje.Ne podpiram cepljenja z "insta" cepivi. Če bi bil v ogroženi skupini, bi se cepil, ker pa nisem se ne bom, dokler ne bo narejeno cepivo, ki omogoča zaščito pred vsemi sevi.',
      likes: 0
  },
  {
    id: uniqeId(),
    profileFoto: {
      uri:
        "https://www.telugubulletin.com/wp-content/uploads/2019/11/Music.jpg",
    },
    name: "JanezKranjski",
    date: dateStrFunct(),
    comment:
      'ne, s tem se pa z ženo že ne bova cepla, počakava na druge, za letos se ne bo rablo cepilni pasuš, ker ne boš mel kam iti, s tem mislim tujino, pr nas, pa se bo pa stanje umirilo po vaušer evforiji, upam',
      likes: 0
  },
];

module.exports = comments;
